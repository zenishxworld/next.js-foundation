import { useEffect, useRef, useState } from 'react';
import {
  ArrowRight,
  Code,
  CheckCircle,
  Rocket,
  MessageSquare,
  Zap,
  Box,
  Microchip,
  Handshake,
  Globe,
  Smartphone,
  Bot,
  Palette,
  Cloud,
  ShoppingCart,
} from "lucide-react";
import { cn } from '@/lib/utils';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from "@/components/ui/button";

const Features = () => {
  const featuresRef = useRef<HTMLDivElement>(null);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const [progressValue, setProgressValue] = useState(0);
  const [currentSprint, setCurrentSprint] = useState(1);
  const totalSprints = 3;
  const isMobile = useIsMobile();

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact-info');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  // Animate progress bar on component mount (kept for future use if needed)
  useEffect(() => {
    const timer = setTimeout(() => setProgressValue(100), 100);
    return () => clearTimeout(timer);
  }, []);

  // ======== UPDATED: Services (replaces “Three-Pillar Approach”) ========
  const services = [
    {
      icon: <Globe className="w-6 h-6 text-gray-700" />,
      title: "Web Development",
      description:
        "High-performance websites, dashboards, and SaaS apps with clean architecture, SEO basics, and fast load times.",
    },
    {
      icon: <Smartphone className="w-6 h-6 text-gray-700" />,
      title: "Mobile App Development",
      description:
        "Cross-platform Android & iOS apps (React Native) with smooth UX, offline support, and scalable API integrations.",
    },
    {
      icon: <Bot className="w-6 h-6 text-gray-700" />,
      title: "AI & Automation",
      description:
        "AI chatbots and agents, workflow automation, data enrichment, and smart features that reduce manual work.",
    },
    {
      icon: <Palette className="w-6 h-6 text-gray-700" />,
      title: "UI/UX Design",
      description:
        "Wireframes, prototypes, and design systems that make your product intuitive, beautiful, and conversion-focused.",
    },
    {
      icon: <Cloud className="w-6 h-6 text-gray-700" />,
      title: "Cloud & Backend",
      description:
        "Robust APIs, authentication, databases, caching, and observability — built for security, speed, and scale.",
    },
    {
      icon: <ShoppingCart className="w-6 h-6 text-gray-700" />,
      title: "eCommerce Development",
      description:
        "Custom stores, payment flows, product catalogs, and analytics with reliable integrations and order workflows.",
    },
  ];

  return (
    <>
      {/* ===================== What We Do (Hero intro for section) ===================== */}
      <section id="features" className="py-16 md:py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-2 px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">
              What We Do
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Digital Product Development — End to End
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We turn business ideas into high-quality <span className="font-semibold">websites, apps, and AI-powered software</span>.
              From strategy and design to engineering and launch — ApexDeploy ships products that grow with your business.
            </p>
          </div>

          {/* Services Grid (6) */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold mb-4">Our Core Services</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                A focused set of capabilities to plan, design, build, and scale your product. Clear ownership, fast delivery, real results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((svc, index) => (
                <div key={index} className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                  <div className="w-12 h-12 bg-gray-200 flex items-center justify-center rounded-lg mx-auto mb-4">
                    {svc.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{svc.title}</h3>
                  <p className="text-gray-600 text-sm">{svc.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================== Process ===================== */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-2 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
              How We Work
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              From Concept to Commercial Success
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our proven 5-phase methodology ships your product faster than traditional approaches — with clarity, quality, and momentum at every step.
            </p>
          </div>

          {isMobile ? (
            <Carousel className="w-full max-w-sm mx-auto">
              <CarouselContent>
                {[
                  {
                    phase: "01",
                    title: "Discovery & Strategy",
                    description:
                      "Goals, audience, and success metrics. Technical feasibility, scope, and a roadmap that de-risks execution.",
                    icon: <MessageSquare className="h-8 w-8 text-white" />,
                  },
                  {
                    phase: "02",
                    title: "Design & Prototyping",
                    description:
                      "Wireframes and clickable prototypes to validate UX early — saving cost and time before development.",
                    icon: <Code className="h-8 w-8 text-white" />,
                  },
                  {
                    phase: "03",
                    title: "Development & Integration",
                    description:
                      "Full-stack engineering with clean code, API design, and third-party integrations that just work.",
                    icon: <Zap className="h-8 w-8 text-white" />,
                  },
                  {
                    phase: "04",
                    title: "Quality & Security",
                    description:
                      "Automated tests, accessibility checks, performance budgets, and security best practices baked in.",
                    icon: <CheckCircle className="h-8 w-8 text-white" />,
                  },
                  {
                    phase: "05",
                    title: "Launch & Scale",
                    description:
                      "Cloud deploys, monitoring, and iteration. We measure, learn, and keep improving post-launch.",
                    icon: <Rocket className="h-8 w-8 text-white" />,
                  },
                ].map((step, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Card className="h-80">
                        <CardContent className="flex flex-col items-center justify-center p-6 h-full text-center">
                          <div className="bg-gray-700 rounded-full p-4 mb-4">
                            {step.icon}
                          </div>
                          <div className="text-2xl font-bold text-gray-400 mb-2">{step.phase}</div>
                          <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                          <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {[
                {
                  phase: "01",
                  title: "Discovery & Strategy",
                  description:
                    "Goals, audience, and success metrics. Technical feasibility, scope, and a roadmap that de-risks execution.",
                  icon: <MessageSquare className="h-8 w-8 text-white" />,
                },
                {
                  phase: "02",
                  title: "Design & Prototyping",
                  description:
                    "Wireframes and clickable prototypes to validate UX early — saving cost and time before development.",
                  icon: <Code className="h-8 w-8 text-white" />,
                },
                {
                  phase: "03",
                  title: "Development & Integration",
                  description:
                    "Full-stack engineering with clean code, API design, and third-party integrations that just work.",
                  icon: <Zap className="h-8 w-8 text-white" />,
                },
                {
                  phase: "04",
                  title: "Quality & Security",
                  description:
                    "Automated tests, accessibility checks, performance budgets, and security best practices baked in.",
                  icon: <CheckCircle className="h-8 w-8 text-white" />,
                },
                {
                  phase: "05",
                  title: "Launch & Scale",
                  description:
                    "Cloud deploys, monitoring, and iteration. We measure, learn, and keep improving post-launch.",
                  icon: <Rocket className="h-8 w-8 text-white" />,
                },
              ].map((step, index) => (
                <div key={index} className="text-center relative">
                  <div className="bg-gray-700 rounded-full p-4 mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                    {step.icon}
                  </div>
                  <div className="text-2xl font-bold text-gray-400 mb-2">{step.phase}</div>
                  <h3 className="text-lg font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>

                  {index < 4 && (
                    <ArrowRight className="hidden md:block absolute top-8 -right-4 w-6 h-6 text-gray-300" />
                  )}
                </div>
              ))}
            </div>
          )}

          <div className="text-center mt-12">
            <Button
              onClick={scrollToContact}
              className="bg-gray-700 text-white hover:bg-gray-800 px-8 py-3 text-lg"
            >
              Start Your Project Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* ===================== Technology / Approach ===================== */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-2 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
              Our Technology
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Modular Building Blocks for Rapid Delivery
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We combine reusable components with custom engineering to deliver faster — without compromising on quality or flexibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 h-full">
              <div className="flex flex-col items-center text-center">
                <div className="bg-gray-50 rounded-full p-4 mb-4">
                  <Box className="h-10 w-10 text-gray-700" />
                </div>
                <h3 className="text-lg font-bold mb-2">Reusable Components</h3>
                <p className="text-sm text-gray-600">
                  Pre-tested UI kits, auth flows, and code libraries that speed up delivery and reduce bugs.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 h-full">
              <div className="flex flex-col items-center text-center">
                <div className="bg-gray-50 rounded-full p-4 mb-4">
                  <Microchip className="h-10 w-10 text-gray-700" />
                </div>
                <h3 className="text-lg font-bold mb-2">Trusted Integrations</h3>
                <p className="text-sm text-gray-600">
                  Payments, analytics, notifications, auth, and AI providers integrated cleanly into your stack.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 h-full">
              <div className="flex flex-col items-center text-center">
                <div className="bg-gray-50 rounded-full p-4 mb-4">
                  <Handshake className="h-10 w-10 text-gray-700" />
                </div>
                <h3 className="text-lg font-bold mb-2">Launch & Growth Support</h3>
                <p className="text-sm text-gray-600">
                  Cloud deploys, CI/CD, monitoring, and performance tuning to keep your product fast and stable.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="inline-block mb-4 px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
              Built Faster. Built Right.
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our approach cuts typical timelines by up to <span className="font-semibold">60%</span> while keeping maintainability, security, and quality front and center.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
