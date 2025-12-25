import { motion } from "framer-motion";
// Swapping out hardware/IoT-specific icons for more general strategy/software/deployment icons
import { Zap, Layout, Cloud, TrendingUp, Monitor, CheckCircle, Code, Briefcase, Database, Users, Settings, Server, ArrowRight, Smartphone, FileText } from 'lucide-react';

const ProductPlatform = () => {
  return (
    <div className="w-full relative">
      {/* Product Title Section */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6"
      >
        {/* REPLACEMENT: Title and Subtitle - Focused on Architecture/Process */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Our Project Architecture</h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-4xl">
          Our battle-tested, three-phase architecture ensures every project moves efficiently from concept to successful market deployment, leveraging our team's dedicated expertise.
        </p>
      </motion.div>

      {/* Platform Architecture - Three Column Layout for desktop, Vertical for mobile */}
      <div className="flex flex-col lg:flex-row gap-6 w-full">
        
        {/* REPLACEMENT COLUMN 1: Project Strategy */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1"
        >
          <div className="bg-gray-200 rounded-xl p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-bold text-center mb-1">Phase 1: Project Strategy</h3>
            <p className="text-xs sm:text-sm text-center mb-4">Foundation & Requirements</p>
            
            <div className="space-y-3">
              {[
                { icon: <Briefcase className="text-black w-4 h-4 sm:w-5 sm:h-5" />, text: "Discovery Workshops" },
                { icon: <Zap className="text-black w-4 h-4 sm:w-5 sm:h-5" />, text: "Technical Feasibility" },
                { icon: <Layout className="text-black w-4 h-4 sm:w-5 sm:h-5" />, text: "Requirements Gathering" },
                { icon: <TrendingUp className="text-black w-4 h-4 sm:w-5 sm:h-5" />, text: "Roadmap Planning" },
                { icon: <Users className="text-black w-4 h-4 sm:w-5 sm:h-5" />, text: "Scope Definition" },
                { icon: <Database className="text-black w-4 h-4 sm:w-5 sm:h-5" />, text: "Data Ingestion Strategy" } // New relevant item added to fill space
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-lg p-3 sm:p-4 flex items-center">
                  <div className="mr-3 sm:mr-4 flex-shrink-0">{item.icon}</div>
                  <span className="text-gray-800 font-medium text-xs sm:text-sm">{item.text}</span>
                </div>
              ))}
            </div>
            
            <p className="text-xs sm:text-sm text-center mt-4 sm:mt-6">
              Defining the core problem and establishing a clear,<br />actionable plan for development.
            </p>
          </div>
        </motion.div>

        {/* Flow Arrows - Mobile and Desktop have different appearance */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden lg:flex items-center justify-center"
        >
          <ArrowRight className="text-black w-8 h-8" />
        </motion.div>
        
        {/* Mobile Flow Indicator - Only visible on mobile/tablet */}
        <div className="flex lg:hidden items-center justify-center my-2">
          <ArrowRight className="text-black w-6 h-6 rotate-90" />
        </div>

        {/* REPLACEMENT COLUMN 2: Software Development */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex-[1.5]"
        >
          <div className="bg-gray-200 rounded-xl p-4 sm:p-6">
            <div className="flex flex-col items-center mb-3 sm:mb-4">
              <h3 className="text-xl sm:text-2xl font-bold text-center mb-0">Core Solution</h3>
              <p className="text-lg sm:text-xl font-medium text-center">Development</p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
              {[
                { icon: <Database className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Data Storage" },
                { icon: <Zap className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Data Processing" },
                { icon: <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5" />, name: "AI & ML Models" },
                { icon: <Code className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Backend Logic" },
                { icon: <Smartphone className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Mobile Development" },
                { icon: <Monitor className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Web Application" },
                { icon: <Settings className="w-4 h-4 sm:w-5 sm:h-5" />, name: "System APIs" },
                { icon: <Server className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Infrastructure" },
                { icon: <Cloud className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Cloud Services" },
                { icon: <Code className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Reusable Libraries" },
                { icon: <Settings className="w-4 h-4 sm:w-5 sm:h-5" />, name: "DevOps / CI/CD" },
                { icon: <Zap className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Real-time Processing" }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-lg p-2 sm:p-3 text-center flex flex-col items-center justify-center">
                  <div className="mb-1 sm:mb-2">{item.icon}</div>
                  <div className="text-[10px] sm:text-xs">{item.name}</div>
                </div>
              ))}
            </div>
            
            <p className="text-xs sm:text-sm text-center mt-4 sm:mt-6">
              Building robust, scalable software and cloud solutions<br />that power the final product experience.
            </p>
          </div>
        </motion.div>

        {/* Flow Arrows - Desktop Only */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="hidden lg:flex items-center justify-center"
        >
          <ArrowRight className="text-black w-8 h-8" />
        </motion.div>
        
        {/* Mobile Flow Indicator - Only visible on mobile/tablet */}
        <div className="flex lg:hidden items-center justify-center my-2">
          <ArrowRight className="text-black w-6 h-6 rotate-90" />
        </div>

        {/* REPLACEMENT COLUMN 3: Deployment & Scale */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex-1"
        >
          <div className="bg-gray-200 rounded-xl p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-bold text-center mb-1">Phase 3: Deployment & Scale</h3>
            <p className="text-xs sm:text-sm text-center mb-4">Results & Integration</p>
            
            <div className="space-y-3">
              {[
                { icon: <CheckCircle className="text-black w-4 h-4 sm:w-5 sm:h-5" />, text: "Quality Assurance" },
                { icon: <Smartphone className="text-black w-4 h-4 sm:w-5 sm:h-5" />, text: "User Acceptance Testing (UAT)" },
                { icon: <FileText className="text-black w-4 h-4 sm:w-5 sm:h-5" />, text: "Compliance & Security Audits" },
                { icon: <Code className="text-black w-4 h-4 sm:w-5 sm:h-5" />, text: "Third-party Integration" }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-lg p-3 sm:p-4 flex items-center">
                  <div className="mr-3 sm:mr-4 flex-shrink-0">{item.icon}</div>
                  <span className="text-gray-800 font-medium text-xs sm:text-sm">{item.text}</span>
                </div>
              ))}
            </div>
            
            <p className="text-xs sm:text-sm text-center mt-4 sm:mt-6">
              Ensuring market readiness, user satisfaction, and<br />a plan for future growth and iteration.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductPlatform;