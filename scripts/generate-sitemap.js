const fs = require('fs');
const path = require('path');

// Import the generated page dates
const pageDates = require('../data/generated-page-dates.json');

/**
 * Convert DD/MM/YYYY to ISO format for sitemap
 */
function convertToISODate(ddmmyyyy) {
  const [day, month, year] = ddmmyyyy.split('/');
  return new Date(year, month - 1, day).toISOString();
}

/**
 * Generate sitemap.xml for better SEO with actual content modification dates
 */
function generateSitemap() {
  const baseUrl = 'https://docs.useklump.com';
  
  // Define your site's pages with priorities and change frequencies
  // lastmod will be populated from actual content modification dates
  const pages = [
    // Main pages
    { path: '/', priority: '1.0', changefreq: 'weekly', useCurrentDate: true },
    { path: '/docs', priority: '0.9', changefreq: 'weekly', pageId: 'intro' },
    
    // Home section
    { path: '/docs/home/intro', priority: '0.9', changefreq: 'monthly', pageId: 'intro' },
    { path: '/docs/home/api-keys', priority: '0.8', changefreq: 'monthly', pageId: 'apikeys' },
    { path: '/docs/home/environment', priority: '0.8', changefreq: 'monthly', pageId: 'environment' },
    { path: '/docs/home/test-credentials', priority: '0.8', changefreq: 'monthly', pageId: 'testcredentials' },
    { path: '/docs/home/errors', priority: '0.8', changefreq: 'monthly', pageId: 'errors' },
    
    // Getting Started
    { path: '/docs/getting-started', priority: '0.9', changefreq: 'monthly', pageId: 'gettingstarted' },
    
    // Integrating Klump
    { path: '/docs/integrating-klump', priority: '0.8', changefreq: 'monthly', pageId: 'integratingklumpgettingstarted' },
    { path: '/docs/integrating-klump/getting-started', priority: '0.8', changefreq: 'monthly', pageId: 'integratingklumpgettingstarted' },
    { path: '/docs/integrating-klump/product-testing', priority: '0.7', changefreq: 'monthly', pageId: 'producttesting' },
    { path: '/docs/integrating-klump/payment-pages', priority: '0.7', changefreq: 'monthly', pageId: 'paymentpages' },
    
    // Webhooks
    { path: '/docs/webhooks/getting-started', priority: '0.8', changefreq: 'monthly', pageId: 'webhookgettingstarted' },
    { path: '/docs/webhooks/setting-up-webhooks', priority: '0.7', changefreq: 'monthly', pageId: 'settingupwebhooks' },
    { path: '/docs/webhooks/resend-webhooks', priority: '0.7', changefreq: 'monthly', pageId: 'resendwebhooks' },
    
    // Commerce
    { path: '/docs/commerce/inventory-management', priority: '0.7', changefreq: 'monthly', pageId: 'inventorymanagemnt' },
    
    // Verification
    { path: '/docs/verification/transaction-verification', priority: '0.7', changefreq: 'monthly', pageId: 'transactionverification' },
    
    // Plugins
    { path: '/docs/plugins', priority: '0.7', changefreq: 'monthly', pageId: 'plugins' },
  ];

  const currentDate = new Date().toISOString();

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => {
  // Use actual content modification date if available, otherwise current date
  let lastmod = currentDate;
  
  if (page.pageId && pageDates[page.pageId]) {
    try {
      lastmod = convertToISODate(pageDates[page.pageId]);
    } catch (error) {
      console.warn(`Could not convert date for ${page.pageId}: ${pageDates[page.pageId]}`);
    }
  }
  
  return `  <url>
    <loc>${baseUrl}${page.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
}).join('\n')}
</urlset>`;

  // Write sitemap to public directory
  const outputPath = path.join(process.cwd(), 'public/sitemap.xml');
  fs.writeFileSync(outputPath, sitemap);
  
  console.log('✅ Generated sitemap.xml successfully!');
  console.log(`📁 Output: ${outputPath}`);
  console.log(`📊 Total URLs: ${pages.length}`);
  
  // Log some sample dates for verification
  console.log('📅 Sample lastmod dates:');
  pages.slice(0, 5).forEach(page => {
    if (page.pageId && pageDates[page.pageId]) {
      console.log(`   ${page.path}: ${pageDates[page.pageId]} → ${convertToISODate(pageDates[page.pageId])}`);
    }
  });
}

// Also generate robots.txt
function generateRobotsTxt() {
  const robots = `User-agent: *
Allow: /

# Sitemap
Sitemap: https://docs.useklump.com/sitemap.xml

# Crawl-delay for bots
Crawl-delay: 1`;

  const outputPath = path.join(process.cwd(), 'public/robots.txt');
  fs.writeFileSync(outputPath, robots);
  
  console.log('✅ Generated robots.txt successfully!');
  console.log(`📁 Output: ${outputPath}`);
}

// Run both generators
generateSitemap();
generateRobotsTxt();