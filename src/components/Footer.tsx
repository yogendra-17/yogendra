import { profile } from "@/data/profile";

export const Footer = () => {
  return (
    <footer className="border-t border-border py-8 mt-16">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="font-mono text-xs text-muted-foreground space-y-2">
          <div className="flex flex-wrap gap-4">
            <a 
              href={`mailto:${profile.email}`} 
              className="hover:text-primary transition-colors"
            >
              [email]
            </a>
            <a 
              href={profile.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              [linkedin]
            </a>
            <a 
              href={profile.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              [github]
            </a>
          </div>
          <p className="opacity-60">
            © {new Date().getFullYear()} {profile.name} • Built with caffeine and curiosity
          </p>
        </div>
      </div>
    </footer>
  );
};
