'use client'

import { Link } from 'next-view-transitions'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { ThemeSwitcher } from './theme-switcher'

export default function Nav() {
  const path = usePathname()

  const links = [
    { path: '/', text: '~' },
    { path: '/about', text: 'about' },
    { path: '/work', text: 'work' },
  ]

  return (
    <div className="fixed left-0 top-5 z-50 w-full px-5">
      <nav className="mx-auto flex w-max items-center gap-1 rounded-base border border-border bg-surface/80 p-1.5 text-sm shadow-[0_8px_30px_-16px_rgba(0,0,0,0.6)] backdrop-blur-md">
        {links.map((link) => {
          const active = path === link.path
          return (
            <Link
              key={link.path}
              href={link.path}
              className={clsx(
                'rounded-[4px] px-3 py-1.5 transition-colors',
                active
                  ? 'bg-surface-2 text-accent'
                  : 'text-muted hover:text-text',
              )}
            >
              {link.text}
            </Link>
          )
        })}
        <span className="mx-1 h-4 w-px bg-border" />
        <ThemeSwitcher />
      </nav>
    </div>
  )
}
