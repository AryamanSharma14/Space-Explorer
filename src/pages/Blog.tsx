import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Calendar, Clock } from "lucide-react";
import { blogData } from "@/data/blog";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = ["all", "Mission Logs", "Tech Discoveries", "Career Trajectory"];

  const filteredPosts = blogData.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen pt-20 pb-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-cosmic terminal-text">
            Mission Logs
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Chronicles from deep space exploration. Discoveries, insights, and adventures 
            from the frontier of technology and beyond.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search mission logs..."
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

        {/* Blog Posts */}
        <div className="space-y-8">
          {filteredPosts.map((post, index) => (
            <article
              key={post.id}
              className="glass-card p-8 hover-glow animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {/* Post Image */}
                <div className="lg:col-span-1">
                  <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg overflow-hidden">
                    {post.image ? (
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-4xl">
                        📝
                      </div>
                    )}
                  </div>
                </div>

                {/* Post Content */}
                <div className="lg:col-span-3 space-y-4">
                  <div>
                    <Link to={`/blog/${post.slug}`}>
                      <h2 className="text-2xl font-bold text-foreground hover:text-primary transition-colors group-hover:text-primary">
                        {post.title}
                      </h2>
                    </Link>
                    <p className="text-muted-foreground mt-2">{post.excerpt}</p>
                  </div>

                  {/* Meta Information */}
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(post.publishedAt).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Read More */}
                  <Link to={`/blog/${post.slug}`}>
                    <Button variant="outline" className="border-primary/30 hover:border-primary hover:bg-primary/10">
                      Read Mission Log
                    </Button>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">📡</div>
            <h3 className="text-xl font-semibold text-foreground mb-2">No transmissions found</h3>
            <p className="text-muted-foreground">Try adjusting your search parameters or exploring different categories.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;