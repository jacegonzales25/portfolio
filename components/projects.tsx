import Image from "next/image"
import { Github, ExternalLink } from "lucide-react"
import Link from "next/link"

type Project = {
  title: string
  description: string
  image: string
  technologies: string[]
  githubLink: string
  externalLink: string
}

const projects: Project[] = [
  {
    title: "Halcyon Theme",
    description:
      "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-X450rnpkGWHoLBEgdykq1vjwDlLXPC.png",
    technologies: ["VS Code", "Sublime Text", "Atom", "iTerm2", "Hyper"],
    githubLink: "#",
    externalLink: "#",
  },
  {
    title: "Spotify Profile",
    description:
      "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-SYh0cx469PazG9SiQkMUunp0oGgzDa.png",
    technologies: ["React", "Express", "Spotify API", "Heroku"],
    githubLink: "#",
    externalLink: "#",
  },
]

export function Projects() {
  return (
    <section id="work" className="py-20 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-200 mb-8">
        <span className="text-primary font-mono text-xl mr-2">03.</span>
        Some Things I've Built
      </h2>
      <div className="space-y-24">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-4`}
          >
            <div className="md:w-1/2 relative">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={500}
                height={300}
                className="rounded-lg"
              />
              <div className="absolute inset-0 bg-primary/20 hover:bg-transparent transition-colors duration-300"></div>
            </div>
            <div className={`md:w-1/2 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
              <p className="text-primary font-mono mb-2">Featured Project</p>
              <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
              <div className="bg-secondary p-6 rounded-lg mb-4">
                <p>{project.description}</p>
              </div>
              <ul className={`flex flex-wrap gap-2 mb-4 ${index % 2 === 0 ? "justify-end" : "justify-start"}`}>
                {project.technologies.map((tech) => (
                  <li key={tech} className="text-sm text-gray-400">
                    {tech}
                  </li>
                ))}
              </ul>
              <div className={`flex gap-4 ${index % 2 === 0 ? "justify-end" : "justify-start"}`}>
                <Link href={project.githubLink} className="text-gray-400 hover:text-primary">
                  <Github className="h-5 w-5" />
                </Link>
                <Link href={project.externalLink} className="text-gray-400 hover:text-primary">
                  <ExternalLink className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

