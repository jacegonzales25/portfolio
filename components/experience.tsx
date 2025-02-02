"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

type Job = {
  company: string
  title: string
  date: string
  responsibilities: string[]
}

const jobs: Job[] = [
  {
    company: "Upstatement",
    title: "Lead Engineer",
    date: "May 2018 - Present",
    responsibilities: [
      "Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more",
      "Work alongside creative directors to lead the research, development, and architecture of technical solutions to fulfill business requirements",
      "Collaborate with designers, project managers, and other engineers to transform creative concepts into production realities for clients and stakeholders",
      "Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship",
    ],
  },
  {
    company: "Apple",
    title: "UI Engineer Co-op",
    date: "July - December 2017",
    responsibilities: [
      "Developed and styled interactive web applications for Apple Music using Ember and SCSS",
      "Built and shipped the Apple Music Extension for Facebook Messenger leveraging third-party and internal APIs",
      "Architected and implemented the user interface of Apple Music's embeddable web player widget for in-browser user authorization and full song playback",
      "Contributed extensively to MusicKit.js, a JavaScript framework that allows developers to add an Apple Music player to their web applications",
    ],
  },
]

export function Experience() {
  const [activeJobIndex, setActiveJobIndex] = useState(0)

  return (
    <section id="experience" className="py-20 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-200 mb-4">
        <span className="text-primary font-mono text-xl mr-2">02.</span>
        Where I've Worked
      </h2>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="md:w-1/4">
          {jobs.map((job, index) => (
            <Button
              key={job.company}
              variant={activeJobIndex === index ? "secondary" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveJobIndex(index)}
            >
              {job.company}
            </Button>
          ))}
        </div>
        <div className="md:w-3/4">
          <h3 className="text-xl font-semibold">{jobs[activeJobIndex].title}</h3>
          <p className="text-primary mb-4">{jobs[activeJobIndex].company}</p>
          <p className="text-sm text-gray-400 mb-4">{jobs[activeJobIndex].date}</p>
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

