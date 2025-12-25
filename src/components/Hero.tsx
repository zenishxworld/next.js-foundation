import { ArrowRight, Code, Cpu, Layers, MessageSquare } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion } from "framer-motion";

const Hero = () => {
  const isMobile = useIsMobile();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3, duration: 0.8 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      className="relative w-full"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Background section */}
      <div className="banner-container bg-black relative overflow-hidden h-screen w-full">
        <div className="absolute inset-0 bg-black w-full">
          <img
            src="/lovable-uploads/4bfa0d71-3ed2-4693-90b6-35142468907f.png"
            alt="ApexDeploy Banner"
            loading="eager"
            decoding="async"
            className={`w-full h-full object-cover opacity-70 grayscale ${
              isMobile ? "object-right" : "object-center"
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-white"></div>
        </div>

        {/* HERO TEXT */}
        <div className="banner-overlay absolute inset-0 flex items-end pb-16 md:pb-20">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <motion.div variants={itemVariants}>
              <motion.h1
                variants={itemVariants}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight text-left"
              >
                Turning Ideas Into Powerful Digital Products
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-lg sm:text-xl text-gray-300 mt-4 sm:mt-6 md:text-base text-left max-w-2xl"
              >
                We help businesses build modern websites, mobile apps, and AI-driven
                solutions that deliver real results and long-term growth.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8"
                variants={itemVariants}
              >
                <button
                  className="min-h-[44px] px-6 sm:px-8 py-3 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-all shadow-lg hover:shadow-xl hover:shadow-gray-300/20 flex items-center justify-center group text-sm sm:text-base font-medium"
                  onClick={(e) => {
                    e.preventDefault();
                    const projectsSection = document.getElementById("projects");
                    if (projectsSection) {
                      projectsSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  Explore Projects
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  className="min-h-[44px] px-6 sm:px-8 py-3 bg-gray-700 text-white rounded-md hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl hover:shadow-gray-300/20 flex items-center justify-center group text-sm sm:text-base font-medium"
                  onClick={scrollToContact}
                >
                  Contact Us
                  <MessageSquare className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* BELOW-HERO INFO CARDS */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 mx-auto">
        <motion.div
          className="mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6 }}
        >
          {/* Updated — Project Strategy */}
          <motion.div
            className="bg-white p-4 md:p-5 rounded-xl shadow-sm border border-gray-100 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            variants={itemVariants}
          >
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-100 flex items-center justify-center rounded-lg text-gray-500 mb-2 md:mb-3">
              <Cpu className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2 text-gray-800">
              Product Strategy
            </h3>
            <p className="text-gray-600 text-xs md:text-sm">
              Requirement analysis, project planning, and clear roadmaps that reduce
              risks and build the right foundations.
            </p>
          </motion.div>

          {/* Updated — Software & AI */}
          <motion.div
            className="bg-white p-4 md:p-5 rounded-xl shadow-sm border border-gray-100 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            variants={itemVariants}
          >
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-100 flex items-center justify-center rounded-lg text-gray-500 mb-2 md:mb-3">
              <Code className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2 text-gray-800">
              Web, App & AI Development
            </h3>
            <p className="text-gray-600 text-xs md:text-sm">
              Full-stack engineering with responsive web apps, mobile applications,
              APIs, and AI-powered automation.
            </p>
          </motion.div>

          {/* Updated — Launch & Scale */}
          <motion.div
            className="bg-white p-4 md:p-5 rounded-xl shadow-sm border border-gray-100 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            variants={itemVariants}
          >
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-100 flex items-center justify-center rounded-lg text-gray-500 mb-2 md:mb-3">
              <Layers className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2 text-gray-800">
              Launch & Scale
            </h3>
            <p className="text-gray-600 text-xs md:text-sm">
              Cloud deploys, performance optimization, monitoring, and long-term
              support to keep your product growing.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
