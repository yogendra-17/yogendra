import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/projects", label: "Projects" },
  { path: "/experience", label: "Experience" },
  { path: "https://yogendra-17.github.io/journal-y/", label: "Articles", external: true },
];

export const Navigation = () => {
  const location = useLocation();

  return (
    <header className="border-b border-border">
      <nav className="container max-w-4xl mx-auto px-4 py-6 flex items-center justify-between">
        <Link to="/" className="font-serif text-xl font-medium text-foreground hover:text-primary transition-colors">
          Yogendra <span className="text-primary">_</span> Sankhla
        </Link>
        
        <div className="flex items-center gap-8">
          {navItems.slice(1).map((item) => (
            item.external ? (
              <a
                key={item.path}
                href={item.path}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "text-sm transition-colors",
                  location.pathname === item.path
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.label}
              </Link>
            )
          ))}
        </div>
      </nav>
    </header>
  );
};
