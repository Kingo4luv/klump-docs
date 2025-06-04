import Head from 'next/head';
import { useRouter } from 'next/router';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  siteName?: string;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
}

const DEFAULT_SEO = {
  title: 'Klump Documentation',
  description: 'Complete documentation for integrating Klump payment solutions. Learn how to implement buy now, pay later functionality for your e-commerce platform.',
  image: '/img/Preview.png',
  siteName: 'Klump Documentation',
  type: 'website' as const,
  author: 'Klump Team',
};

export default function SEOHead({
  title = DEFAULT_SEO.title,
  description = DEFAULT_SEO.description,
  image = DEFAULT_SEO.image,
  url,
  type = DEFAULT_SEO.type,
  siteName = DEFAULT_SEO.siteName,
  publishedTime,
  modifiedTime,
  author = DEFAULT_SEO.author,
  section,
  tags = [],
}: SEOProps) {
  const router = useRouter();
  
  // Get base URL from environment variable or fallback to current origin
  const getBaseUrl = () => {
    // Use environment variable if available
    if (process.env.NEXT_PUBLIC_BASE_URL) {
      return process.env.NEXT_PUBLIC_BASE_URL;
    }
    
    // Fallback to window.location on client-side
    if (typeof window !== 'undefined') {
      return window.location.origin;
    }
    
    // Final fallback for SSR
    return 'https://docs.useklump.com';
  };
  
  const baseUrl = getBaseUrl();
  const currentUrl = url || `${baseUrl}${router.asPath}`;
  
  // Ensure image is absolute URL using current environment
  const imageUrl = image.startsWith('http') ? image : `${baseUrl}${image}`;
  
  // Create comprehensive title
  const fullTitle = title === DEFAULT_SEO.title ? title : `${title} | ${DEFAULT_SEO.siteName}`;

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="referrer" content="strict-origin" />
      <link rel="canonical" href={currentUrl} />
      
      {/* Favicons */}
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="icon" href="/favicon.ico" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${title} - ${description}`} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_US" />
      
      {/* Article specific Open Graph tags */}
      {type === 'article' && (
        <>
          {publishedTime && <meta property="article:published_time" content={publishedTime} />}
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
          {author && <meta property="article:author" content={author} />}
          {section && <meta property="article:section" content={section} />}
          {tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:image:alt" content={`${title} - ${description}`} />
      <meta name="twitter:site" content="@useklump" />
      <meta name="twitter:creator" content="@useklump" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="author" content={author} />
      <meta name="publisher" content="Klump" />
      <meta name="language" content="en-US" />
      <meta name="theme-color" content="#6366f1" />
      
      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': type === 'article' ? 'TechArticle' : 'WebSite',
            name: fullTitle,
            description: description,
            url: currentUrl,
            image: imageUrl,
            author: {
              '@type': 'Organization',
              name: 'Klump',
              url: 'https://useklump.com',
            },
            publisher: {
              '@type': 'Organization',
              name: 'Klump',
              url: 'https://useklump.com',
              logo: {
                '@type': 'ImageObject',
                url: 'https://docs.useklump.com/img/klump-logo.png',
              },
            },
            ...(type === 'article' && publishedTime && {
              datePublished: publishedTime,
              dateModified: modifiedTime || publishedTime,
            }),
          }),
        }}
      />
      
      {/* Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link 
        href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;600;700;800&display=swap" 
        rel="stylesheet" 
      />
    </Head>
  );
}