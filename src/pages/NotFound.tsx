import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center pt-20">
      <div className="text-center max-w-2xl mx-auto px-4">
        <div className="space-y-6">
          {/* Space-themed 404 */}
          <div className="text-8xl mb-8 animate-float">🛸</div>
          
          <h1 className="text-6xl font-bold mb-4 text-cosmic">404</h1>
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Lost in Space
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-md mx-auto">
            Oops! You've drifted into uncharted territory. This page seems to have 
            vanished into the cosmic void.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button className="btn-rocket">
                Return to Mission Control
              </Button>
            </Link>
            <Link to="/projects">
              <Button variant="outline" className="border-primary/30 hover:border-primary hover:bg-primary/10">
                Explore Projects
              </Button>
            </Link>
          </div>
          
          {/* Mission Status */}
          <div className="mt-12 glass-card p-6 max-w-md mx-auto">
            <h3 className="text-lg font-semibold mb-4 text-foreground">Navigation Status</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Current Location:</span>
                <span className="text-red-400">Unknown Sector</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Ground Control:</span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400">Online</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Rescue Mission:</span>
                <span className="text-blue-400">In Progress</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
