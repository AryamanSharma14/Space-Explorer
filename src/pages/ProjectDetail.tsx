import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink, Github, Star, GitFork } from "lucide-react";
import { projectsData } from "@/data/projects";

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projectsData.find(p => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🛸</div>
          <h1 className="text-2xl font-bold mb-2">Project Not Found</h1>
          <p className="text-muted-foreground mb-6">This project might have been lost in space.</p>
          <Link to="/projects">
            <Button className="btn-cosmic">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Return to Projects
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 pb-20">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Link to="/projects" className="inline-flex items-center mb-8 text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Projects
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Project Image */}
          <div className="space-y-6">
            <div className="aspect-video glass-card p-4">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            
            {/* Additional Screenshots */}
            <div className="grid grid-cols-2 gap-4">
              {project.screenshots?.map((screenshot, index) => (
                <div key={index} className="aspect-video glass-card p-2">
                  <img 
                    src={screenshot} 
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="w-full h-full object-cover rounded"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Project Details */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-cosmic">
                {project.title}
              </h1>
              <p className="text-xl text-muted-foreground">
                {project.description}
              </p>
            </div>

            {/* Tech Stack */}
            <div>
              <h3 className="text-lg font-semibold mb-3 text-foreground">Mission Equipment</h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-sm">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Project Stats */}
            {(project.stars || project.forks) && (
              <div className="flex gap-6">
                {project.stars && (
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Star className="h-4 w-4" />
                    <span>{project.stars} stars</span>
                  </div>
                )}
                {project.forks && (
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <GitFork className="h-4 w-4" />
                    <span>{project.forks} forks</span>
                  </div>
                )}
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-4">
              {project.liveUrl && (
                <Button asChild className="btn-rocket flex-1">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Launch Demo
                  </a>
                </Button>
              )}
              {project.githubUrl && (
                <Button asChild variant="outline" className="flex-1 border-primary/30 hover:border-primary hover:bg-primary/10">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </a>
                </Button>
              )}
            </div>

            {/* Long Description */}
            {project.longDescription && (
              <div className="glass-card p-6">
                <h3 className="text-lg font-semibold mb-4 text-foreground">Mission Brief</h3>
                <div className="prose prose-invert max-w-none">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.longDescription}
                  </p>
                </div>
              </div>
            )}

            {/* Features */}
            {project.features && (
              <div className="glass-card p-6">
                <h3 className="text-lg font-semibold mb-4 text-foreground">Key Features</h3>
                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3 text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;