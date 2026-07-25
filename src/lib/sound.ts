// Low-latency UI sound for the terminal theme.
//
// Two paths live here:
//  1. Synthesized one-shot blips via the Web Audio API (OscillatorNode) — no
//     asset files needed, perfect for tiny UI ticks/keystrokes/clicks.
//  2. Buffer playback (`preloadSound` / `playSound`) for when you drop a real
//     audio file in /public and want to play it with near-zero latency.
//
// All playback is gated behind a user-toggled `enabled` flag (persisted in
// localStorage), so nothing ever plays until the visitor opts in.

let ctx: AudioContext | null = null
let enabled = false
let unlocked = false
const buffers = new Map<string, AudioBuffer | Promise<AudioBuffer>>()

const STORAGE_KEY = 'sound-enabled'

function getContext(): AudioContext | null {
  if (typeof window === 'undefined') return null
  if (!ctx) {
    const AC = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
    if (!AC) return null
    ctx = new AC()
  }
  return ctx
}

/** Read the persisted preference. Call once on the client before using sound.
 *  Sound is ON by default; it only stays off if the visitor explicitly muted. */
export function initSound() {
  if (typeof window === 'undefined') return
  enabled = localStorage.getItem(STORAGE_KEY) !== 'off'
}

export function isSoundEnabled() {
  return enabled
}

/** Has the audio context been unlocked by a user gesture yet? */
export function isAudioUnlocked() {
  return unlocked
}

/** Resume the audio context — must be called from within a user gesture. */
export function resumeAudio() {
  const c = getContext()
  if (!c) return
  if (c.state === 'suspended') c.resume()
  unlocked = true
}

export function setSoundEnabled(value: boolean) {
  enabled = value
  if (typeof window === 'undefined') return
  localStorage.setItem(STORAGE_KEY, value ? 'on' : 'off')
  // Unlock/resume the context inside the click gesture that flipped this on.
  if (value) getContext()?.resume()
  window.dispatchEvent(new Event('sound-change'))
}

// --- synthesized blips -------------------------------------------------------

interface ToneOptions {
  freq: number
  duration: number
  type?: OscillatorType
  volume?: number
  /** Hz offset to glide to over the duration (negative = downward glide). */
  sweep?: number
  /** Low-pass cutoff (Hz) to round off harsh harmonics. */
  cutoff?: number
}

function tone({
  freq,
  duration,
  type = 'sine',
  volume = 0.04,
  sweep = 0,
  cutoff = 2400,
}: ToneOptions) {
  if (!enabled) return
  const c = getContext()
  if (!c) return
  if (c.state === 'suspended') c.resume()

  const now = c.currentTime
  const osc = c.createOscillator()
  const gain = c.createGain()
  const filter = c.createBiquadFilter()

  osc.type = type
  osc.frequency.setValueAtTime(freq, now)
  if (sweep) {
    osc.frequency.exponentialRampToValueAtTime(
      Math.max(60, freq + sweep),
      now + duration,
    )
  }

  filter.type = 'lowpass'
  filter.frequency.value = cutoff

  // Soft attack (avoids the click/pop of an instant onset) then gentle decay.
  gain.gain.setValueAtTime(0.0001, now)
  gain.gain.exponentialRampToValueAtTime(volume, now + 0.007)
  gain.gain.exponentialRampToValueAtTime(0.0001, now + duration)

  osc.connect(filter).connect(gain).connect(c.destination)
  osc.start(now)
  osc.stop(now + duration + 0.02)
}

/** Airy, barely-there tick — for hover. */
export const playHover = () =>
  tone({ freq: 1320, duration: 0.035, volume: 0.022, cutoff: 3200 })

/** Soft rounded blip that settles downward — for clicks / navigation. */
export const playClick = () =>
  tone({ freq: 500, duration: 0.11, volume: 0.045, sweep: -150, cutoff: 2000 })

/** Muted "thock" keystroke — for the typewriter. */
export const playKey = () =>
  tone({
    freq: 360 + Math.random() * 90,
    duration: 0.026,
    volume: 0.03,
    cutoff: 1600,
  })

// --- buffer playback (for real audio files) ---------------------------------

async function load(context: AudioContext, src: string): Promise<AudioBuffer> {
  const res = await fetch(src)
  const data = await res.arrayBuffer()
  const buffer = await context.decodeAudioData(data)
  buffers.set(src, buffer)
  return buffer
}

/** Warm the cache so the first play is instant. Safe to call eagerly. */
export function preloadSound(src: string) {
  const context = getContext()
  if (!context || buffers.has(src)) return
  buffers.set(src, load(context, src))
}

/** Play a file-based sound. Must run inside a user gesture the first time. */
export function playSound(src: string, volume = 0.1) {
  if (!enabled) return
  const context = getContext()
  if (!context) return
  if (context.state === 'suspended') context.resume()

  const play = (buffer: AudioBuffer) => {
    const source = context.createBufferSource()
    source.buffer = buffer
    const gain = context.createGain()
    gain.gain.value = volume
    source.connect(gain).connect(context.destination)
    source.start()
  }

  const cached = buffers.get(src)
  if (cached instanceof AudioBuffer) {
    play(cached)
  } else if (cached) {
    cached.then(play).catch(() => {})
  } else {
    load(context, src).then(play).catch(() => {})
  }
}
