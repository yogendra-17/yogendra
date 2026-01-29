import { Layout } from "@/components/Layout";
import { ArrowUpRight } from "lucide-react";

const Articles = () => {
  return (
    <Layout>
      <section className="flex flex-col items-center justify-center min-h-[60vh] py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
            Articles & Writings
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            My articles and writing have moved to a dedicated journal site.
          </p>
          <a
            href="https://yogendra-17.github.io/journal-y/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-lg text-primary hover:underline"
          >
            Visit Journal
            <ArrowUpRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Articles;
