import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { Mail, MapPin, Radio, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Transmission Received! 📡",
        description: "Your message has been sent across the cosmos. I'll respond from the space station soon!",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen pt-20 pb-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-cosmic terminal-text">
            Ground Control
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to initiate contact? Send a transmission through the cosmic network. 
            Whether you have a mission proposal, collaboration idea, or just want to chat 
            about the universe of possibilities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <Radio className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">Send Transmission</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="bg-card/50 border-primary/30 focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="bg-card/50 border-primary/30 focus:border-primary"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject" className="text-foreground">Mission Type</Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this mission about?"
                  required
                  className="bg-card/50 border-primary/30 focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-foreground">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your idea, project, or just say hello..."
                  rows={6}
                  required
                  className="bg-card/50 border-primary/30 focus:border-primary resize-none"
                />
              </div>

              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full btn-rocket"
              >
                {isSubmitting ? (
                  <>Transmitting...</>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Launch Message
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Info & Status */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Contact Coordinates</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Direct Communication</div>
                    <div className="text-muted-foreground">hello@spaceexplorer.dev</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Current Location</div>
                    <div className="text-muted-foreground">Orbiting Earth 🌍</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mission Status */}
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Mission Status</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-card/30 rounded-lg">
                  <span className="text-foreground">Response Time</span>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-muted-foreground">24-48 hours</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-card/30 rounded-lg">
                  <span className="text-foreground">Availability</span>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                    <span className="text-muted-foreground">Open for Projects</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-card/30 rounded-lg">
                  <span className="text-foreground">Time Zone</span>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                    <span className="text-muted-foreground">Universal Cosmic Time</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Connect */}
            <div className="glass-card p-8 text-center">
              <h3 className="text-xl font-bold mb-4 text-foreground">Prefer a different channel?</h3>
              <p className="text-muted-foreground mb-6">
                Connect with me through other space frequencies for faster communication.
              </p>
              <div className="flex justify-center gap-4">
                <Button 
                  variant="outline"
                  asChild
                  className="border-primary/30 hover:border-primary hover:bg-primary/10"
                >
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                </Button>
                <Button 
                  variant="outline"
                  asChild
                  className="border-primary/30 hover:border-primary hover:bg-primary/10"
                >
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    Twitter
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;