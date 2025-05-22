import type { ReactNode } from 'react';
import { FeedbackBox } from '../../home/FeedbackBox';
import TableOfContents from '../../TableOfContents';
import dynamic from 'next/dynamic';
import content from '../../../data/content/views/webhooks/resend-webhooks.json';

interface ResendWebhooksViewProps {
    children: ReactNode;
    title: string;
    date?: string;
    readingTime?: string;
}

export default function ResendWebhooks({ children, readingTime, date, title }: ResendWebhooksViewProps) {
    const { resendWebhooks } = content;
    const CodeBlock = dynamic(() => import('../../CodeBlock'), {
        ssr: false,
    });
    
    const webhookCode =
    `
    curl --location --request GET 'https://api.useklump.com/v1/transactions/:reference/resend-webhook' \
        --header 'Content-Type: application/json' \
        --header 'klump-secret-key: {{KLUMP_SEC_KEY}}'
    `
    const ResponseCode =
    `
    {
        "state": "success",
        "data": {
            "id": "65e7c9c6-84cd-4f50-28279a49f81b",
            "reference": "KLP-1648-123456-7891",
            "amount": "26150.00",
            "status": "successful",
            "currency": "NGN",
            "meta_data": {
                "customer": "Elun Musk",
                "email": "elongmusk@spacex.com",
                "phone": "9088988888",
                "invoice": "65774",
                "user": "5074"
            },
            "is_live": true,
            "shipping_fee": null,
            "created_at": "2022-03-28 22:04:30.828+00",
            "customer": {
                "id": "b81b9c2a11f-ab60-a2b2ba2a1cde",
                "firstname": "Elon",
                "lastname": "Musk",
                "email": "elon@spacex.com",
                "phone": "+23470000000"
            },
            "items": [
                {
                    "id": "ff1b-e25b-4b9c-b0e7-29755d2897d2",
                    "transaction_id": "65e7-84cd-4f50-8262-28279a49f81b",
                    "name": "Hosting - Invoice #65774",
                    "image_url": "https://s3.eu-west-1.amazonaws.com/stagingcdn.useklump.com/logo/1645969953584_logo.png",
                    "item_url": "https://merchant.com/product/football-shoes",
                    "unit_price": "26150.00",
                    "quantity": 1,
                    "created_at": "2022-03-28 22:04:30.834+00",
                    "updated_at": null,
                    "environment": "live"
                }
            ]
        }
    }
    `

    return (
        <div id='setting-up-webhook' className="max-w-7xl mx-auto px-4 lg:px-6 py-6 lg:flex gap-8">
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
                <h1 className="text-3xl font-bold text-[#1F1F2D] my-6">
                    {title}
                </h1>

                {/* Article Content */}
                <article className="prose prose-blue max-w-none space-y-8 my-6  text-base text-[#1F1F2D]">
                    {/* {children} */}
                    <div className='border-t text-[#1F1F2D] border-[#E3E8EE] pt-6 space-y-6 lg:space-y-12'>
                        <div>
                            {resendWebhooks.description.map((paragraph, index) => (
                                <p key={index} className='mb-4'>{paragraph}</p>
                            ))}
                            <div className='space-y-3'>
                                <div className='py-2 w-full h-full'>
                                    <CodeBlock code={webhookCode} lang="javascript" />
                                </div>
                                <p>{resendWebhooks.note}</p>
                                <div className='py-2 w-full h-full'>
                                    <CodeBlock code={ResponseCode} lang="javascript" />
                                </div>
                            </div>
                        </div>
                    </div>
                </article>

                {/* Feedback */}
                <div className="mt-10">
                    <FeedbackBox />
                </div>
            </div>

            <TableOfContents
                sections={resendWebhooks.sections}
            />
        </div>
    );
}
