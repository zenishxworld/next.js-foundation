import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';
import { ArrowLeft, Mail, Linkedin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useEffect } from 'react';

const Careers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen bg-white">
      <PageLayout showContact={false}>
        <SEO 
          title="Careers at ApexDeploy" 
          description="Join ApexDeploy — work on modern web, mobile, and AI projects. Explore roles for developers, designers, interns, and product thinkers."
          imageUrl="/lovable-uploads/ADlogo.png"
          keywords={[
            'apexdeploy careers',
            'software jobs',
            'web development jobs',
            'mobile app development jobs',
            'AI development careers',
            'internships for developers'
          ]}
        />
        
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="max-w-6xl mx-auto">

              {/* Back Button */}
              <Link 
                to="/" 
                className="inline-flex items-center text-gray-500 hover:text-gray-700 mb-6 transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>

              {/* Header */}
              <motion.h1 
                initial={{ opacity: 0, y: -10 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5 }} 
                className="text-4xl font-bold mb-6"
              >
                Join Our Team
              </motion.h1>

              <div className="prose prose-lg max-w-none">

                {/* Intro */}
                <motion.p
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  transition={{ duration: 0.5, delay: 0.2 }} 
                  className="text-xl text-gray-600 mb-4"
                >
                  ApexDeploy is a fast-growing digital product agency where you get
                  the opportunity to shape real products used by real businesses.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-xl text-gray-600 mb-12"
                >
                  Whether you're an experienced engineer or an intern getting started,
                  you’ll work on modern websites, apps, and AI-powered systems from day one.
                </motion.p>

                {/* Why Join ApexDeploy */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="mb-16"
                >
                  <h2 className="text-3xl font-bold mb-6">Why Join ApexDeploy?</h2>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {[
                      {
                        title: "Work on Modern Tech",
                        description:
                          "Build real digital products using React, Node.js, AI tools, automation, cloud systems, and more."
                      },
                      {
                        title: "Real Impact",
                        description:
                          "Every project you contribute to goes directly to real clients — startups, businesses, and founders."
                      },
                      {
                        title: "Fast Career Growth",
                        description:
                          "Learn directly from industry practitioners while exploring frontend, backend, AI, cloud, and product skills."
                      }
                    ].map((benefit, i) => (
                      <div 
                        key={i} 
                        className="bg-gray-50 p-6 rounded-lg border border-gray-100 h-full"
                      >
                        <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                        <p className="text-gray-600">{benefit.description}</p>
                      </div>
                    ))}
                  </div>

                  {/* Internship Section */}
                  <h2 className="text-3xl font-bold mb-6">Internship Program</h2>

                  <div className="bg-gray-50 rounded-xl border border-gray-200 p-6 sm:p-8 shadow-sm mb-12">
                    <h3 className="font-bold text-xl mb-4">Grow With Hands-On Learning</h3>
                    <p className="text-gray-700 mb-4">
                      Our internship program is designed for students and fresh developers
                      who want real production experience. No dummy projects — you’ll work
                      with our team on actual client products.
                    </p>

                    <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-6">
                      <li>Work directly on live web, app & AI projects</li>
                      <li>Learn through pair programming & code reviews</li>
                      <li>Build real features and deploy them to production</li>
                      <li>Master modern tools: Git, React, APIs, databases, cloud, AI tools</li>
                    </ul>

                    <Link 
                      to="/internship" 
                      className="inline-flex items-center px-5 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      Apply Now
                    </Link>
                  </div>

                  {/* Contact COO */}
                  <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm mt-12">
                    <h3 className="font-bold text-xl mb-6">Contact Our COO</h3>
                    
                    <div className="bg-white rounded-xl p-6 border border-gray-200">
                      <div className="flex flex-col items-center text-center">
                        <img 
                          src="/lovable-uploads/hensu.png"
                          alt="Hensu Patel"
                          loading="lazy"
                          decoding="async"
                          className="w-32 h-32 rounded-full mb-4 object-cover filter grayscale"
                        />
                        
                        <h3 className="text-xl font-bold text-gray-900">Hensu Patel</h3>
                        <p className="text-gray-600 mb-4">COO & Co-founder</p>

                        <div className="flex flex-col space-y-3 w-full">
                          <a 
                            href="mailto:patelhensu525@gmail.com" 
                            className="flex items-center justify-center w-full text-gray-700 hover:text-blue-600"
                          >
                            <Mail className="w-5 h-5 mr-2 hidden sm:inline" />
                            <span>patelhensu525@gmail.com</span>
                          </a>

                          <a 
                            href="https://www.linkedin.com/in/hensu-patel-a781a3328/" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-full text-gray-700 hover:text-blue-600"
                          >
                            <Linkedin className="w-5 h-5 mr-2" />
                            <span>LinkedIn Profile</span>
                          </a>

                          <a 
                            href="tel:+919081293038" 
                            className="flex items-center justify-center w-full text-gray-700 hover:text-blue-600"
                          >
                            <Phone className="w-5 h-5 mr-2" />
                            <span>+91 90812 93038</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

              </div>
            </div>
          </div>
        </section>
      </PageLayout>
    </div>
  );
};

export default Careers;
