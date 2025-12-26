import { ArrowRight, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from 'emailjs-com';
import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY, EMAILJS_EVENT_ID } from "@/config/emailjs";
import { motion } from "framer-motion";

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
      const templateParams = {
        from_name: "Website Project Inquiry",
        from_email: email,
        to_email: "zenish5712a@gmail.com",
        message: `Sender Email: ${email}\n\nMessage:\n${message}`,
        user_email: email,
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
      });
      
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Error sending inquiry:", error);
      toast({
        title: "Error",
        description: "There was a problem sending your inquiry. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer id="contact" className="bg-card border-t border-border pt-24 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* CTA Section */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground mb-6">
            Let's work together
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
            Ready to bring your vision to life? We'd love to hear from you.
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div 
          className="max-w-xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <form onSubmit={handleSubscribe} className="space-y-4">
            <div>
              <input 
                type="email" 
                placeholder="Your work email" 
                className="w-full px-6 py-4 bg-secondary border border-border rounded-xl text-foreground 
                           placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-muted
                           transition-all duration-300"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubmitting}
              />
            </div>
            <div>
              <textarea
                placeholder="Tell us about your project..."
                className="w-full px-6 py-4 bg-secondary border border-border rounded-xl text-foreground 
                           placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-muted
                           transition-all duration-300 min-h-[140px] resize-none"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                disabled={isSubmitting}
              />
            </div>
            <button 
              type="submit" 
              className="w-full px-6 py-4 bg-foreground text-background rounded-xl font-medium
                         hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2
                         disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : (
                <>
                  Let's Talk
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </motion.div>

        {/* Footer Bottom */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <img 
                src="/lovable-uploads/ADlogo.png" 
                alt="ApexDeploy" 
                className="h-8 w-auto brightness-0 invert"
              />
              <span className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} ApexDeploy. All rights reserved.
              </span>
            </div>
            
            <div className="flex items-center gap-6">
              <Link 
                to="/privacy-policy" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacy Policy
              </Link>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
