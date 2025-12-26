import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BarChart, AlertTriangle, Clock4, Rocket, Zap, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const AnimatedCounter = ({ end, suffix = "", prefix = "" }: { end: number; suffix?: string; prefix?: string }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const inView = useInView(countRef, { once: true, margin: "-100px" });
  
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end, inView]);

  return <span ref={countRef} className="font-bold">{prefix}{count}{suffix}</span>;
};

const WhyWrlds = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Why ApexDeploy?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We bring simplicity and expertise to ensure your success
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            { icon: <BarChart className="w-6 h-6" />, value: 2, suffix: "+", label: "Years building products" },
            { icon: <AlertTriangle className="w-6 h-6" />, value: 60, suffix: "%", label: "Projects saved from delays" },
            { icon: <Clock4 className="w-6 h-6" />, value: 80, suffix: "%", label: "Faster time-to-market" },
          ].map((stat, index) => (
            <motion.div 
              key={index}
              className="p-8 rounded-2xl bg-card border border-border/50 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center text-foreground mx-auto mb-4">
                {stat.icon}
              </div>
              <div className="text-4xl font-display font-bold text-foreground mb-2">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { icon: <BarChart className="w-5 h-5" />, title: "New Revenue Products", desc: "Create high-margin, sensor-enabled products for new revenue streams." },
            { icon: <Sparkles className="w-5 h-5" />, title: "Innovation That Attracts", desc: "Break through to dream clients with tech that makes you stand out." },
            { icon: <Zap className="w-5 h-5" />, title: "Comfort-Zone Development", desc: "We develop frontier tech while you stay in your comfort zone." },
            { icon: <Rocket className="w-5 h-5" />, title: "Brand-Defining Leaps", desc: "Strategic software leaps that define your brand's future." },
          ].map((item, index) => (
            <motion.div 
              key={index}
              className="p-6 rounded-2xl bg-card border border-border/50 flex items-start gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-foreground shrink-0">
                {item.icon}
              </div>
              <div>
                <h4 className="text-lg font-display font-bold text-foreground mb-1">{item.title}</h4>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Link 
            to="/development-process" 
            onClick={() => window.scrollTo(0, 0)}
            className="group inline-flex items-center gap-2 px-6 py-3 bg-secondary text-foreground rounded-full 
                       hover:bg-muted transition-colors"
          >
            Learn about our process
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyWrlds;
