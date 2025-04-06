import {
  IconType,
  SiAdobeacrobatreader,
  SiGithub,
  SiGmail,
  SiLinkedin,
} from '@icons-pack/react-simple-icons'
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from '@/components/ui/tooltip'

export default function Links() {
  const links: { icon: IconType; href: string, tooltip?: string }[] = [
    {
      icon: SiGmail,
      href: 'mailto:chahine.benlahcen@gmail.com',
    },
    {
      icon: SiGithub,
      href: 'https://github.com/Chahine-tech',
    },
    {
      icon: SiLinkedin,
      href: 'https://www.linkedin.com/in/chahine-benlahcen-tlemcani-999031202/',
    },
    {
      icon: SiAdobeacrobatreader,
      href: '/cv.pdf',
      tooltip: 'Download CV',
    },
  ]

  return (
    <TooltipProvider>
      <div className="mr-auto mt-14 flex w-full flex-wrap items-center gap-10">
        {links.map((link, id) => (
          link.tooltip ? (
            <Tooltip key={id}>
              <TooltipTrigger asChild>
                <a target="_blank" href={link.href}>
                  <link.icon title="" />
                </a>
              </TooltipTrigger>
              <TooltipContent>{link.tooltip}</TooltipContent>
            </Tooltip>
          ) : (
            <a key={id} target="_blank" href={link.href}>
              <link.icon title="" />
            </a>
          )
        ))}
      </div>
    </TooltipProvider>
  )
}
