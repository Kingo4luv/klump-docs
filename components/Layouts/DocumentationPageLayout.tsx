import type { ReactNode } from 'react';
import { FeedbackBox } from '../home/FeedbackBox';
import TableOfContents from '../TableOfContents';
import { calculateReadingTime, extractTextFromChildren } from '../../lib/reading-time';
import { getCurrentDate, getPageDate } from '../../lib/file-dates';

export interface DocumentationPageProps {
  children: ReactNode;
  title: string;
  date?: string;
  readingTime?: string;
  sections?: Array<{ id: string; label: string }>;
  showTableOfContents?: boolean;
  titleId?: string;
  pageId?: string; // Add page identifier for JSON file date lookup
}

export default function DocumentationPageLayout({
  children,
  title,
  date,
  readingTime,
  sections = [],
  showTableOfContents = true,
  titleId,
  pageId,
}: DocumentationPageProps) {
  // Calculate reading time dynamically if not provided
  const dynamicReadingTime = readingTime || (() => {
    const contentText = extractTextFromChildren(children);
    const titleText = title || '';
    const combinedText = titleText + ' ' + contentText;
    return calculateReadingTime(combinedText);
  })();

  // Calculate published date dynamically based on pre-generated JSON file dates
  const dynamicDate = date || (() => {
    if (pageId) {
      // Get date from pre-generated data
      return getPageDate(pageId);
    }
    // Fallback to current date
    return getCurrentDate();
  })();

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-6 py-6 lg:flex gap-8">
      {/* Main content */}
      <div className="w-full lg:w-3/4">
        {/* Meta info */}
        {(dynamicReadingTime || dynamicDate) && (
          <div className="mb-4 flex text-sm text-gray-500 items-center space-x-3">
            {/* Reading Time */}
            {dynamicReadingTime && (
              <div className="flex items-center space-x-1">
                <span className="text-[#444453]">Reading time</span>
                <span className="text-[#1F1F2D]">{dynamicReadingTime}</span>
              </div>
            )}
            {/* Published Date */}
            {dynamicDate && (
              <div className="flex items-center space-x-1">
                <span className="text-[#444453]">Published</span>
                <span className="text-[#1F1F2D]">{dynamicDate}</span>
              </div>
            )}
          </div>
        )}

        {/* Page Title */}
        <h1 id={titleId} className="text-3xl font-bold text-[#1F1F2D] my-6">
          {title}
        </h1>

        {/* Article Content */}
        <article className="prose prose-blue max-w-none space-y-6 my-6 text-base text-[#1F1F2D]">
          {children}
        </article>

        {/* Feedback */}
        <div className="mt-10">
          <FeedbackBox />
        </div>
      </div>

      {/* Table of Contents */}
      {showTableOfContents && sections.length > 0 && (
        <TableOfContents sections={sections} />
      )}
    </div>
  );
}