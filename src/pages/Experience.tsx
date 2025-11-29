import { Layout } from "@/components/Layout";
import { experience, education } from "@/data/profile";

const Experience = () => {
  return (
    <Layout>
      <section className="py-16">
        <h1 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
          Experience
        </h1>
        <p className="text-muted-foreground max-w-2xl">
          My professional journey in blockchain development and security engineering.
        </p>
      </section>

      <section className="pb-16">
        <h2 className="font-serif text-2xl text-foreground mb-8">Work</h2>
        <div className="space-y-12">
          {experience.map((job) => (
            <article key={job.company} className="border-t border-border pt-8">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-lg font-medium text-foreground">
                    {job.role}
                  </h3>
                  <p className="text-primary">
                    {job.company}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {job.location}
                  </p>
                </div>
                <span className="text-sm text-muted-foreground shrink-0">
                  {job.period}
                </span>
              </div>
              
              <ul className="space-y-2">
                {job.highlights.map((highlight, i) => (
                  <li
                    key={i}
                    className="text-muted-foreground flex items-start gap-2"
                  >
                    <span className="text-muted-foreground/50 shrink-0">—</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="py-12 border-t border-border">
        <h2 className="font-serif text-2xl text-foreground mb-8">Education</h2>
        <div>
          <h3 className="text-lg font-medium text-foreground">
            {education.degree}
          </h3>
          <p className="text-primary">
            {education.institution}
          </p>
          <p className="text-sm text-muted-foreground mt-1">
            Class of {education.year}
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Experience;
