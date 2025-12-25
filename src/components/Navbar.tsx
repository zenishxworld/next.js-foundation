
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { Link, useLocation } from 'react-router-dom';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Use dark header on all non-home pages (white/light backgrounds)
  const isHome = location.pathname === "/";
  const hasDarkText = isScrolled || !isHome;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.nav className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full", hasDarkText ? "bg-white shadow-sm" : "bg-transparent backdrop-blur-none")} initial={{
      opacity: 1,
      y: 0
    }} animate={{
      opacity: 1,
      y: 0
    }}>
      <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/ADlogo.png" 
                alt="ApexDeploy Logo" 
                loading="eager"
                className={cn("h-12 w-auto", hasDarkText ? "" : "brightness-0 invert")} />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavigationMenu className={cn(hasDarkText ? "" : "text-white")}>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                    className={cn(
                      navigationMenuTriggerStyle(),
                      hasDarkText ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800"
                    )}
                  > 
                    <Link to="/">Home</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                    className={cn(
                      navigationMenuTriggerStyle(),
                      hasDarkText ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800"
                    )}
                  > 
                    <Link to="/about">About Us</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={cn(hasDarkText ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800")}> 
                    Customer Cases
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[400px]">
                      <li>
                        <Link to="/projects/auditx" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">AuditX Security</div>
                          <p className="text-sm text-gray-500">AI-Based Web3 Security Suite</p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/projects/elite-construction" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">Smart Construction</div>
                          <p className="text-sm text-gray-500">Modern Web Portal & Digital Transformation
</p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/projects/creative-portfolio" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">Creative Multimedia Portfolio</div>
                          <p className="text-sm text-gray-500">Showcasing music, film, and coaching expertise</p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/projects/trading-bot" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">MT5 Trading Automation</div>
                          <p className="text-sm text-gray-500">Custom bot for forex and futures markets</p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/projects/inventory-billing" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">Inventory & Billing System</div>
                          <p className="text-sm text-gray-500">Smart Automation for Wholesalers</p>
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={cn(hasDarkText ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800")}> 
                    Learn More
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[400px]">
                      <li>
                        <Link to="/tech-details" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">Technology Platform</div>
                          <p className="text-sm text-gray-500">Our core strategy, software, deployment expertise</p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/development-process" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">Development Process</div>
                          <p className="text-sm text-gray-500">Structured methodology from concept to launch</p>
                        </Link>
                      </li>
                      <li>
                        
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                {/* News temporarily disabled */}
                {/*
                <NavigationMenuItem>
                  <Link to="/blog">
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), hasDarkText ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800")}> 
                      News
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                */}
                
                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                    className={cn(
                      navigationMenuTriggerStyle(),
                      hasDarkText ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800"
                    )}
                  >
                    <Link to="/careers">Careers</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <button onClick={() => scrollToSection('contact')} className={cn("px-4 py-2 rounded-md transition-colors", hasDarkText ? "bg-gray-200 text-gray-700 hover:bg-gray-300" : "bg-gray-700 text-white hover:bg-gray-600")}> 
                    Contact Us
                  </button>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className={cn("focus:outline-none", hasDarkText ? "text-gray-700" : "text-white")}> 
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu - Reduced height and simplified */}
      <div className={cn("md:hidden transition-all duration-300 overflow-hidden w-full", isMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0")}>
        <div className={cn("px-3 pt-2 pb-3 space-y-1 shadow-sm overflow-y-auto max-h-80", hasDarkText ? "bg-white" : "bg-black/90 backdrop-blur-sm")}> 
          <Link to="/" className={cn("block px-3 py-1.5 rounded-md text-sm", hasDarkText ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")} onClick={() => {
            setIsMenuOpen(false);
            window.scrollTo(0, 0);
          }}>
            Home
          </Link>
          
          <Link to="/about" className={cn("block px-3 py-1.5 rounded-md text-sm", hasDarkText ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")} onClick={() => {
            setIsMenuOpen(false);
            window.scrollTo(0, 0);
          }}>
            About Us
          </Link>
          
          {/* Simplified Customer Cases - no dropdown */}
          <Link to="/projects/auditx" className={cn("block px-3 py-1.5 rounded-md text-sm", hasDarkText ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")} onClick={() => {
            setIsMenuOpen(false);
            window.scrollTo(0, 0);
          }}>
            Customer Cases
          </Link>
          
          {/* Simplified Learn More - no dropdown */}
          <Link to="/tech-details" className={cn("block px-3 py-1.5 rounded-md text-sm", hasDarkText ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")} onClick={() => {
            setIsMenuOpen(false);
            window.scrollTo(0, 0);
          }}>
            Explore more about Tech Details
          </Link>
          
          {/* News temporarily disabled */}
          
          <Link to="/careers" className={cn("block px-3 py-1.5 rounded-md text-sm", hasDarkText ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")} onClick={() => {
            setIsMenuOpen(false);
            window.scrollTo(0, 0);
          }}>
            Careers
          </Link>
          
          <button onClick={() => scrollToSection('contact')} className={cn("block w-full text-left px-3 py-1.5 rounded-md text-sm", hasDarkText ? "text-gray-700 bg-gray-200 hover:bg-gray-300" : "text-white bg-gray-700 hover:bg-gray-600")}> 
            Contact Us
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
