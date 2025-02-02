import { Github, Instagram, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

export function SocialLinks() {
  return (
    <div className="fixed left-4 bottom-0 hidden md:block">
      <div className="flex flex-col items-center gap-6 animate-fade-up">
        <Link
          href="https://github.com/jacegonzales25"
          className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all"
          style={{ animationDelay: "100ms" }}
        >
          <Github className="h-5 w-5" />
        </Link>
        <Link
          href="https://instagram.com/jacegonzales25"
          className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all"
          style={{ animationDelay: "200ms" }}
        >
          <Instagram className="h-5 w-5" />
        </Link>
        <Link
          href="https://twitter.com"
          className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all"
          style={{ animationDelay: "300ms" }}
        >
          <Twitter className="h-5 w-5" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/jace-gonzales-90384a149/"
          className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all"
          style={{ animationDelay: "400ms" }}
        >
          <Linkedin className="h-5 w-5" />
        </Link>
        <div className="h-24 w-px bg-muted-foreground"></div>
      </div>
    </div>
  )
}

