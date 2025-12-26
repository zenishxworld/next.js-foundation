
import PageLayout from '@/components/PageLayout';
import Hero from '@/components/Hero';
import LogoMarquee from '@/components/LogoMarquee';
import Features from '@/components/Features';
import Projects from '@/components/Projects';
import WhyWrlds from '@/components/WhyWrlds';
import SEO from '@/components/SEO';
import { useEffect } from 'react';
import FloatingLinkedinButton from '@/components/FloatingLinkedinButton';

const Index = () => {
  useEffect(() => {
    const contactElements = document.querySelectorAll('[id="contact"]');
    if (contactElements.length > 1) {
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
      <LogoMarquee />
      <Features />
      <WhyWrlds />
      <Projects />
      <FloatingLinkedinButton />
    </PageLayout>
  );
};

export default Index;
