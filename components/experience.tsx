"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

type Job = {
  company: string
  title: string
  date: string
  responsibilities: string[]
}

const jobs: Job[] = [
  {
    company: "Example Corp",
    title: "Senior Cloud Engineer",
    date: "January 2022 - Present",
    responsibilities: [
      "Architected and implemented scalable cloud infrastructure using AWS services",
      "Developed and maintained CI/CD pipelines using GitHub Actions and AWS CodePipeline",
      "Implemented Infrastructure as Code using Terraform for multiple projects",
      "Optimized cloud costs, resulting in a 30% reduction in monthly AWS expenses",
    ],
  },
  {
    company: "Tech Innovators",
    title: "DevOps Engineer",
    date: "June 2019 - December 2021",
    responsibilities: [
      "Managed and optimized Kubernetes clusters on EKS",
      "Implemented monitoring and alerting systems using AWS CloudWatch and Grafana",
      "Automated deployment processes, reducing deployment time by 50%",
      "Collaborated with development teams to improve application performance and reliability",
    ],
  },
  // Add more job experiences as needed
]

export function Experience() {
  const [activeJobIndex, setActiveJobIndex] = useState(0)

  return (
    <section id="experience" className="py-20 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">
        <span className="text-primary font-mono text-xl mr-2">02.</span>
        Where I&apos;ve Worked
      </h2>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="md:w-1/4 relative">
          {jobs.map((job, index) => (
            <Button
              key={job.company}
              variant={activeJobIndex === index ? "secondary" : "ghost"}
              className="w-full justify-start mb-2"
              onClick={() => setActiveJobIndex(index)}
            >
              {job.company}
            </Button>
          ))}
          <motion.div
            className="absolute left-0 w-1 bg-primary rounded"
            initial={{ top: 0, height: 0 }}
            animate={{
              top: `${activeJobIndex * 40}px`,
              height: "40px",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        </div>
        <div className="md:w-3/4">
          <h3 className="text-xl font-semibold">{jobs[activeJobIndex].title}</h3>
          <p className="text-primary mb-4">{jobs[activeJobIndex].company}</p>
          <p className="text-sm text-muted-foreground mb-4">{jobs[activeJobIndex].date}</p>
          <ul className="space-y-4">
            {jobs[activeJobIndex].responsibilities.map((responsibility, index) => (
              <li key={index} className="flex">
                <span className="text-primary mr-2">▹</span>
                <span>{responsibility}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

