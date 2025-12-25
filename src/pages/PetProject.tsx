import ProjectPageLayout from '@/components/ProjectPageLayout';
import { Truck, Warehouse, FileText, LayoutDashboard, Database, FlaskConical, Users, DollarSign } from 'lucide-react';

const PetProject = () => {
  return (
    <ProjectPageLayout
      title="Inventory & Billing Dashboard"
      subtitle="Smart automation for local wholesale and distribution businesses"
      imageUrl="/lovable-uploads/d5ce901e-2ce0-4f2a-bce1-f0ca5d6192df.png" // Placeholder image URL
      brandName="Local Wholesale Business" // Updated Brand Name
    >
      <div className="bg-green-50 p-4 rounded-lg mb-6 flex items-center">
        <FlaskConical className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
        <p className="text-green-700 font-medium text-sm">Completed Prototype Project</p>
      </div>
      
      <h2 className="text-3xl font-bold mb-6">Case Study: Intelligent Billing System for Small Wholesalers</h2>
      
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h3 className="text-xl font-semibold mb-2">Background</h3>
        <p>
          A local wholesale business approached us with a clear challenge: their entire sales and billing process was 
          manual, relying heavily on paper records and Excel sheets. This led to delays, frequent errors, and a lack 
          of real-time tracking for stock or orders.
          They wanted to modernize their system by implementing a simple yet powerful billing and inventory management 
          app tailored to their business model — without the complexity or cost of traditional ERP systems.
        </p>
      </div>
      
      <h3 className="text-2xl font-semibold mb-4">Challenge</h3>
      <p>
        Most small businesses in semi-urban areas lack access to tech solutions designed for their scale. Off-the-shelf 
        billing software was either too expensive or overloaded with unnecessary features. The client needed:
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-8 mt-4">
        <li>A fast and easy system to generate bills</li>
        <li>Real-time stock tracking with low-stock alerts</li>
        <li>A way to record customer data and payment history</li>
        <li>Offline-friendly, with simple deployment on local machines or mobile</li>
      </ul>
      
      <h3 className="text-2xl font-semibold mb-4 mt-8">Solution</h3>
      <p>
        We designed and developed a lightweight, modular web app that streamlines inventory, billing, and customer 
        management for wholesalers.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Warehouse className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Smart Inventory Management</h4>
            <p>Track incoming and outgoing stock with live quantity updates, product categories, and expiry date support.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <FileText className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Bill Generation Module</h4>
            <p>Instant invoice creation with GST support, printable PDFs, and automatic inventory adjustment after each sale.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <LayoutDashboard className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Sales & Payment Dashboard</h4>
            <p>Visual overview of monthly sales, pending payments, and top-selling items.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Users className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Customer Record System</h4>
            <p>Save customer names, contact details, and track their order/payment history for loyalty and follow-ups.</p>
          </div>
        </div>
      </div>
      
      <h4 className="text-xl font-semibold mb-4">Technical Specifications</h4>
      <ul className="list-disc pl-6 space-y-2 mb-8">
        <li>Built using React and Firebase for fast performance and real-time sync</li>
        <li>Responsive design for desktop, tablet, and mobile</li>
        <li>Works offline with local caching and syncs when online</li>
        <li>Printable receipts in both A4 and POS formats</li>
        <li>Admin-only settings panel for secure product updates and pricing control</li>
      </ul>
      
      <h3 className="text-2xl font-semibold mb-4 mt-8">Benefits for Business Owner</h3>
      <div className="space-y-6 mb-8">
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-black mr-3 mt-1">✓</div>
          <div>
            <h4 className="font-semibold">Faster Billing</h4>
            <p>Reduced checkout time by 50%, enabling more transactions during peak hours.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-black mr-3 mt-1">✓</div>
          <div>
            <h4 className="font-semibold">Stock Accuracy</h4>
            <p>Live tracking of over 500 SKUs helped avoid overstock and stockouts.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-black mr-3 mt-1">✓</div>
          <div>
            <h4 className="font-semibold">Data Security</h4>
            <p>All data backed up securely, avoiding paper loss or Excel file corruption.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-black mr-3 mt-1">✓</div>
          <div>
            <h4 className="font-semibold">Smart Insights</h4>
            <p>Daily and monthly reports helped the owner plan purchases and promotions more efficiently.</p>
          </div>
        </div>
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-black mr-3 mt-1">✓</div>
          <div>
            <h4 className="font-semibold">Zero Learning Curve</h4>
            <p>Simple UI designed for non-technical staff and shop helpers.</p>
          </div>
        </div>
      </div>
      
      <h3 className="text-2xl font-semibold mb-4 mt-8">Outcome</h3>
      <p>
        The MVP version of the system is now actively used by the client and is in its pilot testing phase. Business 
        operations have become smoother, and the owner reports fewer billing errors and faster counter processing.
        We're currently working on feature expansions based on early feedback — including barcode scanning, 
        multi-user login, and supplier-wise analytics.
      </p>
      
      <div className="bg-blue-50 p-6 rounded-lg mt-8 flex items-start">
        <DollarSign className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0 mt-1" />
        <div>
          <h4 className="text-lg font-semibold mb-2 text-gray-700">Industry Potential</h4>
          <p>
            This system shows how tailored tech solutions can bring enterprise-level automation to small businesses, 
            making daily operations more efficient and transparent. With minor customizations, this system can scale 
            across multiple wholesale sectors like medical stores, general retailers, and FMCG distributors — offering 
            a low-cost ERP alternative built for Bharat.
          </p>
        </div>
      </div>
    </ProjectPageLayout>
  );
};

export default PetProject;