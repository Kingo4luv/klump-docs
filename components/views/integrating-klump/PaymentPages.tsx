import type { ReactNode } from 'react';
import { FeedbackBox } from '../../home/FeedbackBox';
import TableOfContents from '../../TableOfContents';
import PaymentPagesDashboard from '../../img/integrating-klump/PaymentPagesDashboard';
import PaymentPagesModal from '../../img/integrating-klump/PaymentPagesModal';
import dynamic from 'next/dynamic';

interface PaymentPagesViewProps {
    children: ReactNode;
    title: string;
    date?: string;
    readingTime?: string;
}

export default function PaymentPages({ children, readingTime, date, title }: PaymentPagesViewProps) {

    const CodeBlock = dynamic(() => import('../../CodeBlock'), {
        ssr: false,
    });

    const code =
    `
    curl --location --request GET 'https://api.useklump.com/v1/transactions/:reference/resend-webhook' \\
        --header 'Content-Type: application/json' \\
        --header 'klump-secret-key: {{KLUMP_SEC_KEY}}'\\
        -d '{"name": "Jerande's 30th Birthday", "description": "This is a great opportunity to let your hair
    `


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
                <h1 id='getting-started' className="text-3xl font-bold text-[#1F1F2D] my-6">
                    {title}
                </h1>

                {/* Article Content */}
                <article className="prose prose-blue max-w-none space-y-8 my-6  text-base text-[#1F1F2D]">
                    {/* {children} */}
                    <div className='border-t text-[#1F1F2D] border-[#E3E8EE] pt-6 space-y-6 lg:space-y-12'>
                        <div>
                            <h2 className='text-lg text-[#1F1F2D] font-semibold my-3'>Klump Access via Merchant Dashboard</h2>
                            <p className='mb-4'>Every API request to Klump's endpoints must include an API key, specifically the Klump secret key. If you do not include an API key with your request, or if you use an incorrect or outdated key, Klump will reject it and return an error.</p>
                            <p className='mb-4'>To use Klump Access, log into your merchant dashboard and select the Klump Access menu on the navigation bar - make sure to change your environment to LIVE, or else every page you create in your test environment will only work for test transactions - and create a page.</p>
                            <p className='mb-4'>Enter a title for the page, a description for the page, and an image and amount to create a Klump Access page. There are two types of amount options: fixed and free-flowing. The fixed amount requires your customer to pay a set amount, whereas the free-flowing amount allows your customer to pay whatever amount they want.</p>
                            <p className='mb-4'>To deactivate a payment page, click the visibility button on the payment page details page.</p>
                            <div className='space-y-6'>
                                <PaymentPagesDashboard />
                                <PaymentPagesModal />
                            </div>
                        </div>
                    </div>
                    <div className='border-t text-[#1F1F2D] border-[#E3E8EE] pt-6'>
                        <h2 className='text-lg text-[#1F1F2D] font-semibold my-3'>Klump Access via API</h2>
                        <p className='mb-4'>If you have an app, you can use an API to generate a Klump Access page for your users. This is useful if you want to offer the BNPL option to your customers without integrating through the Klump JS or using one of the provided plugins and libraries.</p>
                        <div className='py-2 w-full h-full'>
                            <CodeBlock code={code} lang="javascript" />
                        </div>
                        <p>In the case where the is_fixed_amount is true, you will be required to give an amount not less than N25,000.</p>
                    </div>

                </article>

                {/* Feedback */}
                <div className="mt-10">
                    <FeedbackBox />
                </div>
            </div>

            <TableOfContents
                sections={[
                    { id: 'payment-pages', label: 'Payment Pages' },
                ]}
            />
        </div>
    );
}
