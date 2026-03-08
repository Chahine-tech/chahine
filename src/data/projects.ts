export interface Project {
  name: string;
  description: string;
  previewImage: string;
  repoUrl: string;
  liveLink: string;
}

const PROJECTS: Project[] = [
  {
    name: 'Lumen',
    description: 'Production-ready airgap Kubernetes environment — 3-zone architecture, 5-layer security (OPA + PSS + NetworkPolicies + Falco + Cosign), Vault HA + cert-manager mTLS, full observability (Prometheus, Loki, Tempo), GitOps with ArgoCD, canary CI/CD via Gitea Actions + Argo Rollouts, chaos testing with Chaos Mesh, and IaC via Terraform + Ansible.',
    liveLink: '#',
    previewImage: '/project7.png',
    repoUrl: '#',
  },
  {
    name: 'SQLens',
    description: 'A powerful SQL query analyzer and optimizer supporting MySQL, PostgreSQL, SQL Server, SQLite, and Oracle"',
    liveLink: '#',
    previewImage: '/project7.png',
    repoUrl: 'https://github.com/Chahine-tech/sqlens',
  },
  {
    name: 'Nexus',
    description: 'Distributed search engine built in Rust — QUIC transport, hybrid BM25+vector scoring, gossip-based PageRank, ε-differential privacy"',
    liveLink: '#',
    previewImage: '/project7.png',
    repoUrl: 'https://github.com/Chahine-tech/nexus',
  },
  {
    name: 'Airgap pkg',
    description: 'Air-gapped package manager for securely transferring, signing, and verifying packages across offline systems.',
    liveLink: '#',
    previewImage: '/project7.png',
    repoUrl: 'https://github.com/Chahine-tech/airgap-pkg',
  },
  {
    name: 'Beacon',
    description: 'Beacon is a high-performance, real-time log aggregation system built with Elixir, designed to compete with ELK stack while offering better real-time capabilities and resource efficiency. It can handle millions of log entries per second with true real-time processing and alerting.',
    liveLink: '#',
    previewImage: '/project6.png',
    repoUrl: 'https://github.com/Chahine-tech/beacon',
  },
  {
    name: 'Prox',
    description: 'Prox is a lightweight, high-performance reverse proxy server written in Rust.',
    liveLink: '#',
    previewImage: '/project5.png',
    repoUrl: 'https://github.com/Chahine-tech/prox',
  },
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

export default PROJECTS;