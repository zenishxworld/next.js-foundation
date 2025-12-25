import ProjectPageLayout from '@/components/ProjectPageLayout';
import SEO from '@/components/SEO';
import { Footprints, Zap, LineChart, Award, Sparkles, FlaskConical, Hammer, GalleryHorizontal, Mail, Settings } from 'lucide-react';

const SportRetailProject = () => {
  return (
    <ProjectPageLayout
      title="Smart Construction Web Portal"
      subtitle="Digital transformation for a local construction company"
      imageUrl="/lovable-uploads/smart-construction-cover.jpg" // Placeholder image URL
      brandName="Local Construction Company" // Updated Brand Name
    >
      <SEO 
        title="Smart Construction Web Portal - Website Modernization" 
        description="Full website modernization for a local construction firm, featuring a responsive design, dynamic project gallery, and CMS-ready backend."
        type="article"
      />
      
      <div className="bg-yellow-50 p-4 rounded-lg mb-6 flex items-center">
        <FlaskConical className="h-5 w-5 text-yellow-600 mr-2 flex-shrink-0" />
        <p className="text-yellow-700 font-medium text-sm">Ongoing Client Project — Currently in Final Integration Phase</p>
      </div>
      
      <h2 className="text-3xl font-bold mb-6">Case Study: Website Modernization for Real Estate & Construction Firm</h2>
      
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h3 className="text-xl font-semibold mb-2">Background</h3>
        <p>
          A local construction company approached our freelance team with a request to modernize their outdated website 
          originally built using legacy PHP. The goal was to create a responsive and easy-to-maintain website that 
          better represented their expanding portfolio of residential and commercial construction projects.
          They also wanted to enable clients to view recent site updates, download brochures, and inquire about 
          services — all from a clean and fast website interface.
        </p>
      </div>
      
      <h3 className="text-2xl font-semibold mb-4">Challenge</h3>
      <p>
        The previous website was built over 10 years ago using old PHP frameworks with no mobile optimization and 
        limited content management options. It lacked visual appeal, SEO optimization, and was difficult for the client 
        to update. The company needed a new platform that could:
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-8 mt-4">
        <li>Reflect their modern construction capabilities</li>
        <li>Be fast-loading and mobile-friendly</li>
        <li>Easily update project photos and service information without coding</li>
      </ul>
      
      <h3 className="text-2xl font-semibold mb-4 mt-8">Solution</h3>
      <p>
        We proposed a full redesign using modern frontend tools and a lightweight backend structure, enabling the client 
        to independently manage content and showcase their work.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Hammer className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" /> {/* Using Hammer for construction/redesign */}
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Frontend Redesign</h4>
            <p>A fully responsive UI built using HTML5, CSS3, and JavaScript, with a mobile-first approach and optimized image handling.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <GalleryHorizontal className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" /> {/* Using GalleryHorizontal for gallery */}
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Modular Project Gallery</h4>
            <p>Dynamic project listing with filtering options for residential, commercial, and upcoming projects. Users can explore each project via dedicated detail pages.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Mail className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" /> {/* Using Mail for contact system */}
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Inquiry & Contact System</h4>
            <p>Integrated form submissions with backend notifications, making it easier for potential clients to request quotes or contact the company.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Settings className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" /> {/* Using Settings for CMS-Ready Backend */}
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">CMS-Ready Backend</h4>
            <p>Built-in support for integrating a CMS or admin dashboard to allow the client to upload new projects or images in the future.</p>
          </div>
        </div>
      </div>
      
      <h4 className="text-xl font-semibold mb-4">Key Features</h4>
      <ul className="list-disc pl-6 space-y-2 mb-8">
        <li>SEO-optimized structure for better local search ranking</li>
        <li>Fully mobile responsive across all modern devices</li>
        <li>Clean layout to match the brand’s professional image</li>
        <li>Lazy-loaded project images for faster load speed</li>
        <li>Optimized file structure for easy future scaling</li>
      </ul>
      
      <h3 className="text-2xl font-semibold mb-4 mt-8">Preliminary Results</h3>
      <p>
        Initial testing and client reviews have been positive. The new layout reflects the company’s credibility and 
        scale while offering a better user experience across devices. The shift from a static PHP site to a responsive, 
        modular design enables easier maintenance and better client engagement. A noticeable increase in inquiry form 
        submissions has been reported during pre-launch testing.
      </p>
      
      <div className="bg-blue-50 p-6 rounded-lg mt-8 flex items-start">
        <Sparkles className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0 mt-1" />
        <div>
          <h4 className="text-lg font-semibold mb-2 text-gray-700">Development Roadmap</h4>
          <p>
            The project is in its final stage with full deployment and admin training scheduled soon. Future updates 
            will include CMS integration, a testimonials section, and multi-language support to reach a wider audience. 
            This transformation marks a strong digital leap forward for a traditional construction company, setting the 
            stage for more online visibility and client interaction.
          </p>
        </div>
      </div>
    </ProjectPageLayout>
  );
};

export default SportRetailProject;