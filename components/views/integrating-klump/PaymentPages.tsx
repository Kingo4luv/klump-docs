import type { ReactNode } from 'react';
import { FeedbackBox } from '../../home/FeedbackBox';
import TableOfContents from '../../TableOfContents';
import PaymentPagesDashboard from '../../img/integrating-klump/PaymentPagesDashboard';
import PaymentPagesModal from '../../img/integrating-klump/PaymentPagesModal';
import dynamic from 'next/dynamic';
import content from '../../../data/content/views/integrating-klump/payment-pages.json';

interface PaymentPagesViewProps {
    children: ReactNode;
    title: string;
    date?: string;
    readingTime?: string;
}

export default function PaymentPages({ children, readingTime, date, title }: PaymentPagesViewProps) {
    const { paymentPages } = content;
    const CodeBlock = dynamic(() => import('../../CodeBlock'), {
        ssr: false,
    });

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
                <article className="prose prose-blue max-w-none space-y-8 my-6  text-base text-[#1F1F2D]">
                    <div className='border-t text-[#1F1F2D] border-[#E3E8EE] pt-6 space-y-6 lg:space-y-12'>
                        <div>
                            <h2 className='text-lg text-[#1F1F2D] font-semibold my-3'>{paymentPages.merchantDashboard.title}</h2>
                            {paymentPages.merchantDashboard.description.map((paragraph, index) => (
                                <p key={index} className='mb-4'>{paragraph}</p>
                            ))}
                            <div className='space-y-6'>
                                <PaymentPagesDashboard />
                                <PaymentPagesModal />
                            </div>
                        </div>
                    </div>
                    <div className='border-t text-[#1F1F2D] border-[#E3E8EE] pt-6'>
                        <h2 className='text-lg text-[#1F1F2D] font-semibold my-3'>{paymentPages.api.title}</h2>
                        <p className='mb-4'>{paymentPages.api.description[0]}</p>
                        <div className='py-2 w-full h-full'>
                            <CodeBlock code={paymentPages.api.example.code} lang="javascript" />
                        </div>
                        <p>{paymentPages.api.description[1]}</p>
                    </div>
                </article>

                {/* Feedback */}
                <div className="mt-10">
                    <FeedbackBox />
                </div>
            </div>

            <TableOfContents sections={paymentPages.sections} />
        </div>
    );
}
