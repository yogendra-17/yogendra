import { Layout } from "@/components/Layout";
import { profile, skills, experience } from "@/data/profile";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight max-w-3xl">
          I am a blockchain developer and security engineer building secure infrastructure for decentralized systems.
        </h1>
        
        <p className="mt-8 text-muted-foreground leading-relaxed max-w-2xl">
          {profile.bio}
        </p>

        <Link 
          to="/experience" 
          className="inline-flex items-center gap-2 mt-8 text-primary hover:underline"
        >
          View my experience <ArrowRight className="w-4 h-4" />
        </Link>
      </section>

      {/* Current Role */}
      <section className="py-12 border-t border-border">
        <h2 className="font-serif text-2xl text-foreground mb-6">Currently</h2>
        <div>
          <h3 className="text-lg font-medium text-foreground">
            {experience[0].role}
          </h3>
          <p className="text-muted-foreground">
            {experience[0].company} · {experience[0].location}
          </p>
          <p className="text-sm text-muted-foreground mt-1">
            {experience[0].period}
          </p>
        </div>
      </section>

      {/* Skills */}
      <section className="py-12 border-t border-border">
        <h2 className="font-serif text-2xl text-foreground mb-6">Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-sm font-medium text-foreground mb-3">Languages</h3>
            <p className="text-muted-foreground">
              {skills.languages.join(", ")}
            </p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-foreground mb-3">Blockchain</h3>
            <p className="text-muted-foreground">
              {skills.blockchain.join(", ")}
            </p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-foreground mb-3">Frameworks</h3>
            <p className="text-muted-foreground">
              {skills.frameworks.join(", ")}
            </p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-foreground mb-3">Tools</h3>
            <p className="text-muted-foreground">
              {skills.tools.join(", ")}
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-12 border-t border-border">
        <h2 className="font-serif text-2xl text-foreground mb-6">Get in touch</h2>
        <div className="space-y-2">
          <p className="text-muted-foreground">
            <a href={`mailto:${profile.email}`} className="text-primary hover:underline">
              {profile.email}
            </a>
          </p>
          <p className="text-muted-foreground">
            {profile.location}
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
