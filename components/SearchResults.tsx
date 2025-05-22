import React from 'react';
import Link from 'next/link';
import type { SearchResult } from '../lib/search';

interface SearchResultsProps {
  results: SearchResult[];
  isVisible: boolean;
  onClose: () => void;
  isSearching: boolean;
}

export function SearchResults({ results, isVisible, onClose, isSearching }: SearchResultsProps) {
  if (!isVisible) return null;

  return (
    <>
      <div className="absolute w-full left-0 right-0 bg-white rounded-b-lg shadow-lg z-30 max-h-[70vh] overflow-y-auto mt-1 border border-[#E3E8EE]">
        {isSearching ? (
          <div className="p-4 text-gray-500">Searching...</div>
        ) : results.length === 0 ? (
          <div className="p-4 text-gray-500">No results found</div>
        ) : (
          <div className="divide-y divide-[#E3E8EE]">
            {results.map((result, index) => (
              <Link
                key={index}
                href={result.url}
                className="block p-4 hover:bg-gray-50 transition-colors duration-150"
                onClick={onClose}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="font-medium text-gray-900 capitalize mb-1">{result.title}</div>
                    <div className="text-sm text-gray-600 line-clamp-2">{result.content}</div>
                    {result.section && (
                      <div className="text-xs text-gray-500 mt-2">
                        <span className="bg-blue-100 px-2 py-1 rounded capitalize">{result.section}</span>
                        {result.sectionId && (
                          <span className="ml-2 text-gray-400">#{result.sectionId}</span>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
}