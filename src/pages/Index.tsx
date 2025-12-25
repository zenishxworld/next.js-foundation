
import PageLayout from '@/components/PageLayout';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Projects from '@/components/Projects';
import WhyWrlds from '@/components/WhyWrlds';
// import BlogPreview from '@/components/BlogPreview';
import SEO from '@/components/SEO';
import { useEffect } from 'react';
import FloatingLinkedinButton from '@/components/FloatingLinkedinButton';

const Index = () => {
  // Fix any ID conflicts when the page loads
  useEffect(() => {
    const contactElements = document.querySelectorAll('[id="contact"]');
    if (contactElements.length > 1) {
      // If there are multiple elements with id="contact", rename one
      contactElements[1].id = 'contact-footer';
    }
  }, []);

  return (
    <PageLayout>
      <SEO 
        title="ApexDeploy - End-to-End Digital Solution Partner" 
        description="ApexDeploy: 7+ years transforming product visions into market-ready digital solutions. Strategy, software, AI, and deployment expertise."
        imageUrl="/lovable-uploads/ADlogo.png"
        keywords={[
          'software development',
          'digital strategy',
          'cloud solutions',
          'UI/UX design',
          'project management',
          'deployment services'
        ]}
      />
      <Hero />
      <Features />
      <WhyWrlds />
      <Projects />
      {/* <BlogPreview /> */}
      <FloatingLinkedinButton />
    </PageLayout>
  );
};

export default Index;
