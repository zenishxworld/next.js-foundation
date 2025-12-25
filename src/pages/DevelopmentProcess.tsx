import { 
  ArrowLeft, 
  CheckCircle, 
  FileSearch, 
  Settings, 
  Cpu, 
  Code, 
  BarChart, 
  Check, 
  TrendingUp 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';

const DevelopmentProcess = () => {
  const [activeProcess, setActiveProcess] = useState(1);
  const processRef = useRef<HTMLDivElement>(null);
  const processSectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // ✅ Updated processes for software, app, AI, and cloud development
  const processes = [
    {
      id: 1,
      title: "Discovery & Planning",
      description:
        "We begin by understanding your goals, audience, and technical needs. This ensures the product vision is clear and aligned before development starts.",
      steps: [
        "Requirement gathering & user research",
        "Technical feasibility & risk assessment",
        "Defining core features & scope",
        "Creating detailed project roadmap"
      ]
    },
    {
      id: 2,
      title: "Solution Architecture",
      description:
        "We design a scalable, secure, and efficient architecture covering frontend, backend, database, APIs, and cloud infrastructure.",
      steps: [
        "System design & data flow mapping",
        "Frontend & backend architecture planning",
        "API structure & cloud infrastructure design",
        "UX flow validation & functional alignment"
      ]
    },
    {
      id: 3,
      title: "Software Development",
      description:
        "We build responsive web apps, powerful mobile apps, secure APIs, automation flows, and AI-driven functionality using modern technologies.",
      steps: [
        "Frontend & backend coding",
        "API development & integrations",
        "AI/automation logic implementation",
        "Cloud setup & database configuration"
      ]
    },
    {
      id: 4,
      title: "Quality Assurance & Testing",
      description:
        "We ensure everything works seamlessly through rigorous testing across functionality, security, and performance.",
      steps: [
        "Functional & regression testing",
        "Security testing & vulnerability checks",
        "Load & performance testing",
        "Bug fixes & refinement"
      ]
    },
    {
      id: 5,
      title: "Deployment & Support",
      description:
        "We prepare your solution for launch, deploy it to production, and provide continuous support as your product grows.",
      steps: [
        "Production deployment & environment setup",
        "Monitoring & performance optimization",
        "User onboarding & documentation",
        "Continuous updates & feature expansion"
      ]
    }
  ];

  useEffect(() => {
    processSectionsRef.current = processes.map((_, i) => processSectionsRef.current[i] || null);
  }, []);

  // observer for fade in
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        entries[0].target.classList.add('animate-fade-in');
        (entries[0].target as HTMLElement).style.opacity = '1';
        observer.unobserve(entries[0].target);
      }
    }, {
      threshold: 0.1
    });

    if (processRef.current) {
      observer.observe(processRef.current);
    }
    return () => observer.disconnect();
  }, []);

  // scroll sync
  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      const viewportCenter = viewportHeight / 2;

      let closestSection = null;
      let closestDistance = Infinity;

      processSectionsRef.current.forEach((section, index) => {
        if (!section) return;
        const rect = section.getBoundingClientRect();
        const sectionCenter = rect.top + rect.height / 2;
        const distance = Math.abs(sectionCenter - viewportCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestSection = index;
        }
      });

      if (closestSection !== null) {
        setActiveProcess(closestSection + 1);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    setTimeout(handleScroll, 100);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ✅ Updated development steps section
  const developmentSteps = [
    {
      icon: <FileSearch className="h-6 w-6" />,
      title: "1. Discovery & Requirements",
      description:
        "We collaborate to understand your product vision, users, and functionality to set the right foundation."
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "2. UX & Concept Design",
      description:
        "We create user flows, wireframes, and early design concepts to align on the product experience."
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "3. Solution Architecture",
      description:
        "We design a scalable system across frontend, backend, databases, APIs, and cloud services."
    },
    {
      icon: <Cpu className="h-6 w-6" />,
      title: "4. Software Development",
      description:
        "Our team builds fast, secure, and reliable web apps, mobile apps, APIs, cloud systems, and AI features."
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "5. Testing & Iteration",
      description:
        "We perform functional, security, and performance testing to guarantee quality across all devices."
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "6. Launch & Deployment",
      description:
        "We deploy your solution to live environments with monitoring, optimization, and stability checks."
    },
    {
      icon: <BarChart className="h-6 w-6" />,
      title: "7. Continuous Improvement",
      description:
        "We track performance, gather feedback, and roll out improvements and new features continuously."
    }
  ];

  return (
    <PageLayout>
      <SEO 
        title="Development Process - ApexDeploy" 
        description="ApexDeploy’s modern software development methodology — planning, architecture, coding, testing, deployment, and continuous growth."
        imageUrl="/lovable-uploads/ADlogo.png"
        keywords={[
          'development process',
          'software development lifecycle',
          'web app development',
          'mobile app development',
          'AI development'
        ]}
      />

      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">

            <Link to="/" className="flex items-center text-gray-500 hover:text-gray-700 mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>

            <h1 className="text-4xl font-bold mb-8">Our Structured Development Process</h1>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 mb-12">
                Our proven process is designed to reduce risk, speed up development,
                and ensure your digital product launches successfully with long-term scalability.
              </p>

              {/* Process Timeline */}
              <div className="relative mt-12" ref={processRef} style={{ opacity: 0 }}>
                <div className="hidden md:block absolute top-0 left-1/2 w-0.5 h-full bg-gray-200 -translate-x-1/2"></div>

                <div className="space-y-10 relative">
                  {processes.map((process, index) => (
                    <div
                      key={process.id}
                      ref={el => processSectionsRef.current[index] = el}
                      className={cn(
                        "relative flex flex-col md:flex-row md:items-center gap-6",
                        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse text-right"
                      )}
                    >
                      <div className="md:w-1/2">
                        <div
                          className={cn(
                            "md:absolute top-0 left-1/2 md:-translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center z-10 transition-all duration-300",
                            activeProcess === process.id
                              ? "bg-gray-700 text-white scale-110"
                              : "bg-white text-gray-700 border border-gray-300"
                          )}
                          onClick={() => setActiveProcess(process.id)}
                        >
                          <span className="font-bold">{process.id}</span>
                        </div>

                        <h3 className="text-xl font-bold mb-2 mt-3 md:mt-0">{process.title}</h3>
                        <p className="text-gray-600 mb-3 text-sm">{process.description}</p>

                        <button
                          onClick={() => setActiveProcess(process.id)}
                          className={cn(
                            "text-sm font-medium transition-colors",
                            activeProcess === process.id ? "text-gray-700" : "text-gray-500 hover:text-gray-700"
                          )}
                        >
                          {activeProcess === process.id ? "Currently Viewing" : "View Details"}
                        </button>
                      </div>

                      <div
                        className={cn(
                          "md:w-1/2 bg-white rounded-xl p-5 shadow-sm border border-gray-100 transition-all duration-300",
                          activeProcess === process.id
                            ? "opacity-100 translate-y-0 shadow-md border-gray-200"
                            : "opacity-50 md:opacity-30 hover:opacity-70 cursor-pointer"
                        )}
                        onClick={() => setActiveProcess(process.id)}
                      >
                        <h4 className="font-semibold mb-3 text-gray-700">Key Activities:</h4>
                        <ul className="space-y-2">
                          {process.steps.map((step, stepIndex) => (
                            <li key={stepIndex} className="flex items-start">
                              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center mt-0.5 mr-2">
                                <Check className="w-3 h-3 text-gray-700" />
                              </span>
                              <span className="text-gray-700 text-sm text-left">{step}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Development Principles */}
              <div className="bg-gray-50 p-8 rounded-lg my-12 border border-gray-100">
                <h3 className="text-xl font-semibold mb-4">Our Development Principles</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                    <span>Fast iteration cycles for delivering value early</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                    <span>Transparent communication and progress tracking</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                    <span>Modular and scalable architecture for long-term growth</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                    <span>Security and performance baked into every stage</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                    <span>User-first approach with practical, real-world usability</span>
                  </li>
                </ul>
              </div>

            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <Link 
                to="/tech-details" 
                className="inline-flex items-center px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-all group"
              >
                Explore Our Technology
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default DevelopmentProcess;

// ✅ Helper Icon
const ArrowRight = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor"
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);
