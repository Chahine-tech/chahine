import PROJECTS from '@/data/projects'
import { ProjectRow } from '@/components/project-row'
import { TerminalWindow } from '@/components/terminal/window'

export default function Work() {
  return (
    <TerminalWindow title="chahine — ~/work">
      <div className="mb-4 text-sm">
        <span className="select-none">
          <span className="text-prompt">chahine@paris</span>
          <span className="text-muted">:</span>
          <span className="text-accent">~/work</span>
          <span className="text-muted">$ </span>
        </span>
        <span className="text-text">ls -la --sort=impact</span>
      </div>
      <p className="mb-2 pl-1 text-xs text-faint">
        {'// '}
        {PROJECTS.length} selected repositories — see all on{' '}
        <a
          href="https://github.com/Chahine-tech"
          target="_blank"
          rel="noreferrer"
          className="text-muted underline decoration-border underline-offset-2 hover:text-accent"
        >
          github
        </a>
      </p>

      <div className="divide-y divide-border/60">
        {PROJECTS.map((project, i) => (
          <ProjectRow key={project.name} project={project} index={i} />
        ))}
      </div>
    </TerminalWindow>
  )
}
