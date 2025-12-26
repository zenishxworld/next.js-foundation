import { ArrowRight, Globe, Smartphone, Bot, Palette, Cloud, ShoppingCart, MessageSquare, Code, Zap, CheckCircle, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Web Development",
      description: "High-performance websites, dashboards, and SaaS apps with clean architecture and fast load times.",
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile Apps",
      description: "Cross-platform Android & iOS apps with smooth UX, offline support, and scalable integrations.",
    },
    {
      icon: <Bot className="w-6 h-6" />,
      title: "AI & Automation",
      description: "AI chatbots, workflow automation, and smart features that reduce manual work.",
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "UI/UX Design",
      description: "Wireframes, prototypes, and design systems that make your product intuitive and beautiful.",
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Cloud & Backend",
      description: "Robust APIs, authentication, databases — built for security, speed, and scale.",
    },
    {
      icon: <ShoppingCart className="w-6 h-6" />,
      title: "eCommerce",
      description: "Custom stores, payment flows, and analytics with reliable order workflows.",
    },
  ];

  const processSteps = [
    { number: "01", title: "Discover", description: "We uncover what drives your brand through purpose, clarity, audience insight and business focus.", icon: <MessageSquare className="w-5 h-5" /> },
    { number: "02", title: "Request", description: "Submit unlimited design requests directly to us. No meetings needed unless you want to chat.", icon: <Code className="w-5 h-5" /> },
    { number: "03", title: "Create", description: "We design and develop at speed. Most requests are delivered in just a few days.", icon: <Zap className="w-5 h-5" /> },
    { number: "04", title: "Activate", description: "Your brand is now live. We provide the assets and support you need to grow.", icon: <Rocket className="w-5 h-5" /> },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

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
            <span className="pill mb-6">What We Do</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
              We help brands grow with<br />
              <span className="text-muted-foreground">standout design</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From strategy and design to engineering and launch — we ship products that grow with your business.
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {services.map((service, index) => (
              <motion.div 
                key={index}
                className="group p-8 rounded-2xl bg-card border border-border/50 card-hover"
                variants={itemVariants}
              >
                <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center text-foreground mb-6
                              group-hover:bg-foreground group-hover:text-background transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
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
            <span className="pill mb-6 italic">Our Process, Explained</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground">
              Here's how it works
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div 
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="p-8 rounded-2xl bg-card border border-border/50 h-full">
                  <div className="text-5xl font-display font-bold text-muted/50 mb-4">{step.number}</div>
                  <h3 className="text-xl font-display font-bold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </div>
                
                {/* Connector line */}
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-border" />
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
            <button
              onClick={scrollToContact}
              className="group px-8 py-4 bg-foreground text-background rounded-full font-medium 
                         transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-foreground/20
                         inline-flex items-center gap-2"
            >
              Start Your Project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Features;
