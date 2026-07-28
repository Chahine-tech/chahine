export interface Role {
  company: string
  role: string
  description: string
  startDate: string
  endDate: string
  current?: boolean
}

const PAST_ROLES: Role[] = [
  {
    company: 'Foxcase',
    role: 'Co-Founder & Software Engineer',
    description:
      'Co-founded and built Foxcase from the ground up with a partner — product, architecture, and full-stack engineering end to end. Now looking for my next full-time role.',
    startDate: 'Sep 2025',
    endDate: 'Present',
    current: true,
  },
  {
    company: 'Veepee',
    role: 'Software Engineer — R&D',
    description:
      'Worked on Generative AI within the R&D team, exploring and shipping innovative solutions.',
    startDate: 'Dec 2023',
    endDate: 'Sep 2025',
  },
  {
    company: 'Adcoin',
    role: 'Software Engineer',
    description:
      'Developed and maintained software solutions in a fintech startup (internship → apprenticeship).',
    startDate: 'Apr 2022',
    endDate: 'Sep 2023',
  },
]

export default PAST_ROLES
