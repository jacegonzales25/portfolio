export function EmailLink() {
    return (
      <div className="fixed right-4 bottom-0 hidden md:block">
        <div className="flex flex-col items-center gap-6">
          <a
            href="mailto:your.email@example.com"
            className="vertical-text text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all"
          >
            your.email@example.com
          </a>
          <div className="h-24 w-px bg-muted-foreground"></div>
        </div>
      </div>
    )
  }
  
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const styles = `
    .vertical-text {
      writing-mode: vertical-rl;
      text-orientation: mixed;
    }
  `
  
  