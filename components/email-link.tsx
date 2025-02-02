export function EmailLink() {
  return (
    <div className="fixed right-4 bottom-0 hidden md:block">
      <div className="flex flex-col items-center gap-6 animate-fade-up" style={{ animationDelay: "500ms" }}>
        <a
          href="mailto:jacegonzales25@gmail.com"
          className="[writing-mode:vertical-rl] [text-orientation:mixed] rotate-270 text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all"
        >
          jacegonzales25@gmail.com
        </a>
        <div className="h-24 w-px bg-muted-foreground"></div>
      </div>
    </div>
  );
}