
import { ArrowRight, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from 'emailjs-com';
import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY, EMAILJS_EVENT_ID } from "@/config/emailjs";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !message.trim()) {
      toast({
        title: "Error",
        description: !email ? "Please enter your work email." : "Please add a short message about your project.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Using provided EmailJS IDs from central config
      const templateParams = {
        from_name: "Website Project Inquiry",
        from_email: email,
        // Optional: if your template expects a recipient email variable
        to_email: "zenish5712a@gmail.com",
        // Ensure templates that render only {{message}} also show sender details
        message: `Sender Email: ${email}\n\nMessage:\n${message}`,
        // Provide a generic user_email field for templates expecting this name
        user_email: email,
        // Optional: include event ID for tracking/template
        event_id: EMAILJS_EVENT_ID,
        reply_to: email
      };
      
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );
      
      toast({
        title: "Inquiry sent!",
        description: "Thanks for reaching out — we'll get back to you shortly.",
        variant: "default"
      });
      
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Error sending inquiry:", error);
      
      toast({
        title: "Error",
        description: "There was a problem sending your project inquiry. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer id="contact" className="bg-black text-white pt-16 pb-8 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 pb-10 border-b border-gray-700">
          <div className="lg:col-span-2">
            <img 
              src="/lovable-uploads/ADlogo.png" 
              alt="ApexDeploy Logo" 
              loading="lazy"
              className="h-12 w-auto mb-6 invert"
            />
            <p className="text-gray-300 mb-6">
              We don’t just build products — we build outcomes. ApexDeploy turns ambitious ideas into scalable, market-ready digital solutions through strategy, software, and AI precision.            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Start Your Project</h3>
            <form className="space-y-4" onSubmit={handleSubscribe}>
              <div>
                <input 
                  type="email" 
                  placeholder="Your work email" 
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600 text-white placeholder-gray-400"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <textarea
                  placeholder="Tell us about your project or inquiry..."
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600 text-white placeholder-gray-400 min-h-[110px] resize-y"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  disabled={isSubmitting}
                />
              </div>
              <button 
                type="submit" 
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : (
                  <>
                    Let's Talk
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} ApexDeploy. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
