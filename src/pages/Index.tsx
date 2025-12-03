import { Layout } from "@/components/Layout";
import { profile } from "@/data/profile";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Layout>
      <section className="flex flex-col items-center justify-center min-h-[70vh] py-16">
        <div className="max-w-3xl mx-auto text-center">
          {/* Photo */}
          <div className="mb-8">
            <img
              src={profile.photo}
              alt={profile.name}
              className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-border shadow-lg"
            />
          </div>

          {/* Name */}
          <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
            {profile.name}
          </h1>

          {/* Bio */}
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
            Hi! I'm Yogendra, a software engineer at <span className="text-foreground font-medium">Silence Labs</span> where
            I work at the intersection of cryptography, distributed systems, and cutting-edge security. I build
            privacy-preserving infrastructure, from multi-party computation protocols to figuring out communication between agents in secure way.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
            I graduated from <span className="text-foreground font-medium">BITS Pilani</span> in 2023 with a degree in
            Electronics and Instrumentation. Before Silence Labs, I worked at <span className="text-foreground font-medium">Zluri</span> (enterprise
            SaaS automation), contributed to open-source through <span className="text-foreground font-medium">Summer of Bitcoin</span>,
            and was part of the <span className="text-foreground font-medium">ETH India Fellowship</span> (top 0.5% of applicants).
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-12">
            My work spans from building beautiful UI to working on complex backends,building everything from distributed systems to various protocol used
            in production. When I'm not coding, you'll find me playing badminton, exploring personal finance, or working
            on side projects.
          </p>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a
              href={`mailto:${profile.email}`}
              className="text-primary hover:underline"
            >
              Email
            </a>
            <span className="text-muted-foreground">/</span>
            <Link
              to="/experience"
              className="text-primary hover:underline"
            >
              Work Experience
            </Link>
            <span className="text-muted-foreground">/</span>
            <Link
              to="/projects"
              className="text-primary hover:underline"
            >
              Projects
            </Link>
            <span className="text-muted-foreground">/</span>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              GitHub
            </a>
            <span className="text-muted-foreground">/</span>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
