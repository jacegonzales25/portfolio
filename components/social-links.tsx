import { Github, Instagram, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

export function SocialLinks() {
  return (
    <div className="fixed left-4 bottom-0 hidden md:block">
      <div className="flex flex-col items-center gap-6">
        <Link
          href="https://github.com"
          className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all"
        >
          <Github className="h-5 w-5" />
        </Link>
        <Link
          href="https://instagram.com"
          className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all"
        >
          <Instagram className="h-5 w-5" />
        </Link>
        <Link
          href="https://twitter.com"
          className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all"
        >
          <Twitter className="h-5 w-5" />
        </Link>
        <Link
          href="https://linkedin.com"
          className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all"
        >
          <Linkedin className="h-5 w-5" />
        </Link>
        <div className="h-24 w-px bg-muted-foreground"></div>
      </div>
    </div>
  )
}

