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
    title: "Featured Project 1",
    description:
      "A comprehensive cloud-based solution utilizing AWS services including EC2, S3, and RDS. Implemented with Terraform for infrastructure management and GitHub Actions for CI/CD.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-hPFnBjHW4ACGKp5JW8KH8TlffNE1ba.png",
    technologies: ["AWS", "Terraform", "GitHub Actions", "Node.js"],
    githubLink: "#",
    externalLink: "#",
  },
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
    <section id="projects" className="py-20 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-12">
        <span className="text-primary font-mono text-xl mr-2">03.</span>
        Some Things I&apos;ve Built
      </h2>
      <div className="space-y-32">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className={`relative flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
          >
            {/* Project Image */}
            <div className="absolute w-full md:w-7/12 h-[300px] md:h-[400px]">
              <div className="relative w-full h-full">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover rounded"
                />
                <div className="absolute inset-0 bg-black/50 mix-blend-multiply rounded" />
              </div>
            </div>

            {/* Project Content */}
            <div className={`relative w-full md:w-5/12 ${index % 2 === 0 ? "ml-auto" : "mr-auto"} z-10`}>
              <div className={`text-right ${index % 2 === 1 && "text-left"}`}>
                <p className="text-primary font-mono mb-2">Featured Project</p>
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <div className="bg-card p-6 rounded-lg mb-4 shadow-lg">
                  <p>{project.description}</p>
                </div>
                <ul className={`flex flex-wrap gap-4 mb-4 ${index % 2 === 0 ? "justify-end" : "justify-start"}`}>
                  {project.technologies.map((tech) => (
                    <li key={tech} className="font-mono text-sm">
                      {tech}
                    </li>
                  ))}
                </ul>
                <div className={`flex gap-4 ${index % 2 === 0 ? "justify-end" : "justify-start"}`}>
                  <Link href={project.githubLink} className="hover:text-primary">
                    <Github className="h-5 w-5" />
                  </Link>
                  <Link href={project.externalLink} className="hover:text-primary">
                    <ExternalLink className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

