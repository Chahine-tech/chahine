import { SiGithub, SiGmail } from '@icons-pack/react-simple-icons'
import { FileText } from 'lucide-react'
import type { ComponentType, SVGProps } from 'react'

// LinkedIn was removed from Simple Icons (brand policy) and lucide dropped its
// brand icons, so we ship the official mark inline.
function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.848 3.37-1.848 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
    </svg>
  )
}

interface LinkItem {
  label: string
  icon: ComponentType<{ className?: string } & Partial<SVGProps<SVGSVGElement>>>
  href: string
}

const links: LinkItem[] = [
  {
    label: 'github',
    icon: SiGithub,
    href: 'https://github.com/Chahine-tech',
  },
  {
    label: 'linkedin',
    icon: LinkedinIcon,
    href: 'https://www.linkedin.com/in/chahine-benlahcen-tlemcani-999031202/',
  },
  {
    label: 'email',
    icon: SiGmail,
    href: 'mailto:chahine.benlahcen@gmail.com',
  },
  {
    label: 'cv',
    icon: FileText,
    href: '/cv.pdf',
  },
]

export default function Links() {
  return (
    <div className="mt-8 flex flex-wrap items-center gap-2.5">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target={link.href.startsWith('http') ? '_blank' : undefined}
          rel="noreferrer"
          data-sfx="hover click"
          className="group inline-flex items-center gap-2 rounded-[4px] border border-border bg-surface-2 px-3 py-1.5 text-sm text-muted transition-all hover:-translate-y-0.5 hover:border-border-strong hover:text-accent"
        >
          <link.icon className="h-4 w-4" />
          <span>{link.label}</span>
        </a>
      ))}
    </div>
  )
}
