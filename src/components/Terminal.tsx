import { cn } from "@/lib/utils";

interface TerminalProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
}

export const Terminal = ({ children, className, title = "terminal" }: TerminalProps) => {
  return (
    <div className={cn("rounded-lg border border-border overflow-hidden", className)}>
      <div className="flex items-center gap-2 px-4 py-2 bg-muted/50 border-b border-border">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-destructive/70" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
          <div className="w-3 h-3 rounded-full bg-green-500/70" />
        </div>
        <span className="text-xs text-muted-foreground font-mono ml-2">{title}</span>
      </div>
      <div className="p-4 bg-card font-mono text-sm">
        {children}
      </div>
    </div>
  );
};

interface CommandProps {
  prompt?: string;
  command: string;
}

export const Command = ({ prompt = "$", command }: CommandProps) => {
  return (
    <div className="flex items-center gap-2 text-muted-foreground">
      <span className="text-primary">{prompt}</span>
      <span className="text-foreground">{command}</span>
      <span className="animate-pulse">_</span>
    </div>
  );
};

interface OutputProps {
  children: React.ReactNode;
  className?: string;
}

export const Output = ({ children, className }: OutputProps) => {
  return (
    <div className={cn("mt-2 text-muted-foreground leading-relaxed", className)}>
      {children}
    </div>
  );
};
