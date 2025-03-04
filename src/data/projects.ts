const PROJECTS: {
  name: string
  description: string
  previewImage: string
  repoUrl: string
  liveLink: string
}[] = [
  {
    name: 'Wikipedia Mapper',
    description: 'A Wikipedia page mapping tool written in Rust.',
    liveLink: '#',
    previewImage: '/project1.png',
    repoUrl: 'https://github.com/Chahine-tech/wikipedia-mapper',
  },
  {
    name: 'Rusty Vault',
    description: 'A Rust-based SSH agent enabling secure key management with hardware-backed cryptography on Windows.',
    liveLink: '#',
    previewImage: '/project2.png',
    repoUrl: 'https://github.com/Chahine-tech/rustyVault',
  },
  {
    name: 'Minikeyvalue',
    description: 'Lightweight key-value store written in Go',
    liveLink: '#',
    previewImage: '/project3.png',
    repoUrl: 'https://github.com/Chahine-tech/minikeyvalue',
  },
  {
    name: 'Adecur',
    description: 'Website for ADECUR, an association supporting condominium unions connected to the Massy-Antony district heating network.',
    liveLink: 'https://adecur.fr/',
    previewImage: '/project4.png',
    repoUrl: '#',
  },
]

export default PROJECTS
