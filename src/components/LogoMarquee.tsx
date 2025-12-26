import { motion } from "framer-motion";

const logos = [
  { name: "TechCorp", initial: "T" },
  { name: "InnovateLabs", initial: "I" },
  { name: "CloudScale", initial: "C" },
  { name: "DataFlow", initial: "D" },
  { name: "SecureNet", initial: "S" },
  { name: "GrowthHub", initial: "G" },
  { name: "NextGen", initial: "N" },
  { name: "AlphaWorks", initial: "A" },
];

const LogoMarquee = () => {
  // Duplicate logos for seamless loop
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="py-16 md:py-20 bg-secondary/20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <motion.p 
          className="text-center text-muted-foreground text-sm uppercase tracking-widest"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Trusted by innovative brands
        </motion.p>
      </div>

      {/* Marquee container */}
      <div className="relative">
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Scrolling content */}
        <motion.div
          className="flex gap-12 md:gap-16"
          animate={{ x: [0, -50 * logos.length * 2] }}
          transition={{
            x: {
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        >
          {duplicatedLogos.map((logo, index) => (
            <motion.div
              key={`${logo.name}-${index}`}
              className="flex-shrink-0 group"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center gap-3 px-6 py-4 rounded-xl bg-card/50 border border-border/30 
                            hover:border-border hover:bg-card transition-all duration-300 cursor-default
                            glow-on-hover">
                {/* Logo placeholder - stylized initial */}
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center
                              group-hover:bg-foreground group-hover:text-background transition-colors duration-300">
                  <span className="text-lg font-display font-bold">{logo.initial}</span>
                </div>
                <span className="text-foreground font-medium whitespace-nowrap">{logo.name}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Second row scrolling in opposite direction */}
      <div className="relative mt-6">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-12 md:gap-16"
          animate={{ x: [-50 * logos.length * 2, 0] }}
          transition={{
            x: {
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        >
          {duplicatedLogos.reverse().map((logo, index) => (
            <motion.div
              key={`${logo.name}-reverse-${index}`}
              className="flex-shrink-0 group"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center gap-3 px-6 py-4 rounded-xl bg-card/50 border border-border/30 
                            hover:border-border hover:bg-card transition-all duration-300 cursor-default
                            glow-on-hover">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center
                              group-hover:bg-foreground group-hover:text-background transition-colors duration-300">
                  <span className="text-lg font-display font-bold">{logo.initial}</span>
                </div>
                <span className="text-foreground font-medium whitespace-nowrap">{logo.name}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LogoMarquee;
