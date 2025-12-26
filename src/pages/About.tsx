import { ArrowLeft, ArrowRight, Sparkles, Target, Rocket, Users, Code, Zap, Globe, Award, Heart, Coffee } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from 'react';
import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';
import { StaggerContainer, StaggerItem, TiltCard, HoverGlow } from '@/components/ui/micro-interactions';

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

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
    { value: "50+", label: "Projects Delivered", icon: Code },
    { value: "98%", label: "Client Satisfaction", icon: Heart },
    { value: "24/7", label: "Support Available", icon: Zap },
    { value: "3x", label: "Faster Development", icon: Rocket }
  ];

  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We don't just meet expectations — we exceed them. Every line of code, every pixel matters."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Your success is our success. We work as an extension of your team, not just a vendor."
    },
    {
      icon: Globe,
      title: "Innovation",
      description: "We stay ahead of the curve, embracing new technologies to give you a competitive edge."
    },
    {
      icon: Coffee,
      title: "Passion",
      description: "We genuinely love what we do. That passion shows in every product we build."
    }
  ];

  const timeline = [
    { year: "2022", title: "Founded", description: "ApexDeploy was born with a vision to transform digital experiences." },
    { year: "2023", title: "First 20 Clients", description: "Delivered successful projects across web, mobile, and AI." },
    { year: "2024", title: "Team Growth", description: "Expanded our team of talented developers and designers." },
    { year: "2025", title: "Global Reach", description: "Serving clients worldwide with cutting-edge solutions." }
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

      <div ref={containerRef} className="relative">
        {/* Animated Background */}
        <motion.div 
          className="fixed inset-0 pointer-events-none"
          style={{ opacity }}
        >
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
        </motion.div>

        <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 min-h-screen relative">
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
            
            {/* Hero Section with Split Design */}
            <div className="mb-32 relative">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="space-y-8"
                >
                  <motion.span 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20 backdrop-blur-sm"
                  >
                    About Us
                  </motion.span>
                  
                  <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] tracking-tight">
                    <motion.span
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="block"
                    >
                      We Build
                    </motion.span>
                    <motion.span
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="block text-gradient"
                    >
                      Digital Products
                    </motion.span>
                    <motion.span
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      className="block"
                    >
                      That Matter
                    </motion.span>
                  </h1>
                  
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-xl text-muted-foreground max-w-xl leading-relaxed"
                  >
                    ApexDeploy is a digital product agency that helps businesses build modern,
                    high-performance websites, mobile apps, and AI-driven solutions.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="flex flex-wrap gap-4"
                  >
                    <Link 
                      to="/#contact" 
                      className="group inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
                    >
                      Start a Project
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>
                </motion.div>

                {/* Decorative Element */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="relative hidden lg:block"
                >
                  <div className="relative w-full aspect-square max-w-md mx-auto">
                    {/* Orbiting circles */}
                    <div className="absolute inset-0 animate-[spin_20s_linear_infinite]">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full" />
                    </div>
                    <div className="absolute inset-4 animate-[spin_15s_linear_infinite_reverse]">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-accent rounded-full" />
                    </div>
                    <div className="absolute inset-8 animate-[spin_25s_linear_infinite]">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary/60 rounded-full" />
                    </div>
                    
                    {/* Center logo area */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-3xl blur-2xl animate-pulse" />
                        <div className="relative w-32 h-32 bg-card/80 backdrop-blur-xl rounded-3xl border border-border/50 flex items-center justify-center">
                          <span className="text-5xl font-display font-bold text-gradient">A</span>
                        </div>
                      </div>
                    </div>

                    {/* Rings */}
                    <div className="absolute inset-0 border border-border/30 rounded-full" />
                    <div className="absolute inset-8 border border-border/20 rounded-full" />
                    <div className="absolute inset-16 border border-border/10 rounded-full" />
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Stats Section with Icons */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-32"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="relative group cursor-pointer"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                    <div className="relative p-6 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm text-center hover:border-primary/50 transition-all duration-300 overflow-hidden">
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <stat.icon className="w-8 h-8 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                      <div className="text-4xl md:text-5xl font-display font-bold text-gradient mb-2">
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Mission & Pillars Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
              <motion.div 
                initial={{ opacity: 0, x: -30 }} 
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <motion.div 
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-primary/20"
                    >
                      <Users className="w-7 h-7 text-primary" />
                    </motion.div>
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

                  <div className="pt-4 flex flex-wrap gap-3">
                    {['React', 'TypeScript', 'Node.js', 'AI/ML', 'Cloud'].map((tech, i) => (
                      <motion.span 
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="px-4 py-2 rounded-full bg-muted/50 text-sm font-medium border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all cursor-default"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
              
              {/* Core Pillars */}
              <motion.div
                initial={{ opacity: 0, x: 30 }} 
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <StaggerContainer className="space-y-4">
                  {pillars.map((pillar, index) => (
                    <StaggerItem key={pillar.title}>
                      <motion.div
                        whileHover={{ x: 10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <HoverGlow>
                          <div className="p-6 rounded-2xl bg-card/30 border border-border/50 backdrop-blur-sm hover:bg-card/50 transition-all duration-300 group">
                            <div className="flex items-start gap-4">
                              <motion.div 
                                whileHover={{ rotate: 10, scale: 1.1 }}
                                className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-primary/20 flex-shrink-0"
                              >
                                <pillar.icon className="w-7 h-7 text-primary" />
                              </motion.div>
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
                      </motion.div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </motion.div>
            </div>

            {/* Values Section */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-32"
            >
              <div className="text-center mb-12">
                <motion.span 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium border border-accent/20 mb-4"
                >
                  Our Values
                </motion.span>
                <h2 className="text-3xl md:text-5xl font-display font-bold">
                  What Drives Us
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <TiltCard className="h-full">
                      <div className="h-full p-6 rounded-2xl bg-card/30 border border-border/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 group">
                        <motion.div 
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center border border-primary/20 mb-4"
                        >
                          <value.icon className="w-6 h-6 text-primary" />
                        </motion.div>
                        <h3 className="text-lg font-display font-semibold mb-2 group-hover:text-primary transition-colors">
                          {value.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </TiltCard>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Timeline Section */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-32"
            >
              <div className="text-center mb-12">
                <motion.span 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20 mb-4"
                >
                  Our Journey
                </motion.span>
                <h2 className="text-3xl md:text-5xl font-display font-bold">
                  The Story So Far
                </h2>
              </div>

              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent hidden md:block" />
                
                <div className="space-y-12">
                  {timeline.map((item, index) => (
                    <motion.div
                      key={item.year}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className={`flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                    >
                      <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          className="inline-block p-6 rounded-2xl bg-card/30 border border-border/50 backdrop-blur-sm hover:border-primary/30 transition-all"
                        >
                          <span className="text-3xl font-display font-bold text-gradient">{item.year}</span>
                          <h3 className="text-xl font-semibold mt-2 mb-1">{item.title}</h3>
                          <p className="text-muted-foreground text-sm">{item.description}</p>
                        </motion.div>
                      </div>
                      
                      {/* Center dot */}
                      <div className="hidden md:flex items-center justify-center">
                        <motion.div 
                          whileHover={{ scale: 1.5 }}
                          className="w-4 h-4 rounded-full bg-primary ring-4 ring-primary/20"
                        />
                      </div>
                      
                      <div className="flex-1 hidden md:block" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
            
            {/* Story Section */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }} 
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-32"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 rounded-3xl blur-3xl" />
                
                <div className="relative p-8 md:p-12 rounded-3xl bg-card/30 border border-border/50 backdrop-blur-sm overflow-hidden">
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/5 rounded-full blur-3xl" />
                  
                  <div className="relative">
                    <div className="flex items-center gap-4 mb-8">
                      <motion.div 
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-primary/20"
                      >
                        <Sparkles className="w-7 h-7 text-primary" />
                      </motion.div>
                      <h2 className="text-3xl md:text-4xl font-display font-bold">Our Story</h2>
                    </div>

                    <div className="space-y-6 text-lg text-muted-foreground leading-relaxed max-w-4xl">
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                      >
                        ApexDeploy was founded with a belief: businesses shouldn't struggle with
                        confusing tech teams, unclear communication, or slow development.
                      </motion.p>

                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                      >
                        We noticed that many companies had great ideas but lacked the right
                        technical execution. So we built ApexDeploy to offer end-to-end digital
                        product development — combining strategy, design, engineering, and
                        deployment under one roof.
                      </motion.p>

                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                      >
                        Today, we've helped multiple clients build real products — from websites
                        and dashboards to apps and AI systems. Our focus is delivering clean,
                        fast, scalable software that creates real business impact.
                      </motion.p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
                <div className="relative p-12 rounded-3xl bg-card/30 border border-border/50 backdrop-blur-sm">
                  <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                    Ready to Build Something Great?
                  </h2>
                  <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                    Let's discuss your project and see how we can help bring your vision to life.
                  </p>
                  <div className="inline-flex flex-col sm:flex-row gap-4">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Link 
                        to="/careers" 
                        className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
                      >
                        Join Our Team
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </motion.div>
                    
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Link 
                        to="/#contact" 
                        className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-card/50 border border-border/50 rounded-full font-medium hover:bg-card hover:border-primary/50 transition-all duration-300"
                      >
                        Get in Touch
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default About;
