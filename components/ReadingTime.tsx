import React from 'react';
import { calculateReadingTime, extractTextFromChildren } from '../lib/reading-time';

interface ReadingTimeProps {
  content?: string;
  children?: React.ReactNode;
  wordsPerMinute?: number;
  className?: string;
}

export default function ReadingTime({ 
  content, 
  children, 
  wordsPerMinute = 100,
  className = "text-sm text-gray-500"
}: ReadingTimeProps) {
  const readingTime = React.useMemo(() => {
    if (content) {
      return calculateReadingTime(content, wordsPerMinute);
    }
    
    if (children) {
      const extractedText = extractTextFromChildren(children);
      return calculateReadingTime(extractedText, wordsPerMinute);
    }
    
    return '1 min read';
  }, [content, children, wordsPerMinute]);

  return (
    <span className={className}>
      {readingTime}
    </span>
  );
}