import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Skills } from '@/components/skills'
import { Projects } from '@/components/projects'
import { Roadmap } from '@/components/roadmap'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      <Hero />
      <div id="about" className="pt-20" />
      <Skills />
      <Projects />
      <Roadmap />
      <Contact />
      <Footer />
    </main>
  )
}
