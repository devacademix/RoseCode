import { LoaderCircleIcon } from "lucide-react";

export function AuthLoadingView() {
  return (
    <div className="flex w-full max-w-lg items-center justify-center rounded-lg border bg-muted/40 p-8">
      <div className="flex items-center gap-3 text-sm text-muted-foreground">
        <LoaderCircleIcon className="size-5 animate-spin" />
        <span>Checking authentication...</span>
      </div>
    </div>
  );
}
