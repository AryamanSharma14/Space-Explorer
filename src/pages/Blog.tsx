import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Calendar, Clock, Plus, Edit, Trash2, Save, X } from "lucide-react";
import { getAllBlogPosts, BlogPost } from "@/data/blog";
import { blogService } from "@/lib/blogService";
import { useAuth } from "@/contexts/AuthContext";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const { currentUser } = useAuth();

  // Form state
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    category: "Mission Logs",
    tags: "",
    readTime: "5 min read"
  });

  const categories = ["all", "Mission Logs", "Tech Discoveries", "Career Trajectory"];

  // Load posts on component mount
  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    try {
      const allPosts = await getAllBlogPosts();
      setPosts(allPosts);
    } catch (error) {
      console.error('Error loading posts:', error);
    } finally {
      setLoading(false);
    }
  };

  // Your existing filter logic (unchanged)
  const filteredPosts = posts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  // CRUD Operations
  const handleCreatePost = async () => {
    if (!currentUser) return;
    
    try {
      const postData = {
        title: formData.title,
        slug: formData.title.toLowerCase().replace(/\s+/g, '-'),
        excerpt: formData.excerpt,
        content: formData.content,
        category: formData.category,
        tags: formData.tags.split(',').map(tag => tag.trim()),
        publishedAt: new Date().toISOString().split('T')[0],
        readTime: formData.readTime
      };

      await blogService.createPost(postData);
      await loadPosts(); // Reload posts
      resetForm();
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  const handleEditPost = async () => {
    if (!editingPost || !currentUser) return;

    try {
      const updateData = {
        title: formData.title,
        slug: formData.title.toLowerCase().replace(/\s+/g, '-'),
        excerpt: formData.excerpt,
        content: formData.content,
        category: formData.category,
        tags: formData.tags.split(',').map(tag => tag.trim()),
        readTime: formData.readTime
      };

      await blogService.updatePost(editingPost.id, updateData);
      await loadPosts(); // Reload posts
      resetForm();
    } catch (error) {
      console.error('Error updating post:', error);
    }
  };

  const handleDeletePost = async (postId: string) => {
    if (!currentUser || !confirm('Are you sure you want to delete this mission log?')) return;

    try {
      await blogService.deletePost(postId);
      await loadPosts(); // Reload posts
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  const startEditing = (post: BlogPost) => {
    setEditingPost(post);
    setFormData({
      title: post.title,
      excerpt: post.excerpt,
      content: post.content,
      category: post.category,
      tags: post.tags.join(', '),
      readTime: post.readTime
    });
    setShowCreateForm(true);
  };

  const resetForm = () => {
    setFormData({
      title: "",
      excerpt: "",
      content: "",
      category: "Mission Logs",
      tags: "",
      readTime: "5 min read"
    });
    setShowCreateForm(false);
    setEditingPost(null);
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-20 pb-20 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🚀</div>
          <p className="text-xl">Loading mission logs...</p>
        </div>
      </div>
    );
  }

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

        {/* Admin Controls */}
        {currentUser && (
          <div className="mb-8 p-6 glass-card">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Mission Control Panel</h2>
              <Button
                onClick={() => setShowCreateForm(!showCreateForm)}
                className="btn-cosmic"
              >
                <Plus className="h-4 w-4 mr-2" />
                {showCreateForm ? 'Cancel' : 'New Mission Log'}
              </Button>
            </div>

            {/* Create/Edit Form */}
            {showCreateForm && (
              <div className="space-y-4 border-t pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    placeholder="Mission Title"
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                    className="search-cosmic"
                  />
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({...formData, category: e.target.value})}
                    className="px-3 py-2 bg-background border border-border rounded-md"
                  >
                    <option value="Mission Logs">Mission Logs</option>
                    <option value="Tech Discoveries">Tech Discoveries</option>
                    <option value="Career Trajectory">Career Trajectory</option>
                  </select>
                </div>
                
                <Input
                  placeholder="Brief mission excerpt..."
                  value={formData.excerpt}
                  onChange={(e) => setFormData({...formData, excerpt: e.target.value})}
                  className="search-cosmic"
                />
                
                <textarea
                  placeholder="Full mission report..."
                  value={formData.content}
                  onChange={(e) => setFormData({...formData, content: e.target.value})}
                  className="w-full p-3 bg-background border border-border rounded-md h-40 resize-y"
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    placeholder="Tags (comma separated)"
                    value={formData.tags}
                    onChange={(e) => setFormData({...formData, tags: e.target.value})}
                    className="search-cosmic"
                  />
                  <Input
                    placeholder="Read time (e.g., 5 min read)"
                    value={formData.readTime}
                    onChange={(e) => setFormData({...formData, readTime: e.target.value})}
                    className="search-cosmic"
                  />
                </div>
                
                <div className="flex gap-4">
                  <Button
                    onClick={editingPost ? handleEditPost : handleCreatePost}
                    className="btn-cosmic"
                    disabled={!formData.title || !formData.excerpt || !formData.content}
                  >
                    <Save className="h-4 w-4 mr-2" />
                    {editingPost ? 'Update Mission' : 'Launch Mission'}
                  </Button>
                  <Button
                    onClick={resetForm}
                    variant="outline"
                  >
                    <X className="h-4 w-4 mr-2" />
                    Abort
                  </Button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Search and Filter (unchanged) */}
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

        {/* Blog Posts (enhanced with edit/delete for authenticated users) */}
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
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <Link to={`/blog/${post.slug}`}>
                        <h2 className="text-2xl font-bold text-foreground hover:text-primary transition-colors group-hover:text-primary">
                          {post.title}
                        </h2>
                      </Link>
                      <p className="text-muted-foreground mt-2">{post.excerpt}</p>
                    </div>
                    
                    {/* Edit/Delete Controls for Firebase posts */}
                    {currentUser && post.id && !["1", "2", "3", "4", "5"].includes(post.id) && (
                      <div className="flex gap-2 ml-4">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => startEditing(post)}
                          className="opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleDeletePost(post.id)}
                          className="opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-500/20"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    )}
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

        {/* No Results (unchanged) */}
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
