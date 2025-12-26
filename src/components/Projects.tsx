import { useState, useRef, useEffect, TouchEvent } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useIsMobile } from "@/hooks/use-mobile";
import { motion, AnimatePresence } from "framer-motion";

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
  const [imageLoaded, setImageLoaded] = useState(false);
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

  useEffect(() => {
    setImageLoaded(false);
  }, [activeProject]);

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
          <motion.span 
            className="pill mb-6 inline-block"
            whileHover={{ scale: 1.05 }}
          >
            Recent Case Studies
          </motion.span>
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
          <AnimatePresence mode="wait">
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8"
              key={activeProject}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {/* Image with hover effect */}
              <motion.div 
                className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-card group cursor-pointer glow-on-hover"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.img 
                  src={projects[activeProject].imageUrl}
                  alt={projects[activeProject].brand}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: imageLoaded ? 1 : 0 }}
                  onLoad={() => setImageLoaded(true)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent 
                              opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                
                {/* Shimmer loading effect */}
                {!imageLoaded && (
                  <div className="absolute inset-0 shimmer-effect bg-muted" />
                )}
              </motion.div>

              {/* Content */}
              <div className="flex flex-col justify-center">
                <motion.div 
                  className="flex flex-wrap gap-2 mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {projects[activeProject].tags.map((tag, idx) => (
                    <motion.span 
                      key={idx}
                      className="px-3 py-1 text-xs bg-secondary text-muted-foreground rounded-full
                                hover:bg-muted hover:text-foreground transition-colors cursor-default"
                      whileHover={{ scale: 1.1 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </motion.div>
                
                <motion.h3 
                  className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {projects[activeProject].brand}
                </motion.h3>
                <motion.p 
                  className="text-sm text-muted-foreground mb-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.35 }}
                >
                  {projects[activeProject].title}
                </motion.p>
                <motion.p 
                  className="text-muted-foreground mb-8"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {projects[activeProject].description}
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Link 
                    to={projects[activeProject].link}
                    className="group inline-flex items-center gap-2 text-foreground font-medium relative w-fit"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    <span className="relative">
                      View Case Study
                      <motion.span 
                        className="absolute left-0 bottom-0 h-0.5 bg-foreground"
                        initial={{ width: 0 }}
                        whileHover={{ width: '100%' }}
                        transition={{ duration: 0.3 }}
                      />
                    </span>
                    <motion.span
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.span>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6">
            <motion.button 
              onClick={() => setActiveProject(prev => (prev - 1 + projects.length) % projects.length)}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center
                         text-muted-foreground transition-all duration-300"
              whileHover={{ scale: 1.1, borderColor: 'hsl(0 0% 50%)', color: 'hsl(0 0% 98%)' }}
              whileTap={{ scale: 0.95 }}
              aria-label="Previous project"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>

            <div className="flex gap-2">
              {projects.map((_, idx) => (
                <motion.button 
                  key={idx}
                  onClick={() => setActiveProject(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeProject === idx 
                      ? 'bg-foreground w-8' 
                      : 'bg-muted-foreground/30 w-2 hover:bg-muted-foreground/50'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={`Go to project ${idx + 1}`}
                />
              ))}
            </div>

            <motion.button 
              onClick={() => setActiveProject(prev => (prev + 1) % projects.length)}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center
                         text-muted-foreground transition-all duration-300"
              whileHover={{ scale: 1.1, borderColor: 'hsl(0 0% 50%)', color: 'hsl(0 0% 98%)' }}
              whileTap={{ scale: 0.95 }}
              aria-label="Next project"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
