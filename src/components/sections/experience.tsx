import PAST_ROLES, { Role } from '@/data/experience'

export default function Experience() {
  return (
    <div>
      <div className="mb-5 text-sm">
        <span className="select-none">
          <span className="text-prompt">chahine@paris</span>
          <span className="text-muted">:</span>
          <span className="text-accent">~/about</span>
          <span className="text-muted">$ </span>
        </span>
        <span className="text-text">cat experience.log</span>
      </div>

      <ol className="relative ml-1 border-l border-border pl-6">
        {PAST_ROLES.map((role: Role, id: number) => (
          <li key={`${role.company}-${id}`} className="mb-8 last:mb-0">
            <span
              className={`absolute -left-[6px] mt-1.5 h-3 w-3 rounded-full border-2 ${
                role.current
                  ? 'animate-pulse border-prompt bg-prompt'
                  : 'border-border-strong bg-surface'
              }`}
            />
            <div className="flex flex-wrap items-baseline gap-x-2">
              <h3 className="text-base font-semibold text-text sm:text-lg">
                {role.role}
              </h3>
              <span className="text-muted">@</span>
              <span className="font-semibold text-accent">{role.company}</span>
            </div>
            <p className="mt-0.5 text-xs text-faint">
              {role.startDate} — {role.endDate}
            </p>
            <p className="mt-2 max-w-[60ch] font-sans text-sm leading-relaxed text-muted">
              {role.description}
            </p>
          </li>
        ))}
      </ol>
    </div>
  )
}
