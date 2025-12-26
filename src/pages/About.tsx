import { ArrowLeft, CheckCircle, ArrowRight, Users, Target, Zap, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';
import { TiltCard, StaggerContainer, StaggerItem, MagneticButton } from '@/components/ui/micro-interactions';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pillars = [
    { icon: <Target className="w-5 h-5" />, title: "Product Strategy", desc: "From idea validation to feature planning — we help you define a clear roadmap and build the right product from day one." },
    { icon: <Zap className="w-5 h-5" />, title: "Web, App & AI Development", desc: "Modern full-stack engineering with clean code, scalable cloud setups, and smart AI-powered functionality." },
    { icon: <Rocket className="w-5 h-5" />, title: "Launch & Scale", desc: "Deployment, optimization, analytics, and ongoing support — everything you need to grow confidently." },
  ];

  const stats = [
    { value: "2+", label: "Years of Experience" },
    { value: "15+", label: "Projects Delivered" },
    { value: "100%", label: "Client Satisfaction" },
  ];
  
  return (
    <PageLayout>
      <SEO 
        title="About ApexDeploy — Digital Product Agency"
        description="ApexDeploy builds modern websites, mobile apps, and AI-powered digital products. Learn about our mission, pillars, and story."
        imageUrl="/lovable-uploads/ADlogo.png"
        keywords={['about apexdeploy', 'digital product agency', 'web development', 'mobile app development']}
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
              About Us
            </motion.span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground mb-6">
              We Build Digital<br />
              <span className="text-muted-foreground">Products That</span><br />
              <span className="italic">Matter</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              ApexDeploy is a digital product agency that helps businesses build modern, 
              high-performance websites, mobile apps, and AI-driven solutions.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                className="p-8 rounded-2xl bg-card border border-border/50 text-center glow-on-hover"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-4xl font-display font-bold text-foreground mb-2">{stat.value}</div>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="pill mb-6 inline-block">Our Mission</span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-6">
                Helping businesses launch digital products that <span className="italic">stand out</span>
              </h2>
              <p className="text-muted-foreground mb-4">
                We combine strategic thinking, modern engineering, and clean design to create 
                software that's fast, scalable, and future-proof.
              </p>
              <p className="text-muted-foreground">
                Whether you're building an MVP, upgrading your tech, or launching a new SaaS 
                platform — we help you move from idea to execution with clarity and confidence.
              </p>
            </motion.div>

            <StaggerContainer className="space-y-4">
              {pillars.map((pillar, index) => (
                <StaggerItem key={index}>
                  <motion.div 
                    className="p-6 rounded-2xl bg-card border border-border/50 flex items-start gap-4 glow-on-hover"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-foreground shrink-0">
                      {pillar.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-display font-bold text-foreground mb-1">{pillar.title}</h4>
                      <p className="text-muted-foreground text-sm">{pillar.desc}</p>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="pill mb-6 inline-block italic">Our Story</span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground">
              How we started
            </h2>
          </motion.div>

          <motion.div 
            className="p-8 md:p-12 rounded-2xl bg-card border border-border/50"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
              ApexDeploy was founded with a belief: businesses shouldn't struggle with 
              confusing tech teams, unclear communication, or slow development.
            </p>
            <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
              We noticed that many companies had great ideas but lacked the right technical 
              execution. So we built ApexDeploy to offer end-to-end digital product development 
              — combining strategy, design, engineering, and deployment under one roof.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Today, we've helped multiple clients build real products — from websites and 
              dashboards to apps and AI systems. Our focus is delivering clean, fast, scalable 
              software that creates real business impact.
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <MagneticButton
              onClick={() => window.location.href = '/careers'}
              className="group px-8 py-4 bg-foreground text-background rounded-full font-medium 
                         transition-all duration-300 hover:shadow-lg hover:shadow-foreground/20
                         inline-flex items-center gap-2"
              strength={0.2}
            >
              <Users className="w-4 h-4" />
              Join Our Team
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </MagneticButton>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
