import { Project } from "@/data/profile";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
    project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
    return (
        <Card className="group hover:shadow-lg transition-all duration-300 border-border bg-card">
            <CardHeader>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                    <div className="flex-1">
                        <CardTitle className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                            {project.name}
                            {project.link && (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block ml-2 opacity-0 group-hover:opacity-100 transition-opacity"
                                >
                                    <ExternalLink className="h-4 w-4 inline" />
                                </a>
                            )}
                        </CardTitle>
                        <CardDescription className="text-sm text-muted-foreground mt-1">
                            {project.description}
                        </CardDescription>
                    </div>
                    <span className="text-sm text-muted-foreground shrink-0">
                        {project.period}
                    </span>
                </div>

                <div className="flex flex-wrap gap-2 mt-3">
                    {project.tech.map((tech) => (
                        <Badge
                            key={tech}
                            variant="secondary"
                            className="text-xs bg-secondary/50 hover:bg-secondary"
                        >
                            {tech}
                        </Badge>
                    ))}
                </div>
            </CardHeader>

            <CardContent>
                <ul className="space-y-2">
                    {project.highlights.map((highlight, i) => (
                        <li
                            key={i}
                            className="text-sm text-muted-foreground flex items-start gap-2"
                        >
                            <span className="text-muted-foreground/50 shrink-0">—</span>
                            <span>{highlight}</span>
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    );
};
