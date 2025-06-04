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
  '/docs': {
    title: 'Introduction',
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
  const { markdoc } = pageProps;

  const router = useRouter();
  const pathname = router.pathname;

  // Extract SEO information
  const pageId = getPageIdFromPath(pathname);
  const publishedDate = getPageDate(pageId);

  // Get page-specific SEO data
  const pageSEO = PAGE_SEO_MAP[pathname];
  
  // Default SEO values
  let title = 'Klump Documentation';
  let description = 'Complete documentation for integrating Klump payment solutions. Learn how to implement buy now, pay later functionality for your e-commerce platform.';
  let section = getSectionFromPath(pathname);
  let type: 'website' | 'article' = 'website';

  // Priority order for SEO data:
  // 1. Frontmatter (highest priority)
  // 2. Page SEO mapping
  // 3. Extracted title from Markdoc tags
  // 4. Defaults

  if (markdoc) {
    // 1. Check frontmatter first
    if (markdoc.frontmatter.title) {
      title = `${markdoc.frontmatter.title} | Klump Documentation`;
      type = 'article';
    } else if (pageSEO) {
      // 2. Use page SEO mapping
      title = `${pageSEO.title} | Klump Documentation`;
      description = pageSEO.description;
      section = pageSEO.section || section;
      type = 'article';
    } else {
      // 3. Try to extract title from Markdoc tags
      const extractedTitle = extractTitleFromMarkdoc(markdoc);
      if (extractedTitle) {
        title = `${extractedTitle} | Klump Documentation`;
        type = 'article';
      }
    }

    if (markdoc.frontmatter.description) {
      description = markdoc.frontmatter.description;
    }
  } else if (pageSEO) {
    // Use page SEO mapping even without markdoc
    title = `${pageSEO.title} | Klump Documentation`;
    description = pageSEO.description;
    section = pageSEO.section || section;
    type = 'article';
  }

  // Convert DD/MM/YYYY to ISO format for meta tags
  const publishedTimeISO = publishedDate ? (() => {
    const [day, month, year] = publishedDate.split('/');
    return new Date(`${year}-${month}-${day}`).toISOString();
  })() : undefined;

  const toc = pageProps.markdoc?.content
    ? collectHeadings(pageProps.markdoc.content)
    : [];

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
        {!hiddenPaths.includes(pathname) && <SideNav />}
        <main className={`w-full flex-1 ${!hiddenPaths.includes(pathname) ? 'lg:ml-72' : ''}`}>
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}
