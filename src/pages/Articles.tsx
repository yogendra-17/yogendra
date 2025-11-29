import { Layout } from "@/components/Layout";
import { articles } from "@/data/profile";
import { ArrowUpRight } from "lucide-react";

const Articles = () => {
  return (
    <Layout>
      <section className="py-16">
        <h1 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
          Reading List
        </h1>
        <p className="text-muted-foreground max-w-2xl">
          Interesting articles and resources I've been reading lately.
        </p>
      </section>

      <section className="pb-16">
        <div className="space-y-8">
          {articles.map((article, index) => (
            <article
              key={index}
              className="group border-t border-border pt-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <a
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-serif text-lg text-foreground group-hover:text-primary transition-colors"
                  >
                    {article.title}
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">
                    {article.source}
                  </p>
                </div>
                <span className="text-sm text-muted-foreground shrink-0">
                  {new Date(article.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  })}
                </span>
              </div>
              <div className="flex gap-2 mt-3">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 bg-muted rounded text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-12 border-t border-border">
        <p className="text-muted-foreground">
          This list updates as I discover new content. Check back for more.
        </p>
      </section>
    </Layout>
  );
};

export default Articles;
