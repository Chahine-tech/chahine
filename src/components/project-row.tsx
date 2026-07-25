import { Project } from '@/data/projects'
import { languageColor } from '@/lib/languages'
import { Star, ArrowUpRight } from 'lucide-react'

export function ProjectRow({
  project,
  index,
}: {
  project: Project
  index: number
}) {
  const hasRepo = project.repoUrl && project.repoUrl !== '#'

  return (
    <div
      data-sfx="hover"
      className="animate-fade-up group relative rounded-base border border-transparent px-3 py-4 transition-colors hover:border-border hover:bg-surface-2/60"
      style={{ animationDelay: `${Math.min(index * 60, 600)}ms` }}
    >
      {/* accent bar on hover */}
      <span className="absolute left-0 top-1/2 h-0 w-[2px] -translate-y-1/2 rounded-full bg-accent transition-all duration-300 group-hover:h-[70%]" />

      <div className="flex items-baseline justify-between gap-4">
        <h3 className="text-base font-semibold text-text transition-colors group-hover:text-accent sm:text-lg">
          {project.name}
        </h3>
        <div className="flex shrink-0 items-center gap-3 text-xs text-muted">
          <span className="inline-flex items-center gap-1.5">
            <span
              className="h-2.5 w-2.5 rounded-full"
              style={{ backgroundColor: languageColor(project.language) }}
            />
            {project.language}
          </span>
          {project.stars ? (
            <span className="inline-flex items-center gap-1">
              <Star className="h-3 w-3" />
              {project.stars}
            </span>
          ) : null}
        </div>
      </div>

      <p className="mt-1.5 max-w-[62ch] font-sans text-sm leading-relaxed text-muted">
        {project.description}
      </p>

      <div className="mt-3 flex flex-wrap items-center gap-4 text-xs">
        {hasRepo && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            data-sfx="hover click"
            className="inline-flex items-center gap-1 text-faint transition-colors hover:text-accent"
          >
            cd repo <ArrowUpRight className="h-3 w-3" />
          </a>
        )}
        {project.liveLink && (
          <a
            href={project.liveLink}
            target="_blank"
            rel="noreferrer"
            data-sfx="hover click"
            className="inline-flex items-center gap-1 text-faint transition-colors hover:text-accent"
          >
            open live <ArrowUpRight className="h-3 w-3" />
          </a>
        )}
      </div>
    </div>
  )
}
