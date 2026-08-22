import Links from '@/components/links'
import { TerminalWindow } from '@/components/terminal/window'
import { Typewriter } from '@/components/terminal/typewriter'
import { BootGate } from '@/components/terminal/boot-gate'

function Prompt() {
  return (
    <span className="select-none">
      <span className="text-prompt">chahine@paris</span>
      <span className="text-muted">:</span>
      <span className="text-accent">~</span>
      <span className="text-muted">$ </span>
    </span>
  )
}

export default function Home() {
  return (
    <TerminalWindow title="chahine@paris: ~">
      <BootGate>
      <div className="space-y-1 text-sm leading-relaxed sm:text-[15px]">
        <p>
          <Prompt />
          <span className="text-text">whoami</span>
        </p>
        <p className="pl-0 text-lg font-semibold text-text sm:text-2xl">
          <Typewriter text="Chahine Benlahcen Tlemcani" speed={55} />
        </p>

        <div className="h-4" />

        <p>
          <Prompt />
          <span className="text-text">cat role.txt</span>
        </p>
        <p className="text-muted">
          Software Engineer{' '}
          <span className="text-faint">·</span> Paris, France{' '}
          <span className="text-faint">·</span>{' '}
          <span className="text-prompt">open to full-time roles</span>
        </p>

        <div className="h-4" />

        <p>
          <Prompt />
          <span className="text-text">cat about.md</span>
        </p>
        <p className="max-w-[54ch] font-sans text-[15px] leading-relaxed text-muted sm:text-base">
          I build across the stack — from product-facing apps to distributed
          engines, dev tools, and infrastructure — mostly in{' '}
          <span className="text-text">TypeScript</span>,{' '}
          <span className="text-text">Go</span>, and{' '}
          <span className="text-text">Rust</span>. I recently spent a year
          co-founding{' '}
          <span className="text-text">Foxcase</span>, and I&apos;m now looking
          for my next full-time role. Always exploring the intersection of AI,
          systems, and good engineering.
        </p>

        <div className="h-4" />

        <p>
          <Prompt />
          <span className="text-text">ls ~/socials</span>
        </p>
        <Links />

        <div className="h-5" />

        <p>
          <Prompt />
          <span className="animate-blink inline-block h-[1.1em] w-[0.55em] bg-accent align-[-0.18em]" />
        </p>
      </div>
      </BootGate>
    </TerminalWindow>
  )
}
