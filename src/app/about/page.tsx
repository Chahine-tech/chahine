import Experience from '@/components/sections/experience'

export default function About() {
  return (
    <div className="font-base">
      <h1 className="mb-8 text-2xl font-heading sm:text-4xl">About</h1>

      <div className="mb-10 text-base sm:text-lg">
        <p>
          I am a passionate Software Engineer with a strong interest in research and innovation. 
          Currently working in the R&D team at Veepee, I specialize in Generative AI, exploring and 
          developing cutting-edge solutions. Previously, I worked at Adcoin, a fintech startup, 
          where I gained experience in software development and problem-solving.  
        </p>
        <p className="mt-4">
          I enjoy tackling complex challenges, learning new technologies, and contributing to 
          impactful projects. My expertise includes AI, backend development, and scalable 
          software architecture. I am always eager to explore new opportunities and collaborate 
          on exciting initiatives.
        </p>
      </div>

      <Experience />
    </div>
  )
}
