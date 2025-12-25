import ProjectPageLayout from '@/components/ProjectPageLayout';
import { Music, Camera, Film, BookOpen, MessageSquare, FlaskConical, Code } from 'lucide-react';

const WorkwearProject = () => {
  return (
    <ProjectPageLayout
      title="Creative Multimedia & Coaching Portfolio"
      subtitle="Showcasing music, photography, filmography, and IELTS expertise"
      imageUrl="/lovable-uploads/sspp.png" // Placeholder image URL
      brandName="Satyajeet Shinde"
    >
      {/* <div className="bg-yellow-50 p-4 rounded-lg mb-6 flex items-center">
        <FlaskConical className="h-5 w-5 text-yellow-600 mr-2 flex-shrink-0" />
        <p className="text-yellow-700 font-medium text-sm">Ongoing Personal Portfolio — Actively Updated</p>
      </div> */}
      
      <h2 className="text-3xl font-bold mb-6">Case Study: Multimedia & Professional Coaching Showcase</h2>
      
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h3 className="text-xl font-semibold mb-2">Background</h3>
        <p>
          Satyajeet Shinde is a versatile creative professional blending music production, photography, and filmography with 
          expert IELTS coaching. He wanted a personal portfolio that not only presents his work elegantly but also encourages 
          potential clients, students, and collaborators to reach out for projects or coaching sessions.
          The goal was to create a platform that is interactive, visually appealing, and easy to navigate, reflecting both his 
          artistic and professional skills.
        </p>
      </div>
      
      <h3 className="text-2xl font-semibold mb-4">Challenge</h3>
      <p>
        Traditional personal websites often focus on one medium — either photography, music, or professional services. 
        Satyajeet needed a solution that could:
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-8 mt-4">
        <li>Highlight multiple creative disciplines under a unified brand</li>
        <li>Provide clear access to samples of music tracks, photography galleries, and short films</li>
        <li>Showcase IELTS coaching expertise with testimonials and course offerings</li>
        <li>Enable direct client/student contact without cluttering the user experience</li>
      </ul>
      
      <h3 className="text-2xl font-semibold mb-4 mt-8">Solution</h3>
      <p>
        We developed a dynamic, multimedia-rich portfolio with multiple interactive modules tailored to Satyajeet’s work:
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Music className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Music Studio</h4>
            <p>Embedded audio tracks for streaming and sharing, categorized playlists, and high-quality audio players.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Camera className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Photography Gallery</h4>
            <p>Responsive photo grid for portfolios (events, portrait, landscapes) with interactive lightbox for full-size viewing.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Film className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Filmography</h4>
            <p>Showcase of short films, music videos, and commercial shoots with embedded video players and project descriptions.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <BookOpen className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">IELTS Coaching Module</h4>
            <p>Overview of courses, teaching methodology, student testimonials, and a contact form for inquiries and booking sessions.</p>
          </div>
        </div>
      </div>
      
      <h4 className="text-xl font-semibold mb-4">Technical Specifications</h4>
      <ul className="list-disc pl-6 space-y-2 mb-8">
        <li>Frontend: HTML5, CSS3, React for smooth UI interactions</li>
        <li>Backend: Lightweight Node.js or Firebase for contact form submissions</li>
        <li>Media Handling: Optimized for fast load times with lazy-loaded images and videos</li>
        <li>Fully responsive across desktop, tablet, and mobile devices</li>
        <li>SEO optimized for discoverability in creative and coaching domains</li>
      </ul>
      
      <h3 className="text-2xl font-semibold mb-4 mt-8">Preliminary Results</h3>
      <p>
        The portfolio is live and actively updated with Satyajeet’s latest work. Early feedback from peers and potential clients indicates:
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-8 mt-4">
        <li>Improved client inquiries for music and film projects</li>
        <li>Increased student interest in IELTS coaching programs</li>
        <li>Better engagement and visibility across social media platforms</li>
      </ul>
      
      <div className="bg-blue-50 p-6 rounded-lg mt-8 flex items-start">
        <MessageSquare className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0 mt-1" />
        <div>
          <h4 className="text-lg font-semibold mb-2 text-gray-700">Ongoing Development</h4>
          <p>
            Current efforts focus on:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Adding new music tracks, photoshoots, and short films regularly</li>
            <li>Enhancing interactive elements like project filters and media carousels</li>
            <li>Integrating direct booking forms for coaching sessions and collaboration requests</li>
            <li>Continuous SEO and performance optimization for higher reach</li>
          </ul>
          <p className='mt-3'>
            This portfolio positions Satyajeet as a multidisciplinary creative professional, making it easier for clients, 
            collaborators, and students to discover, evaluate, and contact him for work.
          </p>
        </div>
      </div>
    </ProjectPageLayout>
  );
};

export default WorkwearProject;