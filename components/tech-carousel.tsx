"use client"

import { useEffect, useState } from "react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { TechnologyCategory, Technology } from "@/types/types"


const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000"; // Use environment variable


// const technologies = {
//   "Cloud Platforms": [
//     "AWS EC2",
//     "AWS S3",
//     "AWS RDS",
//     "AWS Elastic Beanstalk",
//     "AWS CloudFront",
//     "Docker",
//     "Kubernetes (EKS)",
//   ],
//   "Infrastructure as Code": ["Terraform", "Ansible"],
//   "CI/CD Tools": ["AWS CodePipeline", "CodeBuild", "GitHub Actions"],
//   "Frontend Development": ["React", "Next.js", "Flutter"],
//   "Backend Development": ["Express", "Node.js", "Python", "Java"],
//   "Other Tools": ["Git", "Jenkins", "RESTful APIs", "Linux"],
//   "Scripting & Automation": ["Python", "Bash", "Node.js"],
//   Monitoring: ["AWS CloudWatch"],
//   Languages: ["HTML", "CSS", "JavaScript", "TypeScript", "Python", "Java", "PHP"],
//   Databases: ["PostgreSQL", "MySQL", "MongoDB", "Firebase", "AWS RDS", "Elastic Cache (Memcached)"],
//   Hosting: ["AWS", "GoDaddy"],
// }

export function TechCarousel() {
  const [technologies, setTechnologies] = useState<Record<string, string[]>>({})
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [api, setApi] = useState<any>()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [current, setCurrent] = useState(0)
 // Fetch data from API
 useEffect(() => {
  const fetchTechnologies = async () => {
    try {
      const res = await fetch(`${API_URL}/technology-categories`)
      if (!res.ok) throw new Error("Failed to fetch technologies")
      const data = await res.json()

      // Transform API data into the required format
      const formattedTechnologies: Record<string, string[]> = {}
      data.forEach((category: TechnologyCategory) => {
        formattedTechnologies[category.name] = category.technologies.map((tech: Technology) => tech.name)
      })

      setTechnologies(formattedTechnologies)
    } catch (error) {
      console.error("Error fetching technologies:", error)
    }
  }

  fetchTechnologies()
}, [])

useEffect(() => {
  if (!api) return
  api.on("select", () => {
    setCurrent(api.selectedScrollSnap())
  })
}, [api])

  return (
    <div className="w-full">
      <Carousel
        setApi={setApi}
        className="w-full max-w-lg mx-auto"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {Object.entries(technologies).map(([category, techs]) => (
            <CarouselItem key={category} className="md:basis-1/2 lg:basis-1/3">
              <Card className="bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h4 className="text-primary font-mono mb-4">{category}</h4>
                  <ul className="space-y-2">
                    {techs.map((tech) => (
                      <li key={tech} className="flex items-center gap-2">
                        <span className="text-primary">▹</span>
                        {tech}
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
    </div>
  )
}

