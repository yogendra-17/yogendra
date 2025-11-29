import { Layout } from "@/components/Layout";
import { Section } from "@/components/Section";
import { articles } from "@/data/profile";

const Articles = () => {
  return (
    <Layout>
      <div className="mb-8">
        <h1 className="font-mono text-2xl text-foreground mb-2">
          ~/articles
        </h1>
        <p className="text-sm text-muted-foreground font-mono">
          interesting reads and learning resources
        </p>
      </div>

      <Section title="reading list">
        <div className="space-y-4">
          {articles.map((article) => (
            <a
              key={article.title}
              href={article.link}
              className="group block border border-border rounded-lg p-4 hover:border-primary/30 hover:bg-muted/20 transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                <div>
                  <h3 className="font-mono text-sm text-foreground group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="font-mono text-xs text-muted-foreground mt-1">
                    {article.source}
                  </p>
                </div>
                <span className="font-mono text-xs text-muted-foreground shrink-0">
                  {article.date}
                </span>
              </div>
              <div className="flex gap-2 mt-3">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs px-2 py-0.5 bg-muted rounded text-muted-foreground"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </Section>

      <Section title="add your own">
        <div className="border border-dashed border-border rounded-lg p-6 text-center">
          <p className="font-mono text-sm text-muted-foreground mb-2">
            This section can be expanded to include:
          </p>
          <ul className="font-mono text-xs text-muted-foreground/70 space-y-1">
            <li>→ Book reviews</li>
            <li>→ Technical blog posts</li>
            <li>→ Research papers</li>
            <li>→ Conference talks</li>
          </ul>
        </div>
      </Section>
    </Layout>
  );
};

export default Articles;
