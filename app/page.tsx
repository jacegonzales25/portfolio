import { Nav } from "@/components/nav";
import { SocialLinks } from "@/components/social-links";
import { EmailLink } from "@/components/email-link";
import { About } from "@/components/about";
import { Experiences } from "@/components/experiences";
import { Certifications } from "@/components/certifications";
import { Contact } from "@/components/contact";
import { Projects } from "@/components/projects";

export default function Home() {
  return (
      <main className="min-h-screen bg-accent">
        <Nav />
        <SocialLinks />
        <EmailLink />
        <div className="max-w-7xl mx-auto px-4 pt-24">
          <section className="min-h-screen flex items-center">
            <div className="space-y-4">
              <p
                className="text-primary font-mono animate-fade-down"
                style={{ animationDelay: "100ms" }}
              >
                Hi, my name is
              </p>
              <h1
                className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-gray-900 animate-fade-down"
                style={{ animationDelay: "200ms" }}
              >
                Jace L. Gonzales
              </h1>
              <h2
                className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-gray-600 animate-fade-down"
                style={{ animationDelay: "300ms" }}
              >
                I build and automate cloud infrastructure.
              </h2>
              <p
                className="max-w-xl text-gray-600 animate-fade-down"
                style={{ animationDelay: "400ms" }}
              >
                I&apos;m a Cloud Engineer / DevOps specialist focused on
                building scalable, secure, and automated cloud infrastructure.
                Currently, I&apos;m focused on implementing Infrastructure as
                Code and CI/CD pipelines.
              </p>
            </div>
          </section>
          <About />
          <Experiences />
          <Projects />
          <Certifications />
          <Contact />
        </div>
      </main>
  );
}
