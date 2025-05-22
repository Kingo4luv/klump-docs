'use client';

import { useEffect, useState } from 'react';

interface TocItem {
  id: string;
  label: string;
}

interface TableOfContentsProps {
  sections: TocItem[];
}

export default function TableOfContents({ sections }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const initialId = hash.replace('#', '');
      setActiveId(initialId);
    } else if (sections.length > 0) {
      setActiveId(sections[0].id);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Get all entries that are currently intersecting
        const intersectingEntries = entries.filter(entry => entry.isIntersecting);
        
        if (intersectingEntries.length > 0) {
          // Get the one closest to the top of the viewport
          const topEntry = intersectingEntries.reduce((prev, current) => {
            return prev.boundingClientRect.top > current.boundingClientRect.top ? current : prev;
          });
          
          setActiveId(topEntry.target.id);
        }
      },
      {
        rootMargin: '-20px 0px -80% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1]
      }
    );

    const targets = sections
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    targets.forEach((el) => observer.observe(el));

    return () => targets.forEach((el) => observer.unobserve(el));
  }, [sections]);

  return (
    <aside className="hidden lg:block w-1/4">
      <div className="sticky top-24 pt-4">
        <h5 className="text-sm font-semibold text-gray-700 mb-2">On this page</h5>
        <ul className="border-l border-gray-200 pl-4 text-sm text-gray-600 space-y-2">
          {sections.map(({ id, label }) => {
            const isActive = activeId === id;
            return (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => setActiveId(id)}
                  className={`flex items-center space-x-2 ${isActive
                    ? 'text-[#192C69] font-medium'
                    : 'text-gray-600 hover:text-[#192C69]'
                    }`}
                >
                  <span
                    className={`rounded-full block ${isActive
                      ? 'h-3 w-3 border bg-[#192C69] flex items-center justify-center'
                      : 'h-2 w-2 bg-gray-300'
                      }`}
                  >
                    {isActive && <span className="h-1 w-1 rounded-full bg-white block" />}
                  </span>
                  <span>{label}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}
