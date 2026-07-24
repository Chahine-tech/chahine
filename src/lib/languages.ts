// GitHub-style language accent colors.
const LANGUAGE_COLORS: Record<string, string> = {
  Rust: '#dea584',
  Go: '#00add8',
  Zig: '#ec915c',
  TypeScript: '#3178c6',
  JavaScript: '#f1e05a',
  Gleam: '#ffaff3',
  Elixir: '#6e4a7e',
  Swift: '#f05138',
  Python: '#3572a5',
  C: '#7f7f7f',
}

export function languageColor(language: string): string {
  return LANGUAGE_COLORS[language] ?? '#8b98a5'
}
