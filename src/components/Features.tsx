import { ArrowRight, Globe, Smartphone, Bot, Palette, Cloud, ShoppingCart, MessageSquare, Code, Zap, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { TiltCard, MagneticButton, StaggerContainer, StaggerItem } from "./ui/micro-interactions";

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    { icon: <Globe className="w-6 h-6" />, title: "Web Development", description: "High-performance websites, dashboards, and SaaS apps with clean architecture." },
    { icon: <Smartphone className="w-6 h-6" />, title: "Mobile Apps", description: "Cross-platform Android & iOS apps with smooth UX and scalable integrations." },
    { icon: <Bot className="w-6 h-6" />, title: "AI & Automation", description: "AI chatbots, workflow automation, and smart features that reduce manual work." },
    { icon: <Palette className="w-6 h-6" />, title: "UI/UX Design", description: "Wireframes, prototypes, and design systems that make your product beautiful." },
    { icon: <Cloud className="w-6 h-6" />, title: "Cloud & Backend", description: "Robust APIs, authentication, databases — built for security and scale." },
    { icon: <ShoppingCart className="w-6 h-6" />, title: "eCommerce", description: "Custom stores, payment flows, and analytics with reliable workflows." },
  ];

  const processSteps = [
    { number: "01", title: "Discover", description: "We uncover what drives your brand through purpose, clarity, and business focus.", icon: <MessageSquare className="w-5 h-5" /> },
    { number: "02", title: "Request", description: "Submit unlimited design requests directly to us. No meetings needed.", icon: <Code className="w-5 h-5" /> },
    { number: "03", title: "Create", description: "We design and develop at speed. Most requests delivered in days.", icon: <Zap className="w-5 h-5" /> },
    { number: "04", title: "Activate", description: "Your brand is now live. We provide assets and support to grow.", icon: <Rocket className="w-5 h-5" /> },
  ];

  return (
    <>
      {/* Services Section */}
      <section id="features" className="py-24 md:py-32 bg-background" ref={ref}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <motion.span 
              className="pill mb-6 inline-block"
              whileHover={{ scale: 1.05 }}
            >
              What We Do
            </motion.span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
              We help brands grow with<br />
              <span className="text-muted-foreground">standout design</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From strategy and design to engineering and launch — we ship products that grow with your business.
            </p>
          </motion.div>

          {/* Services Grid with Tilt Cards */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <StaggerItem key={index}>
                <TiltCard className="group h-full">
                  <motion.div 
                    className="p-8 rounded-2xl bg-card border border-border/50 h-full glow-on-hover"
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div 
                      className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center text-foreground mb-6
                                group-hover:bg-foreground group-hover:text-background transition-colors duration-300"
                      whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                    >
                      {service.icon}
                    </motion.div>
                    <h3 className="text-xl font-display font-bold text-foreground mb-3">{service.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                  </motion.div>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 md:py-32 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <motion.span 
              className="pill mb-6 italic inline-block"
              whileHover={{ scale: 1.05 }}
            >
              Our Process, Explained
            </motion.span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground">
              Here's how it works
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div 
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <motion.div 
                  className="p-8 rounded-2xl bg-card border border-border/50 h-full glow-on-hover"
                  whileHover={{ y: -5, borderColor: 'hsl(0 0% 30%)' }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className="text-5xl font-display font-bold text-muted/50 mb-4"
                    whileHover={{ scale: 1.1, color: 'hsl(0 0% 40%)' }}
                    transition={{ duration: 0.2 }}
                  >
                    {step.number}
                  </motion.div>
                  <h3 className="text-xl font-display font-bold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </motion.div>
                
                {/* Animated connector line */}
                {index < 3 && (
                  <motion.div 
                    className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-border"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  />
                )}
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <MagneticButton
              onClick={scrollToContact}
              className="group px-8 py-4 bg-foreground text-background rounded-full font-medium 
                         transition-all duration-300 hover:shadow-lg hover:shadow-foreground/20
                         inline-flex items-center gap-2"
              strength={0.2}
            >
              Start Your Project
              <motion.span
                className="inline-block"
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <ArrowRight className="w-4 h-4" />
              </motion.span>
            </MagneticButton>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Features;
