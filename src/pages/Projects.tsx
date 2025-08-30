import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, ExternalLink, Github } from "lucide-react";
import { projectsData } from "@/data/projects";

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = ["all", "Web Apps", "AI Projects", "CLI Tools"];

  const filteredProjects = projectsData.filter((project) => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.techStack.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === "all" || project.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen pt-20 pb-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-cosmic terminal-text">
            Project Galaxy
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore the cosmos of digital creations. Each project represents a unique mission 
            into the vast expanse of technology and innovation.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search the galaxy..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-cosmic pl-10"
            />
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`transition-all ${
                  selectedCategory === category 
                    ? "btn-cosmic" 
                    : "border-primary/30 hover:border-primary hover:bg-primary/10"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="glass-card p-6 hover-glow animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg mb-4 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Project Info */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm">{project.description}</p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Link to={`/projects/${project.slug}`} className="flex-1">
                    <Button className="w-full btn-rocket">
                      Launch Project
                    </Button>
                  </Link>
                  {project.githubUrl && (
                    <Button
                      variant="outline"
                      size="icon"
                      asChild
                      className="border-primary/30 hover:border-primary hover:bg-primary/10"
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button
                      variant="outline"
                      size="icon"
                      asChild
                      className="border-primary/30 hover:border-primary hover:bg-primary/10"
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🌌</div>
            <h3 className="text-xl font-semibold text-foreground mb-2">No projects found in this sector</h3>
            <p className="text-muted-foreground">Try adjusting your search parameters or exploring different categories.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;