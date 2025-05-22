import type { ReactNode } from 'react';
import { FeedbackBox } from '../../home/FeedbackBox';
import TableOfContents from '../../TableOfContents';
import dynamic from 'next/dynamic';
import { CodeTabs } from '../../Codetabs';
import content from '../../../data/content/views/commerce/inventory-management.json';

interface InventoryManagemntViewProps {
    children: ReactNode;
    title: string;
    date?: string;
    readingTime?: string;
}

export default function InventoryManagemnt({ children, readingTime, date, title }: InventoryManagemntViewProps) {
    const { inventoryManagement } = content;
    const CodeBlock = dynamic(() => import('../../CodeBlock'), {
        ssr: false,
    });

    const UpdateProductInventory = [
        {
            label: inventoryManagement.codeExamples.updateInventory.label,
            content: (
                <div className="py-2 w-full h-full">
                    <CodeBlock code={inventoryManagement.codeExamples.updateInventory.code} lang="json" />
                </div>
            ),
        },
    ];

    const Response = [
        {
            label: inventoryManagement.codeExamples.sampleResponse.label,
            content: (
                <div className="py-2 w-full h-full">
                    <CodeBlock code={inventoryManagement.codeExamples.sampleResponse.code} lang="json" />
                </div>
            ),
        },
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-6 lg:flex gap-8">
            {/* Main content */}
            <div className="w-full lg:w-3/4">
                {/* Meta info */}
                <div className="mb-4 flex text-sm text-gray-500 items-center space-x-3">
                    {readingTime && (
                        <div className="flex items-center space-x-1">
                            <span className="text-[#444453]">Reading time</span>
                            <span className="text-[#1F1F2D]">{readingTime}</span>
                        </div>
                    )}
                    {date && (
                        <div className="flex items-center space-x-1">
                            <span className="text-[#444453]">Published</span>
                            <span className="text-[#1F1F2D]">{date}</span>
                        </div>
                    )}
                </div>

                {/* Page Title */}
                <h1 id='getting-started' className="text-3xl font-bold text-[#1F1F2D] my-6">
                    {title}
                </h1>

                {/* Article Content */}
                <article className="prose prose-blue max-w-none space-y-8 my-6 text-base text-[#1F1F2D]">
                    <div className='border-t border-[#E3E8EE] pt-6'>
                        <div className="text-base text-[#1F1F2D] space-y-2">
                            <h2 className='text-xl font-semibold'>
                                {inventoryManagement.title}
                            </h2>
                            {inventoryManagement.description.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                            <div className='py-2 w-full h-full'>
                                <CodeTabs tabs={UpdateProductInventory} />
                            </div>
                            <p>{inventoryManagement.updateNote}</p>
                            <p>Sample response</p>
                            <div className='py-2 w-full h-full'>
                                <CodeTabs tabs={Response} />
                            </div>
                        </div>
                    </div>
                </article>

                {/* Feedback */}
                <div className="mt-10">
                    <FeedbackBox />
                </div>
            </div>

            <TableOfContents sections={inventoryManagement.sections} />
        </div>
    );
}
