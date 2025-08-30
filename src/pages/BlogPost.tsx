import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock, Share } from "lucide-react";
import { blogData } from "@/data/blog";

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogData.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">📡</div>
          <h1 className="text-2xl font-bold mb-2">Transmission Lost</h1>
          <p className="text-muted-foreground mb-6">This mission log seems to have drifted into deep space.</p>
          <Link to="/blog">
            <Button className="btn-cosmic">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Return to Mission Logs
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      // Fallback: copy URL to clipboard
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Back Button */}
        <Link to="/blog" className="inline-flex items-center mb-8 text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Mission Logs
        </Link>

        {/* Article Header */}
        <article className="space-y-8">
          <header className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cosmic">
              {post.title}
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {post.excerpt}
            </p>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </div>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={handleShare}
                className="hover:bg-primary/10"
              >
                <Share className="h-4 w-4 mr-1" />
                Share
              </Button>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap justify-center gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </header>

          {/* Featured Image */}
          {post.image && (
            <div className="aspect-video glass-card p-4">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          )}

          {/* Article Content */}
          <div className="glass-card p-8 lg:p-12">
            <div className="prose prose-lg prose-invert max-w-none">
              <div className="text-muted-foreground leading-relaxed space-y-6">
                {post.content.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>

          {/* Article Footer */}
          <footer className="glass-card p-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-center md:text-left">
                <h3 className="text-lg font-semibold text-foreground mb-2">Mission Complete</h3>
                <p className="text-muted-foreground">
                  Thank you for reading this transmission from deep space.
                </p>
              </div>
              <div className="flex gap-3">
                <Button 
                  variant="outline" 
                  onClick={handleShare}
                  className="border-primary/30 hover:border-primary hover:bg-primary/10"
                >
                  <Share className="h-4 w-4 mr-2" />
                  Share Log
                </Button>
                <Link to="/blog">
                  <Button className="btn-cosmic">
                    More Missions
                  </Button>
                </Link>
              </div>
            </div>
          </footer>
        </article>
      </div>
    </div>
  );
};

export default BlogPost;