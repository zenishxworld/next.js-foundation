import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';
import { ArrowLeft, Mail, Linkedin, Phone, Briefcase, GraduationCap, Rocket, Code, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useEffect } from 'react';
import { TiltCard, StaggerContainer, StaggerItem, MagneticButton } from '@/components/ui/micro-interactions';

const Careers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    { icon: <Code className="w-5 h-5" />, title: "Work on Modern Tech", desc: "Build real digital products using React, Node.js, AI tools, automation, cloud systems, and more." },
    { icon: <Rocket className="w-5 h-5" />, title: "Real Impact", desc: "Every project you contribute to goes directly to real clients — startups, businesses, and founders." },
    { icon: <Users className="w-5 h-5" />, title: "Fast Career Growth", desc: "Learn directly from industry practitioners while exploring frontend, backend, AI, cloud, and product skills." },
  ];

  const internshipFeatures = [
    "Work directly on live web, app & AI projects",
    "Learn through pair programming & code reviews",
    "Build real features and deploy them to production",
    "Master modern tools: Git, React, APIs, databases, cloud, AI tools",
  ];
  
  return (
    <PageLayout showContact={false}>
      <SEO 
        title="Careers at ApexDeploy" 
        description="Join ApexDeploy — work on modern web, mobile, and AI projects. Explore roles for developers, designers, interns, and product thinkers."
        imageUrl="/lovable-uploads/ADlogo.png"
        keywords={['apexdeploy careers', 'software jobs', 'web development jobs', 'internships for developers']}
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
              <Briefcase className="w-3 h-3 inline mr-2" />
              Careers
            </motion.span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground mb-6">
              Join Our<br />
              <span className="italic">Team</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              ApexDeploy is a fast-growing digital product agency where you get the opportunity 
              to shape real products used by real businesses.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
              Why Join ApexDeploy?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Work on modern tech stacks and build products that matter
            </p>
          </motion.div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <StaggerItem key={index}>
                <TiltCard className="h-full">
                  <motion.div 
                    className="p-8 rounded-2xl bg-card border border-border/50 h-full glow-on-hover"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-foreground mb-6">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-display font-bold text-foreground mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground text-sm">{benefit.desc}</p>
                  </motion.div>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Internship Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="container mx-auto max-w-4xl">
          <motion.div 
            className="p-8 md:p-12 rounded-2xl bg-card border border-border/50"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-foreground">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-display font-bold text-foreground">Internship Program</h2>
                <p className="text-muted-foreground text-sm">Grow With Hands-On Learning</p>
              </div>
            </div>

            <p className="text-muted-foreground mb-6">
              Our internship program is designed for students and fresh developers who want real 
              production experience. No dummy projects — you'll work with our team on actual client products.
            </p>

            <ul className="space-y-3 mb-8">
              {internshipFeatures.map((feature, index) => (
                <motion.li 
                  key={index}
                  className="flex items-center gap-3 text-foreground"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className="w-1.5 h-1.5 bg-foreground rounded-full" />
                  {feature}
                </motion.li>
              ))}
            </ul>

            <MagneticButton
              onClick={() => window.location.href = '/internship'}
              className="px-8 py-4 bg-foreground text-background rounded-full font-medium 
                         transition-all duration-300 hover:shadow-lg hover:shadow-foreground/20"
              strength={0.2}
            >
              Apply Now
            </MagneticButton>
          </motion.div>
        </div>
      </section>

      {/* Contact COO Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="container mx-auto max-w-xl">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-display font-bold text-foreground">Contact Our COO</h2>
          </motion.div>

          <motion.div 
            className="p-8 rounded-2xl bg-card border border-border/50 text-center glow-on-hover"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -5 }}
          >
            <img 
              src="/lovable-uploads/hensu.png"
              alt="Hensu Patel"
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover grayscale border-2 border-border"
            />
            
            <h3 className="text-xl font-display font-bold text-foreground">Hensu Patel</h3>
            <p className="text-muted-foreground mb-6">COO & Co-founder</p>

            <div className="space-y-3">
              <a 
                href="mailto:patelhensu525@gmail.com" 
                className="flex items-center justify-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">patelhensu525@gmail.com</span>
              </a>

              <a 
                href="https://www.linkedin.com/in/hensu-patel-a781a3328/" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span className="text-sm">LinkedIn Profile</span>
              </a>

              <a 
                href="tel:+919081293038" 
                className="flex items-center justify-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm">+91 90812 93038</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Careers;
