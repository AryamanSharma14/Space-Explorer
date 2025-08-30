import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-20 glass-card border-t border-primary/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Ground Control Branding */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-cosmic mb-4">Ground Control</h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Full-Stack Space Explorer crafting digital experiences across the cosmic web. 
              Currently orbiting Earth while building the future of technology.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com" 
                className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
              <a 
                href="https://linkedin.com" 
                className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="https://twitter.com" 
                className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform"
                aria-label="Twitter"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a 
                href="mailto:hello@spaceexplorer.dev" 
                className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Mission Control
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-muted-foreground hover:text-primary transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Mission Status */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">Mission Status</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-muted-foreground">Systems Online</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <span className="text-muted-foreground">Orbit Stable</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                <span className="text-muted-foreground">Ready for Contact</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-primary/20 text-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Space Explorer. All rights reserved. 
            <span className="text-primary ml-2">🚀 Powered by cosmic energy</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;