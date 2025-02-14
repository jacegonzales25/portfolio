"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Image from "next/image"
import { Github, ExternalLink } from "lucide-react"
import Link from "next/link"
import type { Project } from "@/types/types"
import { useQuery } from "@tanstack/react-query"
import { LoadingErrorState } from "@/components/loading-error-state"
import { EmptyState } from "@/components/empty-state"


export function Projects() {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0)

  const {
    isPending,
    error,
    data: projects,
  } = useQuery<Project[]>({
    queryKey: ["projects"],
    queryFn: async () => {
      const res = await fetch(`/projects`)
      if (!res.ok) throw new Error("Failed to fetch projects")
      return res.json()
    },
  })

  return (
    <section id="projects" className="py-20 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-gray-600">
        <span className="text-primary font-mono text-xl mr-2">03.</span>
        Some Things I&apos;ve Deployed
      </h2>
      <LoadingErrorState
        isLoading={isPending}
        error={error as Error | null}
        loadingMessage="Loading projects..."
        errorMessage="Failed to load projects. Please try again later."
      />
      {projects &&
        (projects.length === 0 ? (
          <EmptyState message="No projects to display yet. Check back soon!" />
        ) : (
          <div className="flex flex-col md:flex-row gap-4">
            <div className="md:w-1/4 relative">
              {projects.map((project, index) => (
                <Button
                  key={project.id}
                  variant={activeProjectIndex === index ? "secondary" : "ghost"}
                  className="w-full justify-start mb-2"
                  onClick={() => setActiveProjectIndex(index)}
                >
                  {project.title}
                </Button>
              ))}
              <motion.div
                className="absolute left-0 w-1 bg-primary rounded"
                initial={{ top: 0, height: 0 }}
                animate={{
                  top: `${activeProjectIndex * 40}px`,
                  height: "40px",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            </div>
            <div className="md:w-3/4">
              <div className="relative w-full h-48 mb-6">
                <Image
                  src={projects[activeProjectIndex].image || "/placeholder.svg"}
                  alt={projects[activeProjectIndex].title}
                  fill
                  className="object-cover rounded"
                />
                <div className="absolute inset-0 bg-black/50 mix-blend-multiply rounded" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600">{projects[activeProjectIndex].title}</h3>
              <p className="text-primary mb-4">{projects[activeProjectIndex].description}</p>
              <ul className="flex flex-wrap gap-2 mb-4">
                {projects[activeProjectIndex].technologies.map((tech) => (
                  <li key={tech.id} className="text-sm font-mono text-gray-900">
                    {tech.name}
                  </li>
                ))}
              </ul>
              <div className="flex gap-4">
                <Link
                  href={projects[activeProjectIndex].githubLink}
                  className="text-gray-400 hover:text-gray-900 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5" />
                </Link>
                {projects[activeProjectIndex].externalLink && (
                  <Link
                    href={projects[activeProjectIndex].externalLink}
                    className="text-gray-400 hover:text-gray-900 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
    </section>
  )
}

