"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Experience } from "@/types/types";
import { useQuery } from "@tanstack/react-query";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000"; // Use environment variable

// type Job = {
//   company: string
//   title: string
//   date: string
//   responsibilities: string[]
// }

// const jobs: Job[] = [
//   {
//     company: "Example Corp",
//     title: "Senior Cloud Engineer",
//     date: "January 2022 - Present",
//     responsibilities: [
//       "Architected and implemented scalable cloud infrastructure using AWS services",
//       "Developed and maintained CI/CD pipelines using GitHub Actions and AWS CodePipeline",
//       "Implemented Infrastructure as Code using Terraform for multiple projects",
//       "Optimized cloud costs, resulting in a 30% reduction in monthly AWS expenses",
//     ],
//   },
//   {
//     company: "Tech Innovators",
//     title: "DevOps Engineer",
//     date: "June 2019 - December 2021",
//     responsibilities: [
//       "Managed and optimized Kubernetes clusters on EKS",
//       "Implemented monitoring and alerting systems using AWS CloudWatch and Grafana",
//       "Automated deployment processes, reducing deployment time by 50%",
//       "Collaborated with development teams to improve application performance and reliability",
//     ],
//   },
//   // Add more job experiences as needed
// ]

export function Experiences() {
  const [activeJobIndex, setActiveJobIndex] = useState(0);

  const {
    isPending,
    error,
    data: jobs,
  } = useQuery<Experience[]>({
    queryKey: ["jobs"],
    queryFn: async () => {
      const res = await fetch(`${API_URL}/experiences`);
      return res.json();
    },
  });

  if (isPending) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!jobs || jobs.length === 0) return <div>No experiences found.</div>;

  return (
    <section id="experience" className="py-20 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-gray-600">
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
          <h3 className="text-xl font-semibold text-gray-600">
            {jobs[activeJobIndex].title}
          </h3>
          <p className="text-primary mb-4">{jobs[activeJobIndex].company}</p>
          <p className="text-sm text-muted-foreground mb-4">
            {new Date(jobs[activeJobIndex].startDate).toLocaleDateString()}
          </p>
          <ul className="space-y-4">
            {Object.values(
              jobs[activeJobIndex].responsibilities.tasks.map(
                (tasks: string, index: number) => (
                  <li key={index} className="flex">
                    <span className="text-primary mr-2">▹</span>
                    <span className="text-gray-600">{tasks}</span>
                  </li>
                )
              )
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}
