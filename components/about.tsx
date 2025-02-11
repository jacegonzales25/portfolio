import Image from "next/image";
import { TechCarousel } from "./tech-carousel";

export function About() {
  return (
    <section id="about" className="py-20 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-gray-600">
        <span className="text-primary font-mono text-xl mr-2">01.</span>
        About Me
      </h2>
      <div className="flex flex-col md:flex-row gap-12">
        <div className="md:w-2/3 space-y-4">
          <p className="text-gray-600">
            Hello! I&apos;m a Cloud Engineer and DevOps specialist passionate about
            building and automating scalable infrastructure. My journey in tech
            started with web development and evolved into cloud architecture and
            automation.
          </p>
          <p className="text-gray-600">
            Today, I specialize in designing and implementing cloud solutions,
            with a focus on AWS services, containerization, and Infrastructure
            as Code. I&apos;m particularly interested in creating efficient CI/CD
            pipelines and automated deployment processes.
          </p>
          <div className="mt-12">
            <h3 className="text-xl font-bold mb-6 text-gray-600">Technical Skills</h3>
            <TechCarousel />
          </div>
        </div>
        <div className="md:w-1/3">
          <div className="relative group">
            <div className="relative z-10 bg-secondary rounded">
              <Image
                src="s3://resume-portfolio-assets/uploads/profile.jpeg"
                alt="Profile"
                width={300}
                height={300}
                className="rounded grayscale hover:grayscale-0 transition-all"
              />
            </div>
            <div className="absolute inset-0 border-2 border-primary rounded translate-x-5 translate-y-5 -z-10 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
