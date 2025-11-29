import { Layout } from "@/components/Layout";
import { Section } from "@/components/Section";
import { experience, education } from "@/data/profile";

const Experience = () => {
  return (
    <Layout>
      <div className="mb-8">
        <h1 className="font-mono text-2xl text-foreground mb-2">
          ~/experience
        </h1>
        <p className="text-sm text-muted-foreground font-mono">
          my professional journey
        </p>
      </div>

      <Section title="work">
        <div className="space-y-8">
          {experience.map((job, index) => (
            <article key={job.company} className="relative">
              {/* Timeline line */}
              {index < experience.length - 1 && (
                <div className="absolute left-[5px] top-8 bottom-0 w-px bg-border -mb-8" />
              )}
              
              <div className="flex items-start gap-4">
                {/* Timeline dot */}
                <div className="w-3 h-3 rounded-full bg-primary shrink-0 mt-1.5" />
                
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                    <div>
                      <h3 className="font-mono text-foreground font-medium">
                        {job.role}
                      </h3>
                      <p className="font-mono text-sm text-primary">
                        {job.company}
                      </p>
                    </div>
                    <div className="font-mono text-xs text-muted-foreground">
                      <span>{job.period}</span>
                      <span className="hidden sm:inline"> • </span>
                      <span className="block sm:inline">{job.location}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-1">
                    {job.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className="font-mono text-sm text-muted-foreground flex items-start gap-2"
                      >
                        <span className="text-muted-foreground/50 shrink-0">-</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section title="education">
        <div className="flex items-start gap-4">
          <div className="w-3 h-3 rounded-full bg-muted shrink-0 mt-1.5" />
          <div>
            <h3 className="font-mono text-foreground font-medium">
              {education.degree}
            </h3>
            <p className="font-mono text-sm text-primary">
              {education.institution}
            </p>
            <p className="font-mono text-xs text-muted-foreground mt-1">
              Class of {education.year}
            </p>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Experience;
