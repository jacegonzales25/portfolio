import { Nav } from "@/components/nav"
import { SocialLinks } from "@/components/social-links"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Nav />
      <SocialLinks />
      <div className="max-w-7xl mx-auto px-4 pt-24">
        <section className="min-h-screen flex items-center">
          <div className="space-y-4">
            <p className="text-primary font-mono">Hi, my name is</p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-gray-200">
              Your Name.
            </h1>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-gray-400">
              I build things for the web.
            </h2>
            <p className="max-w-xl text-gray-400">
              I&aposm a software engineer specializing in building (and occasionally designing) exceptional digital
              experiences. Currently, I&aposm focused on building accessible, human-centered products.
            </p>
          </div>
        </section>
        <About />
        <Experience />
        <Projects />
      </div>
    </main>
  )
}

