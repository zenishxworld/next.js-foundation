import { useState, useRef, useEffect, TouchEvent } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useIsMobile } from "@/hooks/use-mobile";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Web3 Tool",
    brand: "AuditX Security System",
    description: "AI-based security tool offering Smart Contract Auditing, Token Scanning, and Wallet Inspection for comprehensive Web3 security.",
    tags: ["Web3 Security", "Smart Contracts", "AI"],
    imageUrl: "/lovable-uploads/ax.png",
    link: "/projects/auditx",
  },
  {
    id: 2,
    title: "Construction Portal",
    brand: "Smart Construction",
    description: "Website modernization for a construction firm, featuring responsive design, dynamic project gallery, and CMS-ready backend.",
    tags: ["Website", "Real Estate", "CMS"],
    imageUrl: "/lovable-uploads/smart-construction-cover.jpg",
    link: "/projects/elite-construction"
  },
  {
    id: 3,
    title: "Multimedia Portfolio",
    brand: "Creative Agency",
    description: "Showcasing music production, photography, filmography, and coaching. Interactive and visually appealing design.",
    tags: ["Portfolio", "Creative", "Music"],
    imageUrl: "/lovable-uploads/sspp.png",
    link: "/projects/creative-portfolio"
  },
  {
    id: 4,
    title: "Trading Automation",
    brand: "MT5 Bot",
    description: "Custom Expert Advisor for MT5. Autonomously executes trades based on multi-timeframe analysis.",
    tags: ["Automation", "Trading", "Forex"],
    imageUrl: "/lovable-uploads/c30e0487-2fa0-41d1-9a0b-699cb2855388.png",
    link: "/projects/trading-bot"
  },
  {
    id: 5,
    title: "Inventory System",
    brand: "Bhavya Enterprises",
    description: "Smart automation replacing manual processes with a digital system for real-time stock and billing.",
    tags: ["ERP", "Automation", "Billing"],
    imageUrl: "/lovable-uploads/d5ce901e-2ce0-4f2a-bce1-f0ca5d6192df.png",
    link: "/projects/inventory-billing"
  }
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);
  const projectsRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const isMobile = useIsMobile();

  const minSwipeDistance = 50;

  useEffect(() => {
    if (isInView && !isHovering) {
      const interval = setInterval(() => {
        setActiveProject(prev => (prev + 1) % projects.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isInView, isHovering]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const onTouchStart = (e: TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) {
      setActiveProject(prev => (prev + 1) % projects.length);
    } else if (distance < -minSwipeDistance) {
      setActiveProject(prev => (prev - 1 + projects.length) % projects.length);
    }
  };

  return (
    <section id="projects" ref={projectsRef} className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="pill mb-6">Recent Case Studies</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Products in Market
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See how we've turned ambitious visions into market-ready solutions generating real revenue.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div 
          className="relative"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* Main Featured Project */}
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8"
            key={activeProject}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Image */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-card">
              <img 
                src={projects[activeProject].imageUrl}
                alt={projects[activeProject].brand}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center">
              <div className="flex flex-wrap gap-2 mb-4">
                {projects[activeProject].tags.map((tag, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1 text-xs bg-secondary text-muted-foreground rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-2">
                {projects[activeProject].brand}
              </h3>
              <p className="text-sm text-muted-foreground mb-2">{projects[activeProject].title}</p>
              <p className="text-muted-foreground mb-8">{projects[activeProject].description}</p>
              
              <Link 
                to={projects[activeProject].link}
                className="group inline-flex items-center gap-2 text-foreground font-medium hover-underline w-fit"
                onClick={() => window.scrollTo(0, 0)}
              >
                View Case Study
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6">
            <button 
              onClick={() => setActiveProject(prev => (prev - 1 + projects.length) % projects.length)}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center
                         text-muted-foreground hover:text-foreground hover:border-muted-foreground 
                         transition-all duration-300"
              aria-label="Previous project"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {projects.map((_, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveProject(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeProject === idx 
                      ? 'bg-foreground w-8' 
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                  aria-label={`Go to project ${idx + 1}`}
                />
              ))}
            </div>

            <button 
              onClick={() => setActiveProject(prev => (prev + 1) % projects.length)}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center
                         text-muted-foreground hover:text-foreground hover:border-muted-foreground 
                         transition-all duration-300"
              aria-label="Next project"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
