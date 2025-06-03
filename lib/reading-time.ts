/**
 * Calculate reading time for given content
 * @param content - The text content to analyze
 * @param wordsPerMinute - Average reading speed (default: 150 words per minute for technical content)
 * @returns Reading time in minutes as a formatted string
 */
export function calculateReadingTime(content: string, wordsPerMinute: number = 100): string {
  if (!content) return '1 min read';
  
  // Remove HTML tags and extra whitespace
  const plainText = content
    .replace(/<[^>]*>/g, '') // Remove HTML tags
    .replace(/\s+/g, ' ') // Replace multiple whitespace with single space
    .trim();
  
  // Count words (split by whitespace and filter out empty strings)
  const wordCount = plainText.split(/\s+/).filter(word => word.length > 0).length;
  
  // Calculate reading time in minutes
  const readingTimeMinutes = Math.ceil(wordCount / wordsPerMinute);
  
  // Return formatted string
  return readingTimeMinutes === 1 ? '1 min read' : `${readingTimeMinutes} min read`;
}

/**
 * Extract text content from React children recursively
 * @param children - React children to extract text from
 * @returns Plain text string
 */
export function extractTextFromChildren(children: any): string {
  if (!children) return '';
  
  if (typeof children === 'string') {
    return children;
  }
  
  if (typeof children === 'number') {
    return children.toString();
  }
  
  if (Array.isArray(children)) {
    return children.map(extractTextFromChildren).join(' ');
  }
  
  if (children.props) {
    // Handle React elements
    let text = '';
    
    // Extract text from children prop
    if (children.props.children) {
      text += extractTextFromChildren(children.props.children);
    }
    
    // Extract text from common text-containing props
    if (children.props.title) {
      text += ' ' + children.props.title;
    }
    
    if (children.props.description) {
      text += ' ' + children.props.description;
    }
    
    return text;
  }
  
  return '';
}