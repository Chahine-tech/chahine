import Experience from '@/components/sections/experience'
import { TerminalWindow } from '@/components/terminal/window'

export default function About() {
  return (
    <div className="space-y-6">
      <TerminalWindow title="chahine — ~/about">
        <div className="mb-4 text-sm">
          <span className="select-none">
            <span className="text-prompt">chahine@paris</span>
            <span className="text-muted">:</span>
            <span className="text-accent">~/about</span>
            <span className="text-muted">$ </span>
          </span>
          <span className="text-text">cat readme.md</span>
        </div>

        <div className="space-y-4 font-sans text-[15px] leading-relaxed text-muted sm:text-base">
          <p>
            I&apos;m a software engineer based in Paris, drawn to systems,
            research, and building things from first principles. I spent nearly
            two years in{' '}
            <span className="text-text">Veepee&apos;s R&amp;D team</span>{' '}
            working on Generative AI, and before that shipped software at{' '}
            <span className="text-text">Adcoin</span>, a fintech startup. Most
            recently I co-founded{' '}
            <span className="text-text">Foxcase</span> with a friend — wearing
            every hat from product to architecture — and I&apos;m now looking
            for my next full-time role.
          </p>
          <p>
            I work across the stack — from product engineering to backend and
            systems: distributed systems, developer tooling, and infrastructure.
            Day to day that&apos;s mostly{' '}
            <span className="text-text">TypeScript</span> and{' '}
            <span className="text-text">Go</span>, with{' '}
            <span className="text-text">Rust</span> for the systems-heavy work,
            and increasingly at the intersection with AI. I like hard problems,
            learning new stacks for the sake of it, and shipping things that are
            correct and fast.
          </p>
        </div>
      </TerminalWindow>

      <TerminalWindow title="chahine — ~/about/experience">
        <Experience />
      </TerminalWindow>
    </div>
  )
}
