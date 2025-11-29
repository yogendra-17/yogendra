import { Layout } from "@/components/Layout";
import { Terminal, Command, Output } from "@/components/Terminal";
import { Section } from "@/components/Section";
import { profile, skills, education } from "@/data/profile";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="mb-12">
        <Terminal title="whoami">
          <Command command="cat about.txt" />
          <Output>
            <div className="space-y-4">
              <div>
                <h1 className="text-2xl font-bold text-foreground mb-1">
                  {profile.name}
                </h1>
                <p className="text-primary">{profile.title}</p>
                <p className="text-xs opacity-60">{profile.location}</p>
              </div>
              <p className="whitespace-pre-line leading-relaxed max-w-xl">
                {profile.bio}
              </p>
            </div>
          </Output>
        </Terminal>
      </div>

      {/* Quick Links */}
      <Section title="navigate">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <Link
            to="/projects"
            className="group p-4 border border-border rounded-lg hover:border-primary/50 hover:bg-muted/30 transition-all"
          >
            <div className="font-mono text-sm">
              <span className="text-muted-foreground group-hover:text-primary transition-colors">
                →
              </span>{" "}
              <span className="text-foreground">projects/</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              things i've built
            </p>
          </Link>
          <Link
            to="/experience"
            className="group p-4 border border-border rounded-lg hover:border-primary/50 hover:bg-muted/30 transition-all"
          >
            <div className="font-mono text-sm">
              <span className="text-muted-foreground group-hover:text-primary transition-colors">
                →
              </span>{" "}
              <span className="text-foreground">experience/</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              where i've worked
            </p>
          </Link>
          <Link
            to="/articles"
            className="group p-4 border border-border rounded-lg hover:border-primary/50 hover:bg-muted/30 transition-all"
          >
            <div className="font-mono text-sm">
              <span className="text-muted-foreground group-hover:text-primary transition-colors">
                →
              </span>{" "}
              <span className="text-foreground">articles/</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              reading list
            </p>
          </Link>
        </div>
      </Section>

      {/* Skills */}
      <Section title="skills">
        <div className="font-mono text-sm space-y-3">
          <div className="flex flex-wrap gap-x-1">
            <span className="text-muted-foreground">languages:</span>
            {skills.languages.map((skill, i) => (
              <span key={skill}>
                <span className="text-foreground">{skill}</span>
                {i < skills.languages.length - 1 && (
                  <span className="text-muted-foreground">,</span>
                )}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-x-1">
            <span className="text-muted-foreground">blockchain:</span>
            {skills.blockchain.map((skill, i) => (
              <span key={skill}>
                <span className="text-primary">{skill}</span>
                {i < skills.blockchain.length - 1 && (
                  <span className="text-muted-foreground">,</span>
                )}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-x-1">
            <span className="text-muted-foreground">frameworks:</span>
            {skills.frameworks.map((skill, i) => (
              <span key={skill}>
                <span className="text-foreground">{skill}</span>
                {i < skills.frameworks.length - 1 && (
                  <span className="text-muted-foreground">,</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </Section>

      {/* Education */}
      <Section title="education">
        <div className="font-mono text-sm">
          <p className="text-foreground">{education.degree}</p>
          <p className="text-muted-foreground text-xs mt-1">
            {education.institution} • {education.year}
          </p>
        </div>
      </Section>

      {/* Contact */}
      <Section title="contact">
        <Terminal title="contact.sh">
          <div className="space-y-1 text-sm">
            <div>
              <span className="text-muted-foreground">email:</span>{" "}
              <a
                href={`mailto:${profile.email}`}
                className="text-primary hover:underline"
              >
                {profile.email}
              </a>
            </div>
            <div>
              <span className="text-muted-foreground">linkedin:</span>{" "}
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                /yogendrasankhla
              </a>
            </div>
            <div>
              <span className="text-muted-foreground">location:</span>{" "}
              <span className="text-foreground">{profile.location}</span>
            </div>
          </div>
        </Terminal>
      </Section>
    </Layout>
  );
};

export default Index;
