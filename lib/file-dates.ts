import pageDatesData from '../data/generated-page-dates.json';

/**
 * Get current date in DD/MM/YYYY format
 * @returns Current date string
 */
export function getCurrentDate(): string {
  const date = new Date();
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

/**
 * Format a Date object to DD/MM/YYYY string
 * @param date - Date object to format
 * @returns Formatted date string
 */
export function formatDate(date: Date): string {
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

/**
 * Get the published date for a page from pre-generated data
 * @param pageId - Page identifier (e.g., 'apikeys', 'intro')
 * @returns Date string in DD/MM/YYYY format or current date as fallback
 */
export function getPageDate(pageId: string): string {
  try {
    // Get date from pre-generated data
    const pageDate = pageDatesData[pageId as keyof typeof pageDatesData];
    
    if (pageDate) {
      console.log(`✓ Found date for ${pageId}: ${pageDate}`);
      return pageDate;
    }
    
    // Fallback to current date if page not found
    console.warn(`⚠️ No date found for page: ${pageId}, using current date. Available pages:`, Object.keys(pageDatesData));
    return getCurrentDate();
  } catch (error) {
    console.error(`❌ Error getting page date for ${pageId}:`, error);
    console.warn(`📝 Generated dates data:`, pageDatesData);
    return getCurrentDate();
  }
}

/**
 * Mapping of page identifiers to their corresponding JSON content files
 */
export const pageToJsonMap: Record<string, string> = {
  // Home section
  'intro': 'home/intro.json',
  'apikeys': 'home/api-keys.json',
  'environment': 'home/environment.json',
  'testcredentials': 'home/test-credentials.json',
  'errors': 'home/errors.json',
  
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
  'plugins': 'plugins/index.json',
};