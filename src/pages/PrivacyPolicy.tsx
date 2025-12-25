import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageLayout>
      <SEO 
        title="Privacy Policy - ApexDeploy" 
        description="ApexDeploy’s Privacy Policy explains how we collect, use, protect, and handle your personal information while using our website and services."
        imageUrl="/lovable-uploads/ADlogo.png"
        keywords={[
          'privacy policy',
          'data protection',
          'user data',
          'cookies policy',
          'terms',
          'ApexDeploy privacy'
        ]}
      />

      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">

            {/* Back Button */}
            <Link 
              to="/" 
              className="inline-flex items-center text-gray-500 hover:text-gray-700 mb-6 transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>

            {/* Title */}
            <h1 className="text-4xl font-bold mb-3">Privacy Policy</h1>

            <p className="text-sm text-gray-600 mb-6">
              Last updated: October 9, 2025
            </p>

            <div className="mb-6 rounded-lg border bg-gray-50 p-3 text-sm text-gray-700">
              Registered MSME under Govt. of India — <strong>UDYAM-GJ-24-0208150</strong>
            </div>

            <div className="prose prose-lg max-w-none">

              {/* 1. Introduction */}
              <h2 className="text-2xl font-semibold mt-8 mb-3">1. Introduction</h2>
              <p className="text-gray-600 mb-4">
                ApexDeploy (“we”, “our”, “us”) is committed to safeguarding your personal information. 
                This Privacy Policy describes how we collect, use, store, protect, and share data when you 
                interact with our website, services, products, or communication channels.
              </p>

              {/* 2. Information We Collect */}
              <h2 className="text-2xl font-semibold mt-8 mb-3">2. Information We Collect</h2>
              <p className="text-gray-600 mb-4">We may collect information that you voluntarily provide, including:</p>

              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Name and email address</li>
                <li>Phone number or company name (if applicable)</li>
                <li>Messages you send through contact or application forms</li>
                <li>Internship or job-related information submitted during applications</li>
              </ul>

              <p className="text-gray-600 mb-4">
                Additionally, we may automatically collect certain technical information such as:
              </p>

              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>IP address, browser type, and operating system</li>
                <li>Pages visited, time spent, and usage patterns</li>
                <li>Device identifiers and analytics data</li>
              </ul>

              {/* 3. How We Use Your Information */}
              <h2 className="text-2xl font-semibold mt-8 mb-3">3. How We Use Your Information</h2>
              <p className="text-gray-600 mb-4">We use your information to:</p>

              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Provide, improve, and personalise our website and services</li>
                <li>Respond to inquiries, support requests, or application submissions</li>
                <li>Process internship or job applications</li>
                <li>Send updates, announcements, or relevant communication</li>
                <li>Monitor usage patterns for analytics and performance improvement</li>
                <li>Enhance security and prevent fraudulent activity</li>
              </ul>

              {/* 4. Cookies and Tracking */}
              <h2 className="text-2xl font-semibold mt-8 mb-3">4. Cookies & Tracking Technologies</h2>
              <p className="text-gray-600 mb-4">
                We use cookies and similar technologies to enhance user experience, track website performance, 
                and understand user behavior. Cookies may store anonymous identifiers.
              </p>

              <p className="text-gray-600 mb-4">
                You may choose to disable cookies in your browser settings; however, some website features 
                may not function correctly without them.
              </p>

              {/* 5. Third-Party Services */}
              <h2 className="text-2xl font-semibold mt-8 mb-3">5. Third-Party Services</h2>
              <p className="text-gray-600 mb-4">
                We may use trusted third-party services for analytics, form processing, hosting, or communication. 
                These services may collect data necessary for their functionality and adhere to their own privacy policies.
              </p>

              {/* 6. Data Retention */}
              <h2 className="text-2xl font-semibold mt-8 mb-3">6. Data Retention</h2>
              <p className="text-gray-600 mb-4">
                We retain your data only for as long as required to fulfill the purposes stated in this Privacy Policy, 
                or as required by law or legitimate business purposes.
              </p>

              {/* 7. Security */}
              <h2 className="text-2xl font-semibold mt-8 mb-3">7. Data Security</h2>
              <p className="text-gray-600 mb-4">
                We implement reasonable security measures to protect your personal data. 
                However, no method of transmission or electronic storage is completely secure. 
                While we strive to safeguard your information, we cannot guarantee absolute security.
              </p>

              {/* 8. Your Rights */}
              <h2 className="text-2xl font-semibold mt-8 mb-3">8. Your Rights</h2>
              <p className="text-gray-600 mb-4">Depending on your region, you may have the right to:</p>

              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Request access to the personal data we hold</li>
                <li>Request correction or deletion of your data</li>
                <li>Object to or restrict data processing</li>
                <li>Withdraw consent wherever applicable</li>
              </ul>

              <p className="text-gray-600 mb-4">
                To request any of the above, contact us at <strong>ceo.apexdeploy@gmail.com</strong>.
              </p>

              {/* 9. Policy Updates */}
              <h2 className="text-2xl font-semibold mt-8 mb-3">9. Changes to This Privacy Policy</h2>
              <p className="text-gray-600 mb-4">
                We may update this Privacy Policy occasionally. Any updates will be posted on this page, and 
                continued use of our services will signify your acceptance of the revised policy.
              </p>

              {/* 10. Contact */}
              <h2 className="text-2xl font-semibold mt-8 mb-3">10. Contact Us</h2>
              <p className="text-gray-600 mb-4">
                For any questions, concerns, or requests related to this Privacy Policy, 
                email us at <strong>hello@apexdeploy.com</strong>.
              </p>

            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default PrivacyPolicy;
