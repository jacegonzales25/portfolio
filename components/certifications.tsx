"use client"

import { Folder, ExternalLink } from "lucide-react"
import Link from "next/link"
import type { Certification } from "@/types/types"
import { useQuery } from "@tanstack/react-query"
import { LoadingErrorState } from "@/components/loading-error-state"
import { EmptyState } from "@/components/empty-state"


export function Certifications() {
  const {
    isPending,
    error,
    data: certifications,
  } = useQuery<Certification[]>({
    queryKey: ["certifications"],
    queryFn: async () => {
      const res = await fetch(`/certifications`)
      if (!res.ok) throw new Error("Failed to fetch certifications")
      return res.json()
    },
  })

  return (
    <section id="certifications" className="py-20 max-w-4xl mx-auto">
      <h2 className="text-center text-3xl font-bold text-gray-600 mb-8 animate-fade-up">
        <span className="text-primary font-mono text-xl mr-2">04.</span>
        Professional Certifications
      </h2>
      <LoadingErrorState
        isLoading={isPending}
        error={error as Error | null}
        loadingMessage="Loading certifications..."
        errorMessage="Failed to load certifications. Please try again later."
      />
      {certifications && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.length === 0 ? (
            <div className="col-span-full">
              <EmptyState message="No certifications yet. Check back soon!" />
            </div>
          ) : (
            certifications.map((cert, index) => (
              <div
                key={cert.title}
                className="bg-secondary/50 rounded-lg p-6 hover:-translate-y-2 transition-transform duration-200 animate-fade-up"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="flex justify-between items-start mb-4">
                  <Folder className="h-10 w-10 text-primary" />
                  <Link href={cert.url} className="text-muted-foreground hover:text-primary">
                    <ExternalLink className="h-5 w-5" />
                  </Link>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-400">{cert.title}</h3>
                <p className="text-primary mb-2">{cert.issuer}</p>
                <p className="text-muted-foreground text-sm mb-4">{cert.description}</p>
                <p className="text-sm text-muted-foreground">{new Date(cert.issueDate).toDateString()}</p>
              </div>
            ))
          )}
        </div>
      )}
    </section>
  )
}

