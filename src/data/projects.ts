export interface Project {
  name: string
  description: string
  language: string
  stars?: number
  repoUrl: string
  liveLink?: string
}

const PROJECTS: Project[] = [
  {
    name: 'meridian',
    description:
      'Self-hosted real-time sync engine with CRDT primitives, WebSocket live queries, and a TypeScript/React SDK.',
    language: 'Rust',
    stars: 4,
    repoUrl: 'https://github.com/Chahine-tech/meridian',
  },
  {
    name: 'nexus',
    description:
      'Distributed search engine — QUIC transport, hybrid BM25 + vector scoring, gossip-based PageRank, ε-differential privacy.',
    language: 'Rust',
    repoUrl: 'https://github.com/Chahine-tech/nexus',
  },
  {
    name: 'flux',
    description:
      'Canary deployments on a durable Temporal workflow in Effect v4 — step traffic, watch metrics, auto rollback on regression. No Kubernetes.',
    language: 'TypeScript',
    repoUrl: 'https://github.com/Chahine-tech/flux',
  },
  {
    name: 'lumen',
    description:
      'Production-like air-gapped Kubernetes cluster — 5-layer security (OPA, PSS, NetworkPolicies, Falco, Cosign), Vault HA + mTLS, full observability, GitOps with ArgoCD.',
    language: 'Go',
    repoUrl: 'https://github.com/Chahine-tech/lumen',
  },
  {
    name: 'os',
    description:
      'x86_64 hobby operating system in Zig with a Lua shell, networking, and disk persistence — built for fun.',
    language: 'Zig',
    repoUrl: 'https://github.com/Chahine-tech/os',
  },
  {
    name: 'prox',
    description:
      'Lightweight, high-performance reverse proxy server written in Rust.',
    language: 'Rust',
    stars: 3,
    repoUrl: 'https://github.com/Chahine-tech/prox',
  },
  {
    name: 'sqlens',
    description:
      'SQL query analyzer and optimizer supporting MySQL, PostgreSQL, SQL Server, SQLite, and Oracle.',
    language: 'Go',
    stars: 6,
    repoUrl: 'https://github.com/Chahine-tech/sqlens',
  },
  {
    name: 'cargo-regress',
    description:
      'Binary size regression analysis for Rust projects — compare symbol-level bloat between git commits.',
    language: 'Rust',
    repoUrl: 'https://github.com/Chahine-tech/cargo-regress',
  },
  {
    name: 'arr-sync',
    description:
      'Daemon that resyncs qBittorrent when Sonarr/Radarr renames or moves files — matches by BitTorrent piece hash, not filename.',
    language: 'Gleam',
    stars: 4,
    repoUrl: 'https://github.com/Chahine-tech/arr-sync',
  },
  {
    name: 'airgap-pkg',
    description:
      'Air-gapped package manager for securely transferring, signing, and verifying packages across offline systems.',
    language: 'Go',
    stars: 4,
    repoUrl: 'https://github.com/Chahine-tech/airgap-pkg',
  },
  {
    name: 'beacon',
    description:
      'Distributed, real-time log aggregation system in Elixir — designed to rival the ELK stack on latency and resource efficiency.',
    language: 'Elixir',
    repoUrl: 'https://github.com/Chahine-tech/beacon',
  },
  {
    name: 'orbit',
    description:
      'Desktop workspace manager for AI coding CLIs — isolated sessions per project.',
    language: 'TypeScript',
    repoUrl: 'https://github.com/Chahine-tech/Orbit',
  },
  {
    name: 'promptci',
    description:
      'Pytest for LLM prompts — write tests, detect regressions, run them in CI.',
    language: 'Python',
    repoUrl: 'https://github.com/Chahine-tech/PromptCI',
  },
  {
    name: 'swiftspeed',
    description:
      'Minimal, native macOS menu bar app for testing your internet speed — download, upload, ping.',
    language: 'Swift',
    stars: 1,
    repoUrl: 'https://github.com/Chahine-tech/fast',
  },
  {
    name: 'adecur',
    description:
      'Website for ADECUR, an association supporting condominium unions on the Massy-Antony district heating network.',
    language: 'TypeScript',
    repoUrl: '#',
    liveLink: 'https://adecur.fr/',
  },
]

export default PROJECTS
