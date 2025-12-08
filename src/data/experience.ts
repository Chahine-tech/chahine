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
    endDate: 'September 2025',
  },
  {
    company: 'Adcoin',
    role: 'Software Engineer (Internship → Apprenticeship)',
    description:
      'Developed and maintained software solutions in a fintech startup.',
    startDate: 'April 2022',
    endDate: 'September 2023',
  },
]

export default PAST_ROLES;