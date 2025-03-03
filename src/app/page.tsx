import Links from '@/components/links'

export default function Home() {
  return (
    <div className="font-base">
      <h1 className="text-2xl font-heading sm:text-4xl">Chahine</h1>
      <p className="mt-2 text-lg sm:text-xl">Software Engineer</p>
      <div className="mt-8 text-base sm:text-lg">
        <p>Hi, my name is Chahine Benlahcen Tlemcani, software engineer based in Paris.</p>
        <br />
        <p>
          Always learning, always building. Exploring the intersection of AI, software engineering, and innovation.
        </p>
      </div>

      <Links />
    </div>
  )
}
