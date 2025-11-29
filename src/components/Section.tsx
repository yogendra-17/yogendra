import { cn } from "@/lib/utils";

interface SectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const Section = ({ title, children, className }: SectionProps) => {
  return (
    <section className={cn("mb-12", className)}>
      <h2 className="font-mono text-lg text-primary mb-4 flex items-center gap-2">
        <span className="text-muted-foreground">#</span>
        {title}
      </h2>
      {children}
    </section>
  );
};
