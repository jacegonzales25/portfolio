import { Loader2, AlertCircle } from "lucide-react"

interface LoadingErrorStateProps {
  isLoading: boolean
  error: Error | null
  loadingMessage?: string
  errorMessage?: string
}

export function LoadingErrorState({
  isLoading,
  error,
  loadingMessage = "Loading...",
  errorMessage = "An error occurred. Please try again later.",
}: LoadingErrorStateProps) {
  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[200px] animate-pulse">
        <Loader2 className="h-10 w-10 text-primary animate-spin mb-4" />
        <p className="text-lg text-muted-foreground">{loadingMessage}</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[200px] bg-destructive/10 rounded-lg p-6">
        <AlertCircle className="h-10 w-10 text-destructive mb-4" />
        <p className="text-lg text-destructive font-semibold mb-2">Oops! Something went wrong.</p>
        <p className="text-muted-foreground text-center">{errorMessage}</p>
      </div>
    )
  }

  return null
}

