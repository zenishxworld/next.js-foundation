
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import FireCatProject from "./pages/FireCatProject";
import SportRetailProject from "./pages/SportRetailProject";
import WorkwearProject from "./pages/WorkwearProject";
import HockeyProject from "./pages/HockeyProject";
import PetProject from "./pages/PetProject";
import TechDetails from "./pages/TechDetails";
import DevelopmentProcess from "./pages/DevelopmentProcess";
import About from "./pages/About";
import Careers from "./pages/Careers";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import SplashLoader from "./components/SplashLoader";
import Internship from "./pages/Internship";
// import Blog from "./pages/Blog";
// import BlogPostDetail from "./pages/BlogPostDetail";

const App = () => {
  const [queryClient] = useState(() => new QueryClient());
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShowSplash(false), 1400); // ~1.4s aesthetic splash
    return () => clearTimeout(t);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <SplashLoader visible={showSplash} />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/projects/auditx" element={<FireCatProject />} />
            <Route path="/projects/elite-construction" element={<SportRetailProject />} />
            <Route path="/projects/creative-portfolio" element={<WorkwearProject />} />
            <Route path="/projects/trading-bot" element={<HockeyProject />} />
            <Route path="/projects/inventory-billing" element={<PetProject />} />
            <Route path="/tech-details" element={<TechDetails />} />
            <Route path="/development-process" element={<DevelopmentProcess />} />
            <Route path="/about" element={<About />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/internship" element={<Internship />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            {/* <Route path="/blog" element={<Blog />} /> */}
            {/* <Route path="/blog/:slug" element={<BlogPostDetail />} /> */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
