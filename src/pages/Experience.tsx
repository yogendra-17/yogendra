import { Layout } from "@/components/Layout";
import { experience, education, projects, extracurricular, skills, npmPackages } from "@/data/profile";
import { TrackSection } from "@/components/TrackSection";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Package } from "lucide-react";

const Experience = () => {
  const tracks = ["distributed-systems", "security-crypto", "fullstack", "systems-programming", "ai-agents"] as const;

  return (
    <Layout>
      <section className="py-16">
        <h1 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
          Experience & Projects
        </h1>
        <p className="text-muted-foreground max-w-2xl">
          My journey across distributed systems, cryptography, full-stack development, and AI — building secure,
          scalable software that spans multiple domains.
        </p>
      </section>

      {/* Work Experience */}
      <section className="pb-16">
        <h2 className="font-serif text-2xl text-foreground mb-8">Work Experience</h2>
        <div className="space-y-12">
          {experience.map((job, index) => (
            <article key={`${job.company}-${index}`} className="border-t border-border pt-8">
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

              {/* Show certificates if available */}
              {job.certificates && job.certificates.length > 0 && (
                <div className="mt-4">
                  {job.certificates.map((cert, i) => (
                    <a
                      key={i}
                      href={cert}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                    >
                      <ExternalLink className="w-3 h-3" />
                      View certificate
                    </a>
                  ))}
                </div>
              )}

              {/* Show skills if available */}
              {job.skills && job.skills.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {job.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="text-xs border-primary/30"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              )}

              {/* Show production links if available */}
              {job.productionLinks && job.productionLinks.length > 0 && (
                <div className="mt-4 space-y-2">
                  <h4 className="text-sm font-medium text-foreground">Production Applications:</h4>
                  <div className="grid gap-2">
                    {job.productionLinks.map((link, i) => (
                      <a
                        key={i}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-start gap-3 p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-accent/50 transition-all"
                      >
                        <Package className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="font-medium text-sm text-foreground group-hover:text-primary transition-colors">
                              {link.name}
                            </span>
                            <ExternalLink className="w-3 h-3 text-muted-foreground group-hover:text-primary shrink-0" />
                          </div>
                          <p className="text-xs text-muted-foreground mt-0.5">
                            {link.description}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* Projects by Track */}
      <section className="py-12 border-t border-border">
        <h2 className="font-serif text-2xl text-foreground mb-8">Projects by Domain</h2>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="w-full justify-start flex-wrap h-auto gap-2 bg-transparent mb-8">
            <TabsTrigger value="all" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              All Projects
            </TabsTrigger>
            <TabsTrigger value="distributed-systems" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Distributed Systems
            </TabsTrigger>
            <TabsTrigger value="security-crypto" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Security & Crypto
            </TabsTrigger>
            <TabsTrigger value="ai-agents" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              AI & Agents
            </TabsTrigger>
            <TabsTrigger value="fullstack" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Full-stack
            </TabsTrigger>
            <TabsTrigger value="systems-programming" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Systems Programming
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-0">
            {tracks.map((track) => (
              <TrackSection key={track} track={track} projects={projects} />
            ))}
          </TabsContent>

          {tracks.map((track) => (
            <TabsContent key={track} value={track} className="mt-0">
              <TrackSection track={track} projects={projects} />
            </TabsContent>
          ))}
        </Tabs>
      </section>

      {/* NPM Packages */}
      <section className="py-12 border-t border-border">
        <h2 className="font-serif text-2xl text-foreground mb-8">Published Packages</h2>
        <div className="grid gap-4">
          {npmPackages.map((pkg) => (
            <a
              key={pkg.name}
              href={pkg.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 p-4 rounded-lg border border-border hover:border-primary/50 hover:bg-accent/50 transition-all"
            >
              <Package className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
                  {pkg.name}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {pkg.description}
                </p>
              </div>
              <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary shrink-0 mt-1" />
            </a>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="py-12 border-t border-border">
        <h2 className="font-serif text-2xl text-foreground mb-8">Technical Skills</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-medium text-foreground mb-3">Languages</h3>
            <div className="flex flex-wrap gap-2">
              {skills.languages.map((lang) => (
                <Badge key={lang} variant="default" className="bg-primary/10 text-primary hover:bg-primary/20">
                  {lang}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-foreground mb-3">Frameworks & Tools</h3>
            <div className="flex flex-wrap gap-2">
              {skills.frameworks.map((framework) => (
                <Badge key={framework} variant="default" className="bg-primary/10 text-primary hover:bg-primary/20">
                  {framework}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-foreground mb-3">Security & Cryptography</h3>
            <div className="flex flex-wrap gap-2">
              {skills.security.map((tech) => (
                <Badge key={tech} variant="default" className="bg-primary/10 text-primary hover:bg-primary/20">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-foreground mb-3">Systems & Architecture</h3>
            <div className="flex flex-wrap gap-2">
              {skills.systems.map((skill) => (
                <Badge key={skill} variant="default" className="bg-primary/10 text-primary hover:bg-primary/20">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-foreground mb-3">Databases & DevOps</h3>
            <div className="flex flex-wrap gap-2">
              {skills.tools.map((tool) => (
                <Badge key={tool} variant="default" className="bg-primary/10 text-primary hover:bg-primary/20">
                  {tool}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
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

      {/* Extracurricular */}
      <section className="py-12 border-t border-border">
        <h2 className="font-serif text-2xl text-foreground mb-8">Beyond Code</h2>
        <div className="flex flex-wrap gap-3">
          {extracurricular.map((activity) => (
            <Badge key={activity} variant="outline" className="text-sm px-4 py-2 border-primary/30 text-foreground">
              {activity}
            </Badge>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Experience;
