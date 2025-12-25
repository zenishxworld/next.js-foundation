import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  type?: string;
  name?: string;
  imageUrl?: string;
  publishDate?: string;
  modifiedDate?: string;
  author?: string;
  category?: string;
  keywords?: string[];
  isBlogPost?: boolean;
}

const SEO: React.FC<SEOProps> = ({
  // ✅ Updated Defaults
  title = 'ApexDeploy — Web, App & AI Development Agency',
  description = 'ApexDeploy helps businesses build modern websites, mobile apps, and AI-powered solutions. From product strategy and UI/UX to full-stack development and cloud deployment — we deliver end-to-end digital products.',
  type = 'website',
  name = 'ApexDeploy',
  imageUrl = '/lovable-uploads/ADlogo.png',
  publishDate,
  modifiedDate,
  author,
  category,

  // ✅ Updated keyword set to match your services
  keywords = [
    'web development',
    'mobile app development',
    'AI solutions',
    'AI automation',
    'SaaS development',
    'UI/UX design',
    'cloud backend',
    'product strategy',
    'full-stack development',
    'React development',
    'Node.js development'
  ],

  isBlogPost = false
}) => {
  const location = useLocation();

  const currentUrl = `https://apexdeploy.in${location.pathname}`;
  const absoluteImageUrl = imageUrl.startsWith('http')
    ? imageUrl
    : `https://apexdeploy.in${imageUrl}`;

  // ✅ Organization Schema
  const organizationStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ApexDeploy',
    url: 'https://apexdeploy.in',
    logo: 'https://apexdeploy.in/lovable-uploads/ADlogo.png',
    description:
      'ApexDeploy is a digital product agency specializing in websites, mobile apps, and AI solutions.',
    sameAs: [
      'https://www.linkedin.com/company/apexdeploy',
      'https://twitter.com/apexdeploy'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      email: 'hello@apexdeploy.in'
    }
  };

  // ✅ Blog Schema (only when needed)
  const blogPostStructuredData =
    isBlogPost && publishDate
      ? {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': currentUrl
          },
          headline: title,
          image: absoluteImageUrl,
          datePublished: publishDate,
          dateModified: modifiedDate || publishDate,
          author: {
            '@type': 'Organization',
            name: author || 'ApexDeploy'
          },
          publisher: {
            '@type': 'Organization',
            name: 'ApexDeploy',
            logo: {
              '@type': 'ImageObject',
              url: 'https://apexdeploy.in/lovable-uploads/ADlogo.png'
            }
          },
          description,
          keywords: keywords.join(', '),
          articleSection: category,
          inLanguage: 'en-US',
          isAccessibleForFree: true
        }
      : null;

  const keywordString = category
    ? [...keywords, category.toLowerCase()].join(', ')
    : keywords.join(', ');

  return (
    <Helmet>
      {/* ✅ Page Title */}
      <title>{title}</title>

      {/* ✅ Primary Meta Tags */}
      <meta name="description" content={description} />
      <meta name="keywords" content={keywordString} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={currentUrl} />

      {/* ✅ OpenGraph Meta (Facebook / LinkedIn / Slack) */}
      <meta property="og:type" content={isBlogPost ? 'article' : type} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={absoluteImageUrl} />
      <meta property="og:site_name" content="ApexDeploy" />
      <meta property="og:locale" content="en_US" />

      {isBlogPost && publishDate && (
        <meta property="article:published_time" content={publishDate} />
      )}
      {isBlogPost && modifiedDate && (
        <meta property="article:modified_time" content={modifiedDate} />
      )}
      {isBlogPost && category && (
        <meta property="article:section" content={category} />
      )}

      {/* ✅ Twitter Meta */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteImageUrl} />
      <meta name="twitter:site" content="@apexdeploy" />
      <meta name="twitter:creator" content="@apexdeploy" />

      {/* ✅ Structured Data (Organization) */}
      <script type="application/ld+json">
        {JSON.stringify(organizationStructuredData)}
      </script>

      {/* ✅ Blog Structured Data (Only For Posts) */}
      {blogPostStructuredData && (
        <script type="application/ld+json">
          {JSON.stringify(blogPostStructuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
