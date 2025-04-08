export interface Role {
  company: string;
  role: string;
  description: string;
  startDate: string;
  endDate: string;
}

const PAST_ROLES: Role[] = [
  {
    company: 'Veepee',
    role: 'Software Engineer - R&D (Apprenticeship)',
    description:
      'Working on Generative AI within the R&D team, exploring and developing innovative solutions.',
    startDate: 'December 2023',
    endDate: 'Now',
  },
  {
    company: 'Adcoin',
    role: 'Software Engineer (Apprenticeship)',
    description:
      'Developed and maintained software solutions in a fintech startup.',
    startDate: 'April 2022',
    endDate: 'August 2023',
  },
]

export default PAST_ROLES;