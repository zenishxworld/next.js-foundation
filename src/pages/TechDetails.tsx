import { ArrowLeft, ArrowRight, FileText, Code, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import ProductPlatform from '@/components/ProductPlatform';
import { useIsMobile } from '@/hooks/use-mobile';
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';

const TechDetails = () => {
  const isMobile = useIsMobile();
  const [progressValue, setProgressValue] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgressValue(100), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <PageLayout>
      <SEO 
        title="Technical Deep Dive - ApexDeploy" 
        description="Understand the engineering foundation behind ApexDeploy’s modular architecture, solution design system, and development methodology."
        imageUrl="/lovable-uploads/ADlogo.png"
        keywords={[
          'technical deep dive',
          'software architecture',
          'modular development',
          'cloud infrastructure',
          'AI systems',
          'ApexDeploy engineering'
        ]}
      />

      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">

            {/* Back */}
            <Link 
              to="/" 
              className="inline-flex items-center text-gray-500 hover:text-gray-700 mb-6 transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
            
            {/* Title */}
            <motion.h1 
              initial={{ opacity: 0, y: -10 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-4xl font-bold mb-6"
            >
              Technical Deep Dive
            </motion.h1>
            
            <div className="prose prose-lg max-w-none">

              {/* Intro */}
              <motion.p 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-base sm:text-lg text-gray-600 mb-12"
              >
                Explore the engineering foundations that power ApexDeploy’s modular development ecosystem.  
                This page gives a transparent look at our architecture, platform components, and technical 
                systems that enable rapid prototyping, scalable deployment, and long-term maintainability.
              </motion.p>
              
              {/* SYSTEM ARCHITECTURE */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6 }}
                className="mb-16"
              >
                <div className="flex items-center gap-2 mb-4">
                  <FileText className="w-5 h-5 text-gray-700" />
                  <h2 className="text-2xl font-bold">System Architecture</h2>
                </div>
                
                <p className="text-gray-600 mb-8 text-base max-w-3xl">
                  ApexDeploy uses a modular, service-oriented architecture designed for performance, reliability, 
                  and fast iteration. Our ecosystem connects frontend experiences, backend APIs, cloud pipelines, 
                  and AI-driven analytics through a unified, scalable system.
                </p>

                {/* Architecture Diagram */}
                <Card className="bg-white rounded-lg mb-10 border border-gray-200 shadow-sm">
                  <CardContent className="p-4 lg:p-6">
                    <ProductPlatform />
                  </CardContent>
                </Card>
              </motion.div>
              
              {/* APPROACH */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <Code className="w-5 h-5 text-gray-700" />
                  <h2 className="text-2xl font-bold">Our Engineering Approach</h2>
                </div>
                
                <p className="text-gray-600 mb-8 text-base max-w-3xl">
                  Our development process emphasizes clarity, modularity, and performance.  
                  We combine structured planning, technical depth, and reusable systems to bring ideas to life 
                  with predictable timelines and high engineering quality.
                </p>
                
                {/* Phases */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                  {[
                    {
                      title: "Discovery & Strategy",
                      icon: <Cpu className="w-5 h-5 text-gray-700" />,
                      description:
                        "We map requirements, evaluate feasibility, and design a technical plan aligned with business needs and user expectations."
                    },
                    {
                      title: "Design & Architecture",
                      icon: <Code className="w-5 h-5 text-gray-700" />,
                      description:
                        "We craft scalable solution architectures, modular structures, and functional prototypes to validate concepts early."
                    },
                    {
                      title: "Development & Deployment",
                      icon: <FileText className="w-5 h-5 text-gray-700" />,
                      description:
                        "We build, refine, test, and deploy all components using best-practice engineering standards and automated workflows."
                    }
                  ].map((phase, i) => (
                    <motion.div
                      key={phase.title}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                      className="bg-gray-50 p-6 rounded-lg border border-gray-100 hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex items-center gap-2 mb-3">
                        {phase.icon}
                        <h3 className="font-semibold text-lg">{phase.title}</h3>
                      </div>
                      <p className="text-gray-600 text-base">{phase.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
            
            {/* CTA */}
            <div className="mt-16 pt-8 border-t border-gray-200">
              <Link 
                to="/development-process" 
                className="inline-flex items-center px-5 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-all group"
              >
                Explore Our Development Process
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default TechDetails;
