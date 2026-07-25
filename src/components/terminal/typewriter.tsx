'use client'

import { useEffect, useState } from 'react'
import { playKey } from '@/lib/sound'

interface TypewriterProps {
  text: string
  /** ms per character */
  speed?: number
  /** ms to wait before starting */
  delay?: number
  className?: string
  /** show a blinking cursor after the text finishes */
  cursor?: boolean
}

export function Typewriter({
  text,
  speed = 45,
  delay = 0,
  className,
  cursor = false,
}: TypewriterProps) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(delay === 0)

  useEffect(() => {
    if (started) return
    const t = setTimeout(() => setStarted(true), delay)
    return () => clearTimeout(t)
  }, [started, delay])

  useEffect(() => {
    if (!started || count >= text.length) return
    const t = setTimeout(() => {
      setCount((c) => c + 1)
      if (text[count] !== ' ') playKey()
    }, speed)
    return () => clearTimeout(t)
  }, [started, count, text.length, speed, text])

  return (
    <span className={className}>
      {text.slice(0, count)}
      {cursor && (
        <span
          className="animate-blink ml-0.5 inline-block h-[1.1em] w-[0.55em] bg-accent align-[-0.18em]"
          aria-hidden
        />
      )}
    </span>
  )
}
