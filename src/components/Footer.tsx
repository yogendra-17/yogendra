import { profile } from "@/data/profile";

export const Footer = () => {
  return (
    <footer className="border-t border-border py-8">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {profile.name}
          </p>
          <div className="flex items-center gap-6">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              GitHub
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
