import type { ReactNode } from 'react';
import { FeedbackBox } from '../../home/FeedbackBox';
import TableOfContents from '../../TableOfContents';
import dynamic from 'next/dynamic';
import content from '../../../data/content/views/verification/transaction-verification.json';

interface TransactionVerificationViewProps {
    children: ReactNode;
    title: string;
    date?: string;
    readingTime?: string;
}

export default function TransactionVerification({ children, readingTime, date, title }: TransactionVerificationViewProps) {
    const { transactionVerification } = content;
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
                <article className="prose prose-blue max-w-none space-y-8 my-6 text-base text-[#1F1F2D]">
                    <div>
                        <div className="text-base text-[#1F1F2D] space-y-2">
                            <p>{transactionVerification.intro.description}</p>
                            <p>Things to look out for when verifying a transaction:</p>
                            <ul className='space-y-1'>
                                {transactionVerification.intro.checkpoints.map((checkpoint, index) => (
                                    <li key={index} className='flex items-center space-x-1'>
                                        <span>
                                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2 6C2.55228 6 3 5.55228 3 5C3 4.44772 2.55228 4 2 4C1.44772 4 1 4.44772 1 5C1 5.55228 1.44772 6 2 6Z" fill="black" />
                                            </svg>
                                        </span>
                                        <span>{checkpoint}</span>
                                    </li>
                                ))}
                            </ul>
                            <p>{transactionVerification.intro.additionalNote}</p>
                            <p>{transactionVerification.codeExamples.verificationRequest.description}</p>
                            <div className='py-2 w-full h-full'>
                                <CodeBlock code={transactionVerification.codeExamples.verificationRequest.code} lang="javascript" />
                            </div>
                            <p>{transactionVerification.codeExamples.verificationRequest.note}</p>
                            <p>{transactionVerification.codeExamples.verificationResponse.description}</p>
                            <div className='py-2 w-full h-full'>
                                <CodeBlock code={transactionVerification.codeExamples.verificationResponse.code} lang="javascript" />
                            </div>
                        </div>
                    </div>
                </article>

                {/* Feedback */}
                <div className="mt-10">
                    <FeedbackBox />
                </div>
            </div>

            <TableOfContents sections={transactionVerification.sections} />
        </div>
    );
}
