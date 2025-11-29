import { Layout } from "@/components/Layout";
import { Section } from "@/components/Section";
import { projects } from "@/data/profile";

const Projects = () => {
  return (
    <Layout>
      <div className="mb-8">
        <h1 className="font-mono text-2xl text-foreground mb-2">
          ~/projects
        </h1>
        <p className="text-sm text-muted-foreground font-mono">
          things i've built and contributed to
        </p>
      </div>

      <div className="space-y-6">
        {projects.map((project) => (
          <article
            key={project.name}
            className="group border border-border rounded-lg p-5 hover:border-primary/30 transition-colors"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
              <div>
                <h2 className="font-mono text-lg text-foreground group-hover:text-primary transition-colors">
                  {project.name}
                </h2>
                <p className="text-sm text-muted-foreground">
                  {project.description}
                </p>
              </div>
              <span className="font-mono text-xs text-muted-foreground shrink-0">
                {project.period}
              </span>
            </div>

            <ul className="space-y-1 mb-4">
              {project.highlights.map((highlight, i) => (
                <li
                  key={i}
                  className="font-mono text-sm text-muted-foreground flex items-start gap-2"
                >
                  <span className="text-primary shrink-0">→</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs px-2 py-1 bg-muted rounded text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <Section title="more coming soon" className="mt-12">
        <p className="font-mono text-sm text-muted-foreground">
          Currently working on more projects. Check back later or{" "}
          <a
            href="https://github.com/yogendrasankhla"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            follow me on GitHub
          </a>{" "}
          for updates.
        </p>
      </Section>
    </Layout>
  );
};

export default Projects;
