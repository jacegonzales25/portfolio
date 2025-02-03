import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Contact() {
  return (
    <section id="contact" className="py-20 max-w-2xl mx-auto text-center">
      <div className="animate-fade-up" style={{ animationDelay: "100ms" }}>
        <h2 className="text-3xl font-bold text-gray-600 mb-4">
          <span className="text-primary font-mono text-xl mr-2">05.</span>
          What&apos;s Next?
        </h2>
        <h3 className="text-4xl font-bold mb-4 text-gray-900">
          Let&apos;s Build the Future Together
        </h3>{" "}
        <p className="text-muted-foreground mb-8">
          I&apos;m a{" "}
          <span className="text-primary font-semibold">Cloud Engineer</span> and{" "}
          <span className="text-primary font-semibold">DevOps Specialist</span>{" "}
          passionate about building scalable, secure, and automated cloud
          infrastructure. Whether you&apos;re looking to optimize your cloud
          architecture, implement Infrastructure as Code, or streamline CI/CD
          pipelines, I&apos;d love to collaborate.
        </p>
        <Button asChild className="mb-32">
          <a href="mailto:jacegonzales25@gmail.com">Get in Touch</a>
        </Button>
      </div>

      <footer
        className="text-center text-muted-foreground text-sm animate-fade-up"
        style={{ animationDelay: "200ms" }}
      >
        <p className="mb-2">
          Built with Next.js and Tailwind CSS, inspired by{" "}
          <Link
            href="https://brittanychiang.com"
            className="text-primary hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Brittany Chiang
          </Link>
        </p>
      </footer>
    </section>
  );
}
