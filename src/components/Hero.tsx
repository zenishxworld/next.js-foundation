import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { MagneticButton } from "./ui/micro-interactions";

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-muted/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-muted/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Availability badge */}
          <motion.div 
            className="inline-flex items-center gap-2 pill mb-8 glow-on-hover cursor-default"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span>Available for new projects</span>
          </motion.div>

          {/* Main headline with staggered reveal */}
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold text-foreground leading-[1.1] tracking-tighter mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {["Brands", "Grow Fast", "With Us"].map((line, i) => (
              <motion.span 
                key={i}
                className="block overflow-hidden"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              >
                {i === 1 ? (
                  <>
                    <span className="text-muted-foreground">Grow </span>
                    <motion.span 
                      className="italic inline-block"
                      whileHover={{ scale: 1.05, rotate: -2 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      Fast
                    </motion.span>
                  </>
                ) : line}
              </motion.span>
            ))}
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 font-body"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            We don't just make brands pretty — we craft smart design and powerful 
            software that fuels real business growth.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <MagneticButton
              onClick={scrollToContact}
              className="group relative px-8 py-4 bg-foreground text-background rounded-full font-medium 
                         transition-all duration-300 hover:shadow-lg hover:shadow-foreground/20
                         flex items-center gap-2 overflow-hidden"
              strength={0.2}
            >
              <span className="relative z-10 flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Book a Meeting
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <motion.div 
                className="absolute inset-0 bg-muted-foreground"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </MagneticButton>

            <MagneticButton
              onClick={scrollToProjects}
              className="group px-8 py-4 bg-transparent text-foreground border border-border rounded-full font-medium
                         transition-all duration-300 hover:border-muted-foreground glow-on-hover
                         flex items-center gap-2"
              strength={0.2}
            >
              See Recent Work
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowRight className="w-4 h-4" />
              </motion.span>
            </MagneticButton>
          </motion.div>
        </div>

        {/* Service tags with hover effects */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mt-20 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          {["Strategy", "UX Design", "Branding", "Web Development", "Mobile Apps", "AI & Automation"].map((tag, index) => (
            <motion.span 
              key={tag}
              className="px-4 py-2 text-sm text-muted-foreground border border-border/50 rounded-full
                         cursor-default transition-all duration-300 icon-bounce"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 1.2 + index * 0.08 }}
              whileHover={{ 
                scale: 1.1, 
                borderColor: 'hsl(0 0% 50%)',
                color: 'hsl(0 0% 98%)',
                boxShadow: '0 0 20px -5px rgba(255,255,255,0.2)'
              }}
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        whileHover={{ scale: 1.1 }}
        onClick={() => {
          document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <motion.div 
          className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2
                     hover:border-muted-foreground/60 transition-colors"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <motion.div 
            className="w-1 h-2 bg-muted-foreground/50 rounded-full"
            animate={{ opacity: [0.5, 1, 0.5], y: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
