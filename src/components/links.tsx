import {
  IconType,
  SiGithub,
  SiGmail,
  SiLinkedin,
} from '@icons-pack/react-simple-icons'
import { FileText } from 'lucide-react'

interface LinkItem {
  label: string
  icon: IconType | typeof FileText
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
    icon: SiLinkedin,
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
          className="group inline-flex items-center gap-2 rounded-[4px] border border-border bg-surface-2 px-3 py-1.5 text-sm text-muted transition-all hover:-translate-y-0.5 hover:border-border-strong hover:text-accent"
        >
          <link.icon className="h-4 w-4" title="" />
          <span>{link.label}</span>
        </a>
      ))}
    </div>
  )
}
