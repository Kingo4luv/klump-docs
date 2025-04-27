'use client';

import type { ReactNode } from 'react';
import { FeedbackBox } from '../home/FeedbackBox';

interface ApiKeysLayoutProps {
    children: ReactNode;
    title: string;
    date?: string;
    readingTime?: string;
}

export default function ApiKeysLayout({ children, readingTime, date, title }: ApiKeysLayoutProps) {
    return (
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-6 lg:flex gap-8">
            {/* Main content */}
            <div className="w-full lg:w-3/4">
                {/* Meta info */}
                <div className="mb-4 flex text-sm text-gray-500 items-center space-x-3">
                    {/* Reading Time */}
                    {readingTime && (
                        <div className="flex items-center space-x-1">
                            <span className="text-[#444453]">Reading time</span>
                            <span className="text-[#1F1F2D]">{readingTime}</span>
                        </div>
                    )}
                    {/* Published Date */}
                    {date && (
                        <div className="flex items-center space-x-1">
                            <span className="text-[#444453]">Published</span>
                            <span className="text-[#1F1F2D]">{date}</span>
                        </div>
                    )}
                </div>

                {/* Page Title */}
                <h1 className="text-3xl font-bold text-gray-900 my-6 lg:my-12">
                    {title}
                </h1>

                {/* Article Content */}
                <article className="prose prose-blue max-w-none space-y-8 my-6 lg:my-10 text-base text-[#1F1F2D]">
                    {children}
                </article>

                {/* Feedback */}
                <div className="mt-10">
                    <FeedbackBox />
                </div>
            </div>

            {/* Sidebar TOC */}
            <aside className="hidden lg:block w-1/4">
                <div className="sticky top-24 pt-4">
                    <h5 className="text-sm font-semibold text-gray-700 mb-2">On this page</h5>
                    <ul className="border-l border-gray-200 pl-4 text-sm text-gray-600 space-y-2">
                        {/* Hardcoded TOC Example - you might want to map dynamically later */}
                        <li>
                            <a href="#api-keys" className="flex items-center space-x-2 text-[#192C69] font-medium">
                                <span className="h-3 w-3 border rounded-full bg-[#192C69] flex items-center justify-center">
                                    <span className="h-1 w-1 rounded-full bg-white block"></span>
                                </span>
                                <span>API Keys</span>
                            </a>
                        </li>
                        <li>
                            <a href="#authorization" className="flex items-center space-x-2 text-gray-600 hover:text-[#192C69]">
                                <span className="h-2 w-2 rounded-full bg-gray-300 block"></span>
                                <span>Authorization</span>
                            </a>
                        </li>
                        <li>
                            <a href="#security" className="flex items-center space-x-2 text-gray-600 hover:text-[#192C69]">
                                <span className="h-2 w-2 rounded-full bg-gray-300 block"></span>
                                <span>Security</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>
        </div>
    );
}
