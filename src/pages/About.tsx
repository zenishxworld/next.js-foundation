import { ArrowLeft, CheckCircle, ArrowRight, Sparkles, Target, Rocket, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';
import { StaggerContainer, StaggerItem, TiltCard, HoverGlow } from '@/components/ui/micro-interactions';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pillars = [
    {
      icon: Target,
      title: "Product Strategy",
      description: "From idea validation to feature planning — we help you define a clear roadmap and build the right product from day one."
    },
    {
      icon: Sparkles,
      title: "Web, App & AI Development",
      description: "Modern full-stack engineering with clean code, scalable cloud setups, and smart AI-powered functionality."
    },
    {
      icon: Rocket,
      title: "Launch & Scale",
      description: "Deployment, optimization, analytics, and ongoing support — everything you need to grow confidently."
    }
  ];

  const stats = [
    { value: "50+", label: "Projects Delivered" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "24/7", label: "Support Available" },
    { value: "3x", label: "Faster Development" }
  ];
  
  return (
    <PageLayout>
      <SEO 
        title="About ApexDeploy — Digital Product Agency"
        description="ApexDeploy builds modern websites, mobile apps, and AI-powered digital products. Learn about our mission, pillars, and story."
        imageUrl="/lovable-uploads/ADlogo.png"
        keywords={[
          'about apexdeploy',
          'digital product agency',
          'web development',
          'mobile app development',
          'AI development company',
          'software development team',
        ]}
      />

      <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 min-h-screen">
        <div className="container mx-auto max-w-6xl">

          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link 
              to="/" 
              className="inline-flex items-center text-muted-foreground hover:text-foreground mb-12 transition-colors group"
            >
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
          </motion.div>
          
          {/* Hero Section */}
          <div className="mb-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="space-y-6"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                About Us
              </span>
              
              <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] tracking-tight">
                We Build
                <span className="block text-gradient">Digital Products</span>
                That Matter
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
                ApexDeploy is a digital product agency that helps businesses build modern,
                high-performance websites, mobile apps, and AI-driven solutions.
              </p>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative p-6 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm text-center hover:border-primary/50 transition-colors duration-300">
                  <div className="text-4xl md:text-5xl font-display font-bold text-gradient mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Mission Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-display font-bold">Our Mission</h2>
                </div>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our mission is simple: help businesses launch digital products that
                  stand out. We combine strategic thinking, modern engineering, and
                  clean design to create software that's fast, scalable, and future-proof.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Whether you're building an MVP, upgrading your tech, or launching a new
                  SaaS platform — we help you move from idea to execution with clarity
                  and confidence.
                </p>
              </div>
            </motion.div>
            
            {/* Core Pillars */}
            <motion.div
              initial={{ opacity: 0, x: 30 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <StaggerContainer className="space-y-4">
                {pillars.map((pillar, index) => (
                  <StaggerItem key={pillar.title}>
                    <HoverGlow>
                      <div className="p-6 rounded-2xl bg-card/30 border border-border/50 backdrop-blur-sm hover:bg-card/50 transition-all duration-300 group">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:scale-110 transition-transform duration-300">
                            <pillar.icon className="w-6 h-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-display font-semibold mb-2 group-hover:text-primary transition-colors">
                              {pillar.title}
                            </h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                              {pillar.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </HoverGlow>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </motion.div>
          </div>
          
          {/* Story Section */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-24"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 rounded-3xl blur-3xl" />
              
              <div className="relative p-8 md:p-12 rounded-3xl bg-card/30 border border-border/50 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                    <Sparkles className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-display font-bold">Our Story</h2>
                </div>

                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed max-w-4xl">
                  <p>
                    ApexDeploy was founded with a belief: businesses shouldn't struggle with
                    confusing tech teams, unclear communication, or slow development.
                  </p>

                  <p>
                    We noticed that many companies had great ideas but lacked the right
                    technical execution. So we built ApexDeploy to offer end-to-end digital
                    product development — combining strategy, design, engineering, and
                    deployment under one roof.
                  </p>

                  <p>
                    Today, we've helped multiple clients build real products — from websites
                    and dashboards to apps and AI systems. Our focus is delivering clean,
                    fast, scalable software that creates real business impact.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex flex-col sm:flex-row gap-4">
              <Link 
                to="/careers" 
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all duration-300 hover:scale-105"
              >
                Join Our Team
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link 
                to="/#contact" 
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-card/50 border border-border/50 rounded-full font-medium hover:bg-card hover:border-primary/50 transition-all duration-300"
              >
                Get in Touch
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

        </div>
      </section>
    </PageLayout>
  );
};

export default About;
