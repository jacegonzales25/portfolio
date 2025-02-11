"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { TechnologyCategory } from "@/types/types";
import { useQuery } from "@tanstack/react-query";

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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [api, setApi] = useState<any>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [current, setCurrent] = useState(0);

  const {
    isPending,
    error,
    data: technologyCategories,
  } = useQuery<TechnologyCategory[]>({
    queryKey: ["technologies"],
    queryFn: async () => {
      const res = await fetch(`${API_URL}/technologies`);
      if (!res.ok) throw new Error("Failed to fetch technologies");
      return res.json();
    },
  });

  useEffect(() => {
    if (!api) return;
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  if (isPending) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="w-full">
      <Carousel
        setApi={setApi}
        className="w-full max-w-lg mx-auto"
        opts={{ align: "start", loop: true }}
      >
        <CarouselContent>
          {technologyCategories.map((category) => (
            <CarouselItem
              key={category.id}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <Card className="bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h4 className="text-primary font-mono mb-4">
                    {category.name}
                  </h4>
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
    </div>
  );
}
