import { ArrowLeft, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
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

      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">

            {/* Back Btn */}
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
              className="text-4xl font-bold mb-6"
            >
              About ApexDeploy
            </motion.h1>
            
            {/* Intro */}
            <motion.p 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 0.5, delay: 0.2 }} 
              className="text-xl text-gray-600 mb-12"
            >
              ApexDeploy is a digital product agency that helps businesses build modern,
              high-performance websites, mobile apps, and AI-driven solutions.
              We turn ideas into clean, scalable, and market-ready products.
            </motion.p>

            {/* Mission & Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">

              {/* Mission */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <h2 className="text-3xl font-bold">Our Mission</h2>

                <p className="text-gray-600">
                  Our mission is simple: help businesses launch digital products that
                  stand out. We combine strategic thinking, modern engineering, and
                  clean design to create software that’s fast, scalable, and future-proof.
                </p>

                <p className="text-gray-600">
                  Whether you're building an MVP, upgrading your tech, or launching a new
                  SaaS platform — we help you move from idea to execution with clarity
                  and confidence.
                </p>
              </motion.div>
              
              {/* Pillars */}
              <motion.div
                initial={{ opacity: 0, x: 20 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
              >
                <h3 className="text-2xl font-bold mb-4">Our Core Pillars</h3>

                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-gray-700 mt-1 mr-3" />
                    <span>
                      <strong>Product Strategy:</strong> From idea validation to feature planning —  
                      we help you define a clear roadmap and build the right product from day one.
                    </span>
                  </li>

                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-gray-700 mt-1 mr-3" />
                    <span>
                      <strong>Web, App & AI Development:</strong>  
                      Modern full-stack engineering with clean code, scalable cloud setups,
                      and smart AI-powered functionality.
                    </span>
                  </li>

                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-gray-700 mt-1 mr-3" />
                    <span>
                      <strong>Launch & Scale:</strong>  
                      Deployment, optimization, analytics, and ongoing support — everything
                      you need to grow confidently.
                    </span>
                  </li>
                </ul>
              </motion.div>
            </div>
            
            {/* Story */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>

              <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
                <p className="text-gray-600 mb-4">
                  ApexDeploy was founded with a belief: businesses shouldn’t struggle with
                  confusing tech teams, unclear communication, or slow development.
                </p>

                <p className="text-gray-600 mb-4">
                  We noticed that many companies had great ideas but lacked the right
                  technical execution. So we built ApexDeploy to offer end-to-end digital
                  product development — combining strategy, design, engineering, and
                  deployment under one roof.
                </p>

                <p className="text-gray-600">
                  Today, we’ve helped multiple clients build real products — from websites
                  and dashboards to apps and AI systems. Our focus is delivering clean,
                  fast, scalable software that creates real business impact.
                </p>
              </div>
            </motion.div>

            {/* CTA */}
            <div className="mt-16 pt-8 border-t border-gray-200">
              <Link 
                to="/careers" 
                className="inline-flex items-center px-5 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-all group"
              >
                Join Our Team
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
