import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Contact() {
  return (
    <section id="contact" className="py-20 max-w-2xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-gray-200 mb-4">
        <span className="text-primary font-mono text-xl mr-2">04.</span>
        What`&apos`s Next?
      </h2>
      <h3 className="text-4xl font-bold mb-4">Get In Touch</h3>
      <p className="text-muted-foreground mb-8">
        Although I`&apos`m not currently looking for new opportunities, my inbox is always open. Whether you have a question
        or just want to say hi, I`&apos`ll try my best to get back to you!
      </p>
      <Button asChild className="mb-32">
        <a href="mailto:your.email@example.com">Say Hello</a>
      </Button>

      <footer className="text-center text-muted-foreground text-sm">
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
  )
}

