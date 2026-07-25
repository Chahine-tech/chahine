import type { Metadata } from 'next'
import { JetBrains_Mono, Inter } from 'next/font/google'
import './globals.css'
import Nav from '@/components/nav'
import { ViewTransitions } from 'next-view-transitions'
import { ThemeProvider } from '@/components/theme-provider'
import { SoundEffects } from '@/components/sound-effects'

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

const sans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Chahine — Software Engineer',
  description:
    'Chahine Benlahcen Tlemcani — software engineer in Paris building systems in Rust, Go, and Zig.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ViewTransitions>
      <html lang="en" suppressHydrationWarning>
        <body className={`${mono.variable} ${sans.variable} font-mono`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem={false}
            disableTransitionOnChange
          >
            <SoundEffects />
            <Nav />
            <main className="relative z-10 mx-auto w-[760px] max-w-full px-5 pb-24 pt-28">
              {children}
            </main>
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  )
}
