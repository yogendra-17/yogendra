import { Project, ProjectTrack, trackInfo } from "@/data/profile";
import { ProjectCard } from "./ProjectCard";

interface TrackSectionProps {
    track: ProjectTrack;
    projects: Project[];
}

export const TrackSection = ({ track, projects }: TrackSectionProps) => {
    const info = trackInfo[track];
    const trackProjects = projects.filter((p) => p.track.includes(track));

    if (trackProjects.length === 0) return null;

    return (
        <section className="mb-16">
            <div className="mb-8">
                <div className="flex items-center gap-3 mb-2">
                    <div className={`h-1 w-12 bg-gradient-to-r ${info.color} rounded-full`} />
                    <h2 className="font-serif text-2xl text-foreground">{info.name}</h2>
                </div>
                <p className="text-muted-foreground text-sm ml-15">
                    {info.description}
                </p>
            </div>

            <div className="grid gap-6">
                {trackProjects.map((project) => (
                    <ProjectCard key={project.name} project={project} />
                ))}
            </div>
        </section>
    );
};
