'use client'

import { useEffect } from 'react'
import { initSound, playHover, playClick, resumeAudio } from '@/lib/sound'

// Mounts document-level delegated listeners so plain server components can opt
// into sound with data attributes:
//   data-sfx="hover"  → soft tick on pointer enter
//   data-sfx="click"  → blip on click
// (an element can carry both, space-separated: data-sfx="hover click")
export function SoundEffects() {
  useEffect(() => {
    initSound()

    let lastHover: Element | null = null

    const onOver = (e: Event) => {
      const el = (e.target as HTMLElement)?.closest?.('[data-sfx~="hover"]')
      if (el && el !== lastHover) {
        lastHover = el
        playHover()
      } else if (!el) {
        lastHover = null
      }
    }

    const onClick = (e: Event) => {
      const el = (e.target as HTMLElement)?.closest?.('[data-sfx~="click"]')
      if (el) playClick()
    }

    // Browsers keep the audio context suspended until a real gesture — unlock
    // it on the first pointer/key interaction so hover sounds work thereafter.
    const unlock = () => {
      resumeAudio()
      window.removeEventListener('pointerdown', unlock)
      window.removeEventListener('keydown', unlock)
    }
    window.addEventListener('pointerdown', unlock)
    window.addEventListener('keydown', unlock)

    document.addEventListener('pointerover', onOver)
    document.addEventListener('click', onClick)
    return () => {
      window.removeEventListener('pointerdown', unlock)
      window.removeEventListener('keydown', unlock)
      document.removeEventListener('pointerover', onOver)
      document.removeEventListener('click', onClick)
    }
  }, [])

  return null
}
