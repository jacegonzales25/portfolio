import { Folder, ExternalLink } from "lucide-react"
import Link from "next/link"

type Certification = {
  title: string
  issuer: string
  description: string
  date: string
  link: string
}

const certifications: Certification[] = [
  {
    title: "Certified Kubernetes Application Developer",
    issuer: "Cloud Native Computing Foundation (CNCF)",
    description:
      "Demonstrates expertise in designing, building, and deploying cloud-native applications using Kubernetes.",
    date: "June 2023",
    link: "https://www.cncf.io/certification/ckad/",
  },
  {
    title: "AWS Certified Solutions Architect - Associate",
    issuer: "Amazon Web Services (AWS)",
    description: "Proves competency in designing and deploying scalable and reliable applications on AWS.",
    date: "March 2022",
    link: "https://aws.amazon.com/certification/certified-solutions-architect/",
  },
  // Add more certifications here...
]

export function Certifications() {
  return (
    <section className="py-20 max-w-4xl mx-auto">
      <h2 className="text-center text-3xl font-bold text-gray-200 mb-8 animate-fade-up">
        <span className="text-primary font-mono text-xl mr-2">04.</span>
        Professional Certifications
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {certifications.map((cert, index) => (
          <div
            key={cert.title}
            className="bg-secondary/50 rounded-lg p-6 hover:-translate-y-2 transition-transform duration-200 animate-fade-up"
            style={{ animationDelay: `${(index + 1) * 100}ms` }}
          >
            <div className="flex justify-between items-start mb-4">
              <Folder className="h-10 w-10 text-primary" />
              <Link href={cert.link} className="text-muted-foreground hover:text-primary">
                <ExternalLink className="h-5 w-5" />
              </Link>
            </div>
            <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
            <p className="text-primary mb-2">{cert.issuer}</p>
            <p className="text-muted-foreground text-sm mb-4">{cert.description}</p>
            <p className="text-sm text-muted-foreground">{cert.date}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

