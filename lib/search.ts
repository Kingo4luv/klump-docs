export interface SearchResult {
  title: string;
  content: string;
  url: string;
  section?: string;
  sectionId?: string;
}

interface Section {
  id: string;
  label: string;
}

interface ContentObject {
  [key: string]: any;
}

function stringifyContent(value: any): string {
  if (!value) return '';
  if (typeof value === 'string') return value;
  
  if (Array.isArray(value)) {
    return value.map(item => stringifyContent(item)).join(' ');
  }
  
  if (typeof value === 'object') {
    // Handle specific object structures
    if (value.main) return stringifyContent(value.main);
    if (value.mainText) return stringifyContent(value.mainText);
    if (value.description) return stringifyContent(value.description);
    if (value.content) return stringifyContent(value.content);
    if (value.message) return value.message;
    if (value.note) return value.note;
    
    // For other objects, recursively extract content
    return Object.entries(value)
      .filter(([key]) => !['sections', 'code', 'example', 'codeExamples'].includes(key))
      .map(([_, v]) => stringifyContent(v))
      .filter(Boolean)
      .join(' ');
  }
  
  return '';
}

function getSectionByKey(sections: any[] | undefined, key: string): {id?: string, label?: string} {
  if (!sections || !Array.isArray(sections)) return {};
  
  // Convert camelCase to kebab-case
  const kebabKey = key.replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`);
  const section = sections.find(s => s.id === kebabKey.replace(/^-/, ''));
  return section || {};
}

function extractSearchableContent(obj: ContentObject, path: string[] = []): { title: string; content: string; path: string[]; sectionId?: string }[] {
  const results: { title: string; content: string; path: string[]; sectionId?: string }[] = [];

  // Get sections from the root or nested objects
  let sections = obj.sections;
  if (!sections) {
    // Look for sections in first-level nested objects
    const nestedObj = Object.values(obj)[0] as ContentObject;
    sections = nestedObj?.sections;
  }

  // Case 1: Simple content with main text
  if (obj.content?.main || obj.content?.mainText) {
    const section = sections?.[0];
    results.push({
      title: section?.label || 'Documentation',
      content: stringifyContent(obj.content),
      path,
      sectionId: section?.id
    });
  }

  // Case 2: Process each key in the object
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === 'object' && value !== null && key !== 'sections') {
      if (Array.isArray(value)) continue;

      // Handle objects that match section IDs directly
      const matchingSection = sections?.find(s => {
        const sectionKey = key.replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
        return s.id === sectionKey;
      });

      // Process nested content
      if (value.title || value.description || matchingSection) {
        const content = stringifyContent(value);
        if (content) {
          results.push({
            title: matchingSection?.label || value.title || key.replace(/([A-Z])/g, ' $1').trim(),
            content: content,
            path,
            sectionId: matchingSection?.id
          });
        }
      }

      // Process deeper nested content
      if (typeof value === 'object') {
        // Skip certain keys that we know aren't content sections
        if (['sections', 'code', 'example', 'codeExamples'].includes(key)) continue;

        Object.entries(value).forEach(([nestedKey, nestedValue]) => {
          if (typeof nestedValue === 'object' && nestedValue !== null) {
            const nestedSection = sections?.find(s => {
              const sectionKey = nestedKey.replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
              return s.id === sectionKey;
            });

            const nestedContent = nestedValue as ContentObject;
            if (nestedContent.title || nestedContent.description || nestedSection) {
              const content = stringifyContent(nestedContent);
              if (content) {
                results.push({
                  title: nestedSection?.label || nestedContent.title || nestedKey.replace(/([A-Z])/g, ' $1').trim(),
                  content: content,
                  path,
                  sectionId: nestedSection?.id
                });
              }
            }
          }
        });
      }
    }
  }

  return results;
}

function getModuleSection(filePath: string): string {
  // Handle relative paths directly
  const parts = filePath.split('/');
  // Return the first part of the path as the section
  return parts[0].split('-').join(' ') || 'general';
}

const docPaths: { [key: string]: string } = {
  'home/environment': '/docs/environment',
  'home/test-credentials': '/docs/test-card',
  'home/intro': '/docs/intro',
  'home/errors': '/docs/errors',
  'home/api-keys': '/docs/api-keys-authorization',
  'getting-started/home': '/docs/getting-started',
  'plugins/home': '/docs/plugins',
  'webhooks/getting-started': '/docs/webhook-getting-started',
  'webhooks/setting-up-webhooks': '/docs/setting-up-webhook',
  'webhooks/resend-webhooks': '/docs/resend-webhook',
  'verification/transaction-verification': '/docs/transaction-verification',
  'integrating-klump/getting-started': '/docs/getting-started',
  'integrating-klump/payment-pages': '/docs/payment-pages',
  'integrating-klump/product-testing': '/docs/product-testing',
  'commerce/inventory-management': '/docs/inventory-management'
};

function getUrlFromPath(path: string, sectionId?: string): string {
  const baseUrl = docPaths[path] || '/docs';
  // Ensure section ID is properly formatted and only included once
  if (sectionId && !baseUrl.includes(`#${sectionId}`)) {
    return `${baseUrl}#${sectionId}`;
  }
  return baseUrl;
}

export async function searchContent(query: string): Promise<SearchResult[]> {
  const searchTerm = query.toLowerCase();
  const excludedFiles = ['home/support', 'home/features'];

  const imports = {
    'webhooks/getting-started': () => import('../data/content/views/webhooks/getting-started.json'),
    'webhooks/setting-up-webhooks': () => import('../data/content/views/webhooks/setting-up-webhooks.json'),
    'webhooks/resend-webhooks': () => import('../data/content/views/webhooks/resend-webhooks.json'),
    'integrating-klump/getting-started': () => import('../data/content/views/integrating-klump/getting-started.json'),
    'integrating-klump/payment-pages': () => import('../data/content/views/integrating-klump/payment-pages.json'),
    'integrating-klump/product-testing': () => import('../data/content/views/integrating-klump/product-testing.json'),
    'commerce/inventory-management': () => import('../data/content/views/commerce/inventory-management.json'),
    'home/environment': () => import('../data/content/views/home/environment.json'),
    'home/test-credentials': () => import('../data/content/views/home/test-credentials.json'),
    'home/intro': () => import('../data/content/views/home/intro.json'),
    'home/errors': () => import('../data/content/views/home/errors.json'),
    'home/api-keys': () => import('../data/content/views/home/api-keys.json'),
    'getting-started/home': () => import('../data/content/views/getting-started/home.json'),
    'plugins/home': () => import('../data/content/views/plugins/home.json'),
    'verification/transaction-verification': () => import('../data/content/views/verification/transaction-verification.json')
  };

  const results: SearchResult[] = [];

  await Promise.all(
    Object.entries(imports).map(async ([path, importFn]) => {
      // Skip excluded files
      if (excludedFiles.includes(path)) {
        return;
      }

      try {
        const module = await importFn();
        const searchableContent = extractSearchableContent(module.default);
        const section = getModuleSection(path);
        
        searchableContent.forEach(item => {
          const contentStr = (item.title + ' ' + item.content).toLowerCase();
          if (contentStr.includes(searchTerm)) {
            results.push({
              title: item.title,
              content: item.content,
              url: getUrlFromPath(path, item.sectionId),
              section: section,
              sectionId: item.sectionId
            });
          }
        });
      } catch (error) {
        console.error(`Error loading ${path}:`, error);
      }
    })
  );

  return results;
}