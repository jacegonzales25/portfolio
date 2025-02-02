import Image from "next/image"

export function About() {
  const technologies = [
    "JavaScript (ES6+)",
    "TypeScript",
    "React",
    "Node.js",
    "Express",
    "Next.js",
    "Tailwind CSS",
    "Python",
  ]

  return (
    <section id="about" className="py-20 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-200 mb-4">
        <span className="text-primary font-mono text-xl mr-2">01.</span>
        About Me
      </h2>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-2/3">
          <p className="mb-4">
            Hello! My name is [Your Name], and I enjoy creating things that live on the internet. My interest in web
            development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking
            together a custom reblog button taught me a lot about HTML & CSS!
          </p>
          <p className="mb-4">
            Fast-forward to today, and I&aposve had the privilege of working at an advertising agency, a start-up, a huge
            corporation, and a student-led design studio. My main focus these days is building accessible, inclusive
            products and digital experiences at [Your Current Company/Project] for a variety of clients.
          </p>
          <p className="mb-4">Here are a few technologies I&aposve been working with recently:</p>
          <ul className="grid grid-cols-2 gap-2 text-sm">
            {technologies.map((tech, index) => (
              <li key={index} className="flex items-center">
                <span className="text-primary mr-2">▹</span> {tech}
              </li>
            ))}
          </ul>
        </div>
        <div className="md:w-1/3 flex justify-center">
          <div className="relative w-60 h-60">
            <Image src="/placeholder.svg" alt="Profile picture" fill className="rounded object-cover" />
            <div className="absolute inset-0 border-2 border-primary rounded translate-x-5 translate-y-5 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

