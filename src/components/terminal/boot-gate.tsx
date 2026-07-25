'use client'

import { ReactNode, useEffect, useLayoutEffect, useState } from 'react'
import { resumeAudio, isAudioUnlocked } from '@/lib/sound'

// Avoids the SSR warning while still running synchronously before paint on the
// client (so already-unlocked navigations skip the gate without a flash).
const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect

/**
 * Terminal "boot" intro. On the very first visit the audio context is locked by
 * the browser, so the whoami animation would type silently. This gate waits for
 * the first key/click — which unlocks audio — then reveals the content so the
 * typing plays with sound. Once audio is unlocked (e.g. after navigating), the
 * gate is skipped entirely.
 */
export function BootGate({ children }: { children: ReactNode }) {
  const [booted, setBooted] = useState(false)

  useIsomorphicLayoutEffect(() => {
    if (isAudioUnlocked()) setBooted(true)
  }, [])

  useEffect(() => {
    if (booted) return
    const boot = () => {
      resumeAudio()
      setBooted(true)
    }
    window.addEventListener('keydown', boot)
    window.addEventListener('pointerdown', boot)
    return () => {
      window.removeEventListener('keydown', boot)
      window.removeEventListener('pointerdown', boot)
    }
  }, [booted])

  if (booted) {
    return <div className="animate-fade-in">{children}</div>
  }

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label="Boot terminal"
      className="flex min-h-[340px] cursor-pointer select-none items-center text-sm sm:text-[15px]"
    >
      <span>
        <span className="text-prompt">chahine@paris</span>
        <span className="text-muted">:</span>
        <span className="text-accent">~</span>
        <span className="text-muted">$ </span>
        <span className="text-muted">press any key to boot</span>
        <span className="animate-blink ml-1 inline-block h-[1.1em] w-[0.55em] bg-accent align-[-0.18em]" />
      </span>
    </div>
  )
}
