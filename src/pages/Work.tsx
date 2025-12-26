import { useState, useRef, useEffect } from "react";
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';
import { TiltCard, StaggerContainer, StaggerItem } from '@/components/ui/micro-interactions';

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

const Work = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageLayout>
      <SEO 
        title="Our Work — ApexDeploy Case Studies"
        description="Explore our portfolio of digital products, websites, mobile apps, and AI solutions built for real businesses."
        imageUrl="/lovable-uploads/ADlogo.png"
        keywords={['portfolio', 'case studies', 'web development projects', 'app development']}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="container mx-auto max-w-6xl">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link 
              to="/" 
              className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 transition-colors group"
            >
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
          </motion.div>
          
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <motion.span 
              className="pill mb-6 inline-block"
              whileHover={{ scale: 1.05 }}
            >
              Case Studies
            </motion.span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground mb-6">
              Our<br />
              <span className="italic">Work</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore how we've turned ambitious visions into market-ready solutions generating real revenue.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <StaggerItem key={project.id}>
                <TiltCard className="h-full">
                  <Link 
                    to={project.link}
                    onClick={() => window.scrollTo(0, 0)}
                    className="block h-full"
                  >
                    <motion.div 
                      className="rounded-2xl bg-card border border-border/50 overflow-hidden h-full glow-on-hover group"
                      whileHover={{ y: -8 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Image */}
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <img 
                          src={project.imageUrl}
                          alt={project.brand}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map((tag, idx) => (
                            <span 
                              key={idx}
                              className="px-3 py-1 text-xs bg-secondary text-muted-foreground rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <h3 className="text-xl font-display font-bold text-foreground mb-2 group-hover:text-muted-foreground transition-colors">
                          {project.brand}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4">{project.title}</p>
                        <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                        
                        <span className="inline-flex items-center gap-2 text-foreground text-sm font-medium group-hover:gap-3 transition-all">
                          View Case Study
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </motion.div>
                  </Link>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </PageLayout>
  );
};

export default Work;
