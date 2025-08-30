import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Search, ArrowRight, Rocket, Code, Brain, Terminal, ExternalLink, Github } from "lucide-react";
import { projectsData } from "@/data/projects";
import { blogData } from "@/data/blog";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleProjects, setVisibleProjects] = useState(3);
  
  // Featured projects and blog posts
  const featuredProjects = projectsData.slice(0, visibleProjects);
  const recentBlogPosts = blogData.slice(0, 2);

  // Filter projects based on search
  const filteredProjects = projectsData.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.techStack.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const displayProjects = searchTerm ? filteredProjects : featuredProjects;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Removed hero background image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Floating Astronaut Animation */}
            <div className="flex justify-center mb-8">
              <div className="w-32 h-32">
                <div className="w-full h-full bg-cosmic-gradient rounded-full flex items-center justify-center text-6xl animate-orbit">
                  🚀
                </div>
              </div>
            </div>

            {/* Hero Text */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
              <span className="text-cosmic block mb-2">Full-Stack</span>
              <span className="text-foreground terminal-text">Space Explorer</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Navigating the cosmos of code, crafting digital experiences that push the boundaries 
              of what's possible in the infinite expanse of technology.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/projects">
                <Button className="btn-rocket text-lg px-8 py-6">
                  Explore Projects
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="text-lg px-8 py-6 border-primary/30 hover:border-primary hover:bg-primary/10">
                  Initiate Contact
                </Button>
              </Link>
            </div>

            {/* Tech Stack Badges */}
            <div className="flex flex-wrap gap-3 justify-center mt-12">
              {["React", "TypeScript", "Node.js", "Python", "AI/ML", "AWS"].map((tech, index) => (
                <Badge 
                  key={tech} 
                  variant="secondary" 
                  className="px-4 py-2 text-sm hover:bg-primary/20 transition-colors animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <ArrowRight className="h-6 w-6 text-primary rotate-90" />
        </div>
      </section>

      {/* Search Section */}
      <section className="py-20 bg-gradient-to-b from-transparent to-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-cosmic">
              Search the Galaxy
            </h2>
            <p className="text-muted-foreground mb-8">
              Discover projects, technologies, and insights from across the digital universe
            </p>
            
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search projects, technologies, or ideas..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-cosmic pl-12 text-lg py-6"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-cosmic">
              Mission Portfolio
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore a collection of digital expeditions across the technology frontier
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayProjects.map((project, index) => (
              <Card 
                key={project.id} 
                className="glass-card hover-glow group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 space-y-4">
                  {/* Project Icon */}
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                    {project.category === "AI Projects" && <Brain className="h-6 w-6 text-primary" />}
                    {project.category === "Web Apps" && <Code className="h-6 w-6 text-primary" />}
                    {project.category === "CLI Tools" && <Terminal className="h-6 w-6 text-primary" />}
                  </div>

                  {/* Project Info */}
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.techStack.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{project.techStack.length - 3}
                      </Badge>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-2">
                    <Link to={`/projects/${project.slug}`} className="flex-1">
                      <Button size="sm" className="w-full btn-cosmic">
                        Launch
                      </Button>
                    </Link>
                    {project.githubUrl && (
                      <Button
                        size="sm"
                        variant="outline"
                        asChild
                        className="border-primary/30 hover:border-primary hover:bg-primary/10"
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Show More Projects */}
          {!searchTerm && visibleProjects < projectsData.length && (
            <div className="text-center mt-12">
              <Button 
                variant="outline" 
                onClick={() => setVisibleProjects(prev => prev + 3)}
                className="border-primary/30 hover:border-primary hover:bg-primary/10"
              >
                Load More Projects
              </Button>
            </div>
          )}

          {/* View All Projects */}
          <div className="text-center mt-8">
            <Link to="/projects">
              <Button className="btn-rocket">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Blog Posts Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-cosmic">
              Mission Logs
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Recent transmissions from the frontier of technology and innovation
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {recentBlogPosts.map((post, index) => (
              <Card 
                key={post.id} 
                className="glass-card hover-glow animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="space-y-4">
                    <Badge variant="secondary" className="w-fit">
                      {post.category}
                    </Badge>
                    
                    <h3 className="text-2xl font-bold text-foreground hover:text-primary transition-colors">
                      <Link to={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>
                    
                    <p className="text-muted-foreground">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                      <span>{post.readTime}</span>
                    </div>

                    <Link to={`/blog/${post.slug}`}>
                      <Button variant="outline" className="w-full border-primary/30 hover:border-primary hover:bg-primary/10">
                        Read Mission Log
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/blog">
              <Button className="btn-rocket">
                View All Logs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center glass-card p-12">
            <div className="space-y-6">
              <div className="text-6xl mb-4">🚀</div>
              <h2 className="text-4xl md:text-5xl font-bold text-cosmic">
                Ready for Liftoff?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Let's collaborate on the next big mission. Whether you have an idea that needs 
                bringing to life or want to explore the possibilities together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button className="btn-rocket text-lg px-8 py-6">
                    Initiate Contact
                  </Button>
                </Link>
                <Button 
                  variant="outline"
                  asChild
                  className="text-lg px-8 py-6 border-primary/30 hover:border-primary hover:bg-primary/10"
                >
                  <a href="mailto:hello@spaceexplorer.dev">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Direct Message
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;