export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  longDescription?: string;
  image: string;
  screenshots?: string[];
  techStack: string[];
  category: string;
  githubUrl?: string;
  liveUrl?: string;
  stars?: number;
  forks?: number;
  features?: string[];
}

export const projectsData: Project[] = [
  {
    id: "1",
    title: "PlantiFi Mission",
    slug: "plantifi-mission",
    description: "AI-powered plant care system with IoT sensors and machine learning algorithms for optimal plant health monitoring.",
    longDescription: "The PlantiFi Mission represents a breakthrough in agricultural technology, combining IoT sensors, machine learning, and real-time monitoring to create the ultimate plant care system. This project demonstrates advanced full-stack development with hardware integration, creating a seamless experience between physical sensors and digital interfaces.",
    image: "",
    techStack: ["React", "Node.js", "Python", "TensorFlow", "Arduino", "MongoDB", "Socket.io"],
    category: "AI Projects",
    githubUrl: "https://github.com/username/plantifi",
    liveUrl: "https://plantifi-demo.vercel.app",
    stars: 142,
    forks: 28,
    features: [
      "Real-time soil moisture and light monitoring",
      "AI-powered plant disease detection",
      "Automated watering system integration",
      "Mobile app for remote monitoring",
      "Historical data analytics and insights",
      "Multi-plant management dashboard"
    ]
  },
  {
    id: "2", 
    title: "Student Orbit Platform",
    slug: "student-orbit",
    description: "Comprehensive student management platform with grade tracking, scheduling, and communication features for modern education.",
    longDescription: "Student Orbit Platform revolutionizes educational management by providing a unified ecosystem for students, teachers, and administrators. Built with scalability in mind, this platform handles thousands of users while maintaining lightning-fast performance and intuitive user experience.",
    image: "",
    techStack: ["Vue.js", "Django", "PostgreSQL", "Redis", "Docker", "AWS"],
    category: "Web Apps",
    githubUrl: "https://github.com/username/student-orbit",
    liveUrl: "https://student-orbit.edu",
    stars: 89,
    forks: 15,
    features: [
      "Interactive grade book and analytics",
      "Smart scheduling with conflict detection",
      "Real-time messaging and notifications",
      "Assignment submission and feedback system",
      "Parent/guardian portal access",
      "Advanced reporting and analytics"
    ]
  },
  {
    id: "3",
    title: "Cosmic CLI Navigator",
    slug: "cosmic-cli",
    description: "Advanced command-line interface tool for developers with AI-assisted code generation and project scaffolding.",
    longDescription: "The Cosmic CLI Navigator transforms the developer experience by providing intelligent command-line assistance. Using natural language processing and code analysis, it helps developers navigate complex projects, generate boilerplate code, and automate repetitive tasks with space-age efficiency.",
    image: "",
    techStack: ["Rust", "OpenAI API", "Git", "YAML", "Shell Scripting"],
    category: "CLI Tools",
    githubUrl: "https://github.com/username/cosmic-cli",
    stars: 234,
    forks: 42,
    features: [
      "Natural language to code translation",
      "Intelligent project scaffolding",
      "Git workflow automation",
      "Context-aware suggestions",
      "Multi-language support",
      "Plugin ecosystem"
    ]
  },
  {
    id: "4",
    title: "Nebula Design System",
    slug: "nebula-design",
    description: "Comprehensive design system and component library built for modern space-age applications with cosmic aesthetics.",
    longDescription: "Nebula Design System provides a complete toolkit for building beautiful, consistent user interfaces across the galaxy. This design system combines cutting-edge CSS techniques with practical React components, offering developers the tools to create stunning cosmic-themed applications.",
    image: "",
    techStack: ["React", "TypeScript", "Storybook", "Tailwind CSS", "Framer Motion"],
    category: "Web Apps",
    githubUrl: "https://github.com/username/nebula-design",
    liveUrl: "https://nebula-design.space",
    stars: 312,
    forks: 67,
    features: [
      "50+ customizable components",
      "Dark and light theme variants", 
      "Accessibility-first design",
      "Interactive documentation",
      "Figma design tokens integration",
      "Zero-config setup"
    ]
  },
  {
    id: "5",
    title: "Quantum Task Manager",
    slug: "quantum-tasks",
    description: "Next-generation task management application with AI prioritization and time-space optimization algorithms.",
    longDescription: "Quantum Task Manager leverages advanced algorithms to optimize productivity across multiple dimensions. By analyzing patterns in task completion, urgency, and personal energy levels, it creates the perfect schedule that maximizes efficiency while maintaining work-life balance.",
    image: "",
    techStack: ["Svelte", "FastAPI", "SQLite", "TensorFlow.js", "PWA"],
    category: "AI Projects",
    githubUrl: "https://github.com/username/quantum-tasks",
    liveUrl: "https://quantum-tasks.app",
    stars: 156,
    forks: 31,
    features: [
      "AI-powered task prioritization",
      "Smart scheduling optimization", 
      "Habit tracking and insights",
      "Offline-first PWA architecture",
      "Cross-device synchronization",
      "Productivity analytics dashboard"
    ]
  },
  {
    id: "6",
    title: "Stellar API Gateway",
    slug: "stellar-api",
    description: "High-performance API gateway with cosmic-scale load balancing and intelligent routing for microservices architecture.",
    longDescription: "Stellar API Gateway handles intergalactic levels of traffic while maintaining sub-light-speed response times. Built for modern microservices architectures, it provides advanced features like circuit breaking, rate limiting, and intelligent request routing across multiple service instances.",
    image: "",
    techStack: ["Go", "Kubernetes", "Prometheus", "Grafana", "Redis", "gRPC"],
    category: "CLI Tools",
    githubUrl: "https://github.com/username/stellar-api",
    stars: 445,
    forks: 89,
    features: [
      "Sub-millisecond response times",
      "Automatic load balancing",
      "Real-time monitoring and alerts",
      "Circuit breaker patterns",
      "JWT authentication and authorization",
      "Kubernetes-native deployment"
    ]
  }
];