import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { SideNav, TopNav } from '../components';
import SEOHead from '../components/SEOHead';
import { getPageDate } from '../lib/file-dates';

import 'prismjs';
// Import other Prism themes here
import 'prismjs/components/prism-bash.min';
import 'prismjs/themes/prism.css';

import '../public/globals.css'

import type { AppProps } from 'next/app'
import type { MarkdocNextJsPageProps } from '@markdoc/next.js'

function collectHeadings(node, sections = []) {
  if (node) {
    if (node.name === 'Heading') {
      const title = node.children[0];

      if (typeof title === 'string') {
        sections.push({
          ...node.attributes,
          title
        });
      }
    }

    if (node.children) {
      for (const child of node.children) {
        collectHeadings(child, sections);
      }
    }
  }

  return sections;
}

// Helper function to extract page ID from router pathname
function getPageIdFromPath(pathname: string): string {
  // Remove leading/trailing slashes and convert to page ID format
  const cleanPath = pathname.replace(/^\/|\/$/g, '');
  
  // Handle specific route mappings
  const pathMappings: Record<string, string> = {
    'docs/home/intro': 'intro',
    'docs/home/api-keys': 'apikeys',
    'docs/home/environment': 'environment',
    'docs/home/test-credentials': 'testcredentials',
    'docs/home/errors': 'errors',
    'docs/getting-started': 'gettingstarted',
    'docs/integrating-klump/getting-started': 'integratingklumpgettingstarted',
    'docs/integrating-klump/product-testing': 'producttesting',
    'docs/integrating-klump/payment-pages': 'paymentpages',
    'docs/webhooks/getting-started': 'webhookgettingstarted',
    'docs/webhooks/setting-up-webhooks': 'settingupwebhooks',
    'docs/webhooks/resend-webhooks': 'resendwebhooks',
    'docs/commerce/inventory-management': 'inventorymanagemnt',
    'docs/verification/transaction-verification': 'transactionverification',
    'docs/plugins': 'plugins',
  };

  return pathMappings[cleanPath] || cleanPath.replace(/[\/\-]/g, '');
}

// Helper function to get section name from path
function getSectionFromPath(pathname: string): string {
  const sections: Record<string, string> = {
    '/docs/home/': 'Getting Started',
    '/docs/integrating-klump/': 'Integration',
    '/docs/webhooks/': 'Webhooks',
    '/docs/commerce/': 'Commerce',
    '/docs/verification/': 'Verification',
    '/docs/plugins/': 'Plugins',
  };

  for (const [path, section] of Object.entries(sections)) {
    if (pathname.startsWith(path)) {
      return section;
    }
  }
  
  return 'Documentation';
}

// Helper function to extract title from Markdoc content
function extractTitleFromMarkdoc(markdoc: any): string | null {
  if (!markdoc?.content) return null;
  
  // Look for tag attributes with title
  function findTitle(node: any): string | null {
    if (node?.attributes?.title) {
      return node.attributes.title;
    }
    if (node?.children) {
      for (const child of node.children) {
        const title = findTitle(child);
        if (title) return title;
      }
    }
    return null;
  }
  
  return findTitle(markdoc.content);
}

// SEO mapping for better page-specific metadata
const PAGE_SEO_MAP: Record<string, { title: string; description: string; section?: string }> = {
  '/': {
    title: 'Klump Documentation - Buy Now, Pay Later Integration',
    description: 'Official documentation for Klump payment solutions. Learn how to integrate buy now, pay later functionality into your e-commerce platform with our comprehensive guides and APIs.',
    section: 'Home'
  },
  '/docs': {
    title: 'Documentation Home',
    description: 'Complete documentation for integrating Klump payment solutions. Learn how to implement buy now, pay later functionality for your e-commerce platform.',
    section: 'Getting Started'
  },
  '/docs/api-keys-authorization': {
    title: 'API Keys & Authorization',
    description: 'Learn how to authenticate with Klump APIs using API keys. Secure your integration with proper authorization methods.',
    section: 'Authentication'
  },
  '/docs/environment': {
    title: 'Environment Configuration',
    description: 'Set up your development and production environments for Klump integration. Configure API endpoints and environment variables.',
    section: 'Configuration'
  },
  '/docs/test-card': {
    title: 'Test Credentials',
    description: 'Use Klump test cards and credentials for development. Test your integration safely with sandbox data.',
    section: 'Testing'
  },
  '/docs/errors': {
    title: 'Error Codes & Handling',
    description: 'Comprehensive guide to Klump API error codes, troubleshooting, and error handling best practices.',
    section: 'Reference'
  },
  '/docs/getting-started': {
    title: 'Getting Started',
    description: 'Quick start guide for integrating Klump payment solutions. Get up and running in minutes.',
    section: 'Getting Started'
  },
  '/docs/integrating-klump': {
    title: 'Integrating Klump',
    description: 'Complete integration guide for adding Klump buy now, pay later functionality to your website.',
    section: 'Integration'
  },
  '/docs/product-testing': {
    title: 'Product Testing',
    description: 'Test your Klump integration thoroughly. Learn about testing strategies and validation methods.',
    section: 'Testing'
  },
  '/docs/payment-pages': {
    title: 'Payment Pages',
    description: 'Implement Klump payment pages and checkout flows. Customize the payment experience for your customers.',
    section: 'Integration'
  },
  '/docs/verification': {
    title: 'Account Verification',
    description: 'Understand Klump account verification process and requirements for merchants and customers.',
    section: 'Verification'
  },
  '/docs/transaction-verification': {
    title: 'Transaction Verification',
    description: 'Verify Klump transactions and payment status. Implement proper transaction validation in your system.',
    section: 'Verification'
  },
  '/docs/webhooks': {
    title: 'Webhooks Overview',
    description: 'Understand Klump webhooks for real-time payment notifications. Keep your system in sync with payment events.',
    section: 'Webhooks'
  },
  '/docs/webhook-getting-started': {
    title: 'Webhook Getting Started',
    description: 'Quick start guide for implementing Klump webhooks. Receive real-time payment notifications.',
    section: 'Webhooks'
  },
  '/docs/setting-up-webhook': {
    title: 'Setting up Webhooks',
    description: 'Step-by-step guide to configure and implement Klump webhooks in your application.',
    section: 'Webhooks'
  },
  '/docs/resend-webhook': {
    title: 'Resend Webhooks',
    description: 'Learn how to resend failed webhooks and handle webhook delivery issues with Klump.',
    section: 'Webhooks'
  },
  '/docs/plugins': {
    title: 'Plugins & Libraries',
    description: 'Official Klump plugins and libraries for popular platforms. Easy integration for WordPress, Shopify, and more.',
    section: 'Plugins'
  },
  '/docs/commerce': {
    title: 'E-commerce Integration',
    description: 'Integrate Klump with your e-commerce platform. Support for major platforms and custom implementations.',
    section: 'E-commerce'
  },
  '/docs/inventory-management': {
    title: 'Inventory Management',
    description: 'Manage inventory with Klump payment plans. Handle stock for instalment payments and partial orders.',
    section: 'E-commerce'
  },
  '/docs/intro': {
    title: 'Introduction to Klump',
    description: 'Learn about Klump buy now, pay later solution. Understand how it works and benefits for your business.',
    section: 'Getting Started'
  }
};

export type MyAppProps = MarkdocNextJsPageProps

export default function MyApp({ Component, pageProps }: AppProps<MyAppProps>) {
  const router = useRouter();
  
  // Get page date
  const pageDate = getPageDate(router.pathname);
  const publishedTimeISO = pageDate ? new Date(pageDate).toISOString() : undefined;

  // Get page metadata from frontmatter or SEO mapping
  const frontmatter = pageProps.markdoc?.frontmatter || {};
  const pageId = getPageIdFromPath(router.pathname);
  const seoData = PAGE_SEO_MAP[router.pathname] || PAGE_SEO_MAP[pageId];
  
  // Extract title - simplified approach without suffixes
  const title = frontmatter.title || 
               seoData?.title || 
               extractTitleFromMarkdoc(pageProps.markdoc) || 
               'Documentation';

  // Use description from frontmatter, SEO mapping, or default
  const description = frontmatter.description || 
                     seoData?.description || 
                     'Klump payment solutions documentation and integration guides.';

  let section = frontmatter.section || seoData?.section || getSectionFromPath(router.pathname);
  let type: 'website' | 'article' = 'website';

  // Set type to article for documentation pages
  if (router.pathname.startsWith('/docs/')) {
    type = 'article';
  }

  let toc;
  if (pageProps.markdoc) {
    toc = collectHeadings(pageProps.markdoc.content);
  }

 

  const hiddenPaths = ['/', '/integrating-klump'];

  return (
    <>
      <SEOHead
        title={title}
        description={description}
        type={type}
        section={section}
        publishedTime={publishedTimeISO}
        modifiedTime={publishedTimeISO}
        tags={section ? [section, 'Integration', 'Payment', 'Documentation'] : undefined}
      />
      <TopNav>
        <Link href="/docs">Docs</Link>
      </TopNav>
      <div className="flex">
        {!hiddenPaths.includes(router.pathname) && <SideNav />}
        <main className={`w-full flex-1 ${!hiddenPaths.includes(router.pathname) ? 'lg:ml-72' : ''}`}>
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}
