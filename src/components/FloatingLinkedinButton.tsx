import { Linkedin } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const FloatingLinkedinButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openLinkedin = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open("https://www.linkedin.com/company/apexdeploy", "_blank", "noopener,noreferrer");
  };

  if (!isVisible) return null;

  return (
    <Button
      onClick={openLinkedin}
      className="fixed bottom-6 left-6 z-50 bg-gray-800 hover:bg-gray-700 text-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all"
      size="icon"
      aria-label="Visit ApexDeploy on LinkedIn"
    >
      <Linkedin className="h-6 w-6" />
    </Button>
  );
};

export default FloatingLinkedinButton;