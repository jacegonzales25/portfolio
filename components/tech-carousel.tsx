"use client"

import { useEffect, useState } from "react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import type { TechnologyCategory } from "@/types/types"
import { useQuery } from "@tanstack/react-query"

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080"

export function TechCarousel() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [api, setApi] = useState<any>(null)
  const [current, setCurrent] = useState(0)

  const {
    isPending,
    error,
    data: technologyCategories,
  } = useQuery<TechnologyCategory[]>({
    queryKey: ["technologies"],
    queryFn: async () => {
      const res = await fetch(`${API_URL}/technologies`)
      if (!res.ok) throw new Error("Failed to fetch technologies")
      return res.json()
    },
  })

  useEffect(() => {
    if (!api) return
    api.on("select", () => setCurrent(api.selectedScrollSnap()))
  }, [api])

  if (isPending) {
    return (
      <div className="w-full h-40 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="w-full h-40 flex items-center justify-center">
        <div className="text-red-500">Error: {error.message}</div>
      </div>
    )
  }

  return (
    <div className="w-full">
      <Carousel setApi={setApi} className="w-full max-w-lg mx-auto" opts={{ align: "start", loop: true }}>
        <CarouselContent>
          {technologyCategories?.map((category) => (
            <CarouselItem key={category.id} className="md:basis-1/2 lg:basis-1/3">
              <Card className="bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h4 className="text-primary font-mono mb-4">{category.name}</h4>
                  <ul className="space-y-2">
                    {category.technologies.map((tech) => (
                      <li key={tech.id} className="flex items-center gap-2">
                        <span className="text-primary">▹</span>
                        {tech.name}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="flex justify-center mt-4">
        <span className="text-sm text-muted-foreground">
          {current + 1} / {technologyCategories?.length || 0}
        </span>
      </div>
    </div>
  )
}

