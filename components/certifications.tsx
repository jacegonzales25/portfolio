import { Folder, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Certification } from "@/types/types";
import { useQuery } from "@tanstack/react-query";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000"; // Use environment variable

// type Certification = {
//   title: string
//   issuer: string
//   description: string
//   date: string
//   link: string
// }

// const certifications: Certification[] = [
//   {
//     title: "AWS Certified Solutions Architect - Associate",
//     issuer: "Amazon Web Services",
//     description:
//       "Demonstrates the ability to design distributed systems on AWS, with a focus on high availability, fault tolerance, and cost optimization.",
//     date: "Issued in 2021",
//     link: "https://www.youracclaim.com/badges/5e1f7a9c-6f5e-4d1e-8f1a-7a0b5c9a8a1c/linked_in_profile",
//   },
//   {
//     title: "AWS Certified Developer - Associate",
//     issuer: "Amazon Web Services",
//     description:
//       "Validates proficiency in developing, deploying, and debugging cloud-based applications using AWS services.",
//     date: "Issued in 2021",
//     link: "https://www.youracclaim.com/badges/5e1f7a9c-6f5e-4d1e-8f1a-7a0b5c9a8a1c/linked_in_profile",
//   },
//   {
//     title: "AWS Certified SysOps Administrator - Associate",
//     issuer: "Amazon Web Services",
//     description:
//       "Confirms technical expertise in deploying, managing, and operating scalable, highly available, and fault-tolerant systems on AWS.",
//     date: "Issued in 2021",
//     link: "https://www.youracclaim.com/badges/5e1f7a9c-6f5e-4d1e-8f1a-7a0b5c9a8a1c/linked_in_profile",
//   }
//   // Add more certifications here...
// ]

export function Certifications() {
  const {
    isPending,
    error,
    data: certifications,
  } = useQuery<Certification[]>({
    queryKey: ["certifications"],
    queryFn: async () => {
      const res = await fetch(`${API_URL}/certifications`);
      return res.json();
    },
  });

  if (isPending) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <section id="certifications" className="py-20 max-w-4xl mx-auto">
      <h2 className="text-center text-3xl font-bold text-gray-600 mb-8 animate-fade-up">
        <span className="text-primary font-mono text-xl mr-2">04.</span>
        Professional Certifications
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {certifications.length === 0 ? (
          <div className="col-span-full flex flex-col items-center justify-center">
            <h2 className="text-center text-3xl font-bold text-gray-900 mb-8 animate-fade-up">
              Coming Soon...
            </h2>
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
                <Link
                  href={cert.url}
                  className="text-muted-foreground hover:text-primary"
                >
                  <ExternalLink className="h-5 w-5" />
                </Link>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-400">
                {cert.title}
              </h3>
              <p className="text-primary mb-2">{cert.issuer}</p>
              <p className="text-muted-foreground text-sm mb-4">
                {cert.description}
              </p>
              <p className="text-sm text-muted-foreground">
                {cert.issueDate.toDateString()}
              </p>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
