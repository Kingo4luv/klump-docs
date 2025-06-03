const fs = require('fs');
const path = require('path');

/**
 * Build-time script to generate page dates from JSON file modification times
 */
function generatePageDates() {
  const contentDir = path.join(process.cwd(), 'data/content/views');
  
  // Mapping of page identifiers to their corresponding JSON content files
  // Fixed mapping based on actual file structure
  const pageToJsonMap = {
    // Home section
    'intro': 'home/intro.json',
    'apikeys': 'home/api-keys.json',
    'environment': 'home/environment.json',
    'testcredentials': 'home/test-credentials.json',
    'errors': 'home/errors.json',
    
    // Getting Started section
    'gettingstarted': 'getting-started/home.json',
    
    // Integrating Klump section
    'integratingklumpgettingstarted': 'integrating-klump/getting-started.json',
    'producttesting': 'integrating-klump/product-testing.json',
    'paymentpages': 'integrating-klump/payment-pages.json',
    
    // Webhooks section
    'webhookgettingstarted': 'webhooks/getting-started.json',
    'settingupwebhooks': 'webhooks/setting-up-webhooks.json',
    'resendwebhooks': 'webhooks/resend-webhooks.json',
    
    // Commerce section
    'inventorymanagemnt': 'commerce/inventory-management.json',
    
    // Verification section
    'transactionverification': 'verification/transaction-verification.json',
    
    // Plugins section
    'plugins': 'plugins/home.json',
  };

  const pageDates = {};
  
  for (const [pageId, jsonPath] of Object.entries(pageToJsonMap)) {
    try {
      const fullPath = path.join(contentDir, jsonPath);
      
      // Check if file exists first
      if (!fs.existsSync(fullPath)) {
        console.warn(`File not found: ${fullPath}`);
        continue;
      }
      
      const stats = fs.statSync(fullPath);
      
      // Format date as DD/MM/YYYY
      const date = stats.mtime;
      const day = date.getDate().toString().padStart(2, '0');
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const year = date.getFullYear();
      
      pageDates[pageId] = `${day}/${month}/${year}`;
      console.log(`✓ ${pageId}: ${pageDates[pageId]} (from ${jsonPath})`);
    } catch (error) {
      console.warn(`Could not get date for ${jsonPath}: ${error.message}`);
      // Use current date as fallback
      const now = new Date();
      const day = now.getDate().toString().padStart(2, '0');
      const month = (now.getMonth() + 1).toString().padStart(2, '0');
      const year = now.getFullYear();
      pageDates[pageId] = `${day}/${month}/${year}`;
    }
  }

  // Write the dates to a JSON file that can be imported
  const outputPath = path.join(process.cwd(), 'data/generated-page-dates.json');
  fs.writeFileSync(outputPath, JSON.stringify(pageDates, null, 2));
  
  console.log('\n✅ Generated page dates successfully!');
  console.log(`📁 Output: ${outputPath}`);
  console.log(`📊 Total pages: ${Object.keys(pageDates).length}`);
}

// Run the script
generatePageDates();