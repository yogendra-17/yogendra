import { Layout } from "@/components/Layout";
import { projects } from "@/data/profile";
import { ArrowRight } from "lucide-react";

const Projects = () => {
  return (
    <Layout>
      <section className="py-16">
        <h1 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
          Projects
        </h1>
        <p className="text-muted-foreground max-w-2xl">
          A selection of things I've built and contributed to over the years.
        </p>
      </section>

      <section className="pb-16">
        <div className="space-y-12">
          {projects.map((project) => (
            <article
              key={project.name}
              className="group border-t border-border pt-8"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                <div>
                  <h2 className="font-serif text-xl text-foreground group-hover:text-primary transition-colors">
                    {project.name}
                  </h2>
                  <p className="text-muted-foreground">
                    {project.description}
                  </p>
                </div>
                <span className="text-sm text-muted-foreground shrink-0">
                  {project.period}
                </span>
              </div>

              <ul className="space-y-2 mb-4">
                {project.highlights.map((highlight, i) => (
                  <li
                    key={i}
                    className="text-muted-foreground flex items-start gap-2"
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
                    className="text-xs px-2 py-1 bg-muted rounded text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-12 border-t border-border">
        <p className="text-muted-foreground">
          Currently working on more projects.{" "}
          <a
            href="https://github.com/yogendrasankhla"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-primary hover:underline"
          >
            Follow me on GitHub <ArrowRight className="w-3 h-3" />
          </a>
        </p>
      </section>
    </Layout>
  );
};

export default Projects;
