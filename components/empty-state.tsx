import { FolderOpen } from "lucide-react"

interface EmptyStateProps {
  message: string
}

export function EmptyState({ message }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[200px] bg-secondary/20 rounded-lg p-6">
      <FolderOpen className="h-16 w-16 text-muted-foreground mb-4" />
      <p className="text-lg text-muted-foreground text-center">{message}</p>
    </div>
  )
}

    