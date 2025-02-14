"use client"

import { useQuery } from "@tanstack/react-query"
import Image from "next/image"
import Link from "next/link"
import { Github, ExternalLink } from "lucide-react"

import type { Project } from "@/types/types"
import { LoadingErrorState } from "@/components/loading-error-state"
import { EmptyState } from "@/components/empty-state"

export function Projects() {
  // Fetch projects with React Query
  const {
    isPending,
    error,
    data: projects,
  } = useQuery<Project[]>({
    queryKey: ["projects"],
    queryFn: async () => {
      const res = await fetch("/api/projects")
      if (!res.ok) throw new Error("Failed to fetch projects")
      return res.json()
    },
  })

  return (
    <section id="projects" className="py-20 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-12">
        <span className="text-primary font-mono text-xl mr-2">03.</span>
        Some Things I&apos;ve Built
      </h2>

      {/* Loading & Error States */}
      <LoadingErrorState
        isLoading={isPending}
        error={error as Error | null}
        loadingMessage="Loading projects..."
        errorMessage="Failed to load projects. Please try again later."
      />

      {/* If data is loaded and no error */}
      {projects && (
        projects.length === 0 ? (
          <EmptyState message="No projects to display yet. Check back soon!" />
        ) : (
          <div className="space-y-32">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                {/* Project Image (background) */}
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
                <div
                  className={`relative w-full md:w-5/12 ${
                    index % 2 === 0 ? "ml-auto" : "mr-auto"
                  } z-10`}
                >
                  <div
                    className={`${
                      index % 2 === 1 ? "text-left" : "text-right"
                    }`}
                  >
                    <p className="text-primary font-mono mb-2">
                      Featured Project
                    </p>
                    <h3 className="text-2xl font-bold mb-4">
                      {project.title}
                    </h3>
                    <div className="bg-card p-6 rounded-lg mb-4 shadow-lg">
                      <p>{project.description}</p>
                    </div>
                    <ul
                      className={`flex flex-wrap gap-4 mb-4 ${
                        index % 2 === 0 ? "justify-end" : "justify-start"
                      }`}
                    >
                      {project.technologies.map((tech) => (
                        <li key={tech.id} className="font-mono text-sm">
                          {tech.name}
                        </li>
                      ))}
                    </ul>
                    <div
                      className={`flex gap-4 ${
                        index % 2 === 0 ? "justify-end" : "justify-start"
                      }`}
                    >
                      {/* GitHub Link */}
                      {project.githubLink && (
                        <Link
                          href={project.githubLink}
                          className="hover:text-primary"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-5 w-5" />
                        </Link>
                      )}
                      {/* External Link */}
                      {project.externalLink && (
                        <Link
                          href={project.externalLink}
                          className="hover:text-primary"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-5 w-5" />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )
      )}
    </section>
  )
}
