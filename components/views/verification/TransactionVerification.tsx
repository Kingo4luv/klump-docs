import type { ReactNode } from 'react';
import { FeedbackBox } from '../../home/FeedbackBox';
import TableOfContents from '../../TableOfContents';
import Callout from '../../Callout';
import dynamic from 'next/dynamic';

interface TransactionVerificationViewProps {
    children: ReactNode;
    title: string;
    date?: string;
    readingTime?: string;
}

export default function TransactionVerification({ children, readingTime, date, title }: TransactionVerificationViewProps) {

    const CodeBlock = dynamic(() => import('../../CodeBlock'), {
        ssr: false,
    });

    const code =
    `
    curl --location --request GET 'https://api.useklump.com/v1/transactions/:reference/verify' \\
    --header 'Content-Type: application/json' \\
    --header 'klump-secret-key: {{KLUMP_SEC_KEY}}'
    `

    const codeTwo = 
    `
    {
    "state": "success",
        "data": {
            "id": "2dab6b4e-7db5-4dcc-bc03-470e3a417e97",
            "reference": "KLP-1644-083962-4231",
            "amount": "1183.85",
            "status": "successful",
            "currency": "NGN",
            "meta_data": null,
            "is_live": false,
            "items": [
                {
                    "id": "13b6be02-4a41-4227-b081-b58ebc6bccf9",
                    "transaction_id": "2dab6b4e-7db5-4dcc-bc03-470e3a417e97",
                    "name": "Timbeland",
                    "image_url": null,
                    "item_url": "http://omin.com/andndnd",
                    "unit_price": "300.00",
                    "quantity": 1,
                    "created_at": "2022-02-05T17:59:22.537Z",
                    "updated_at": null
                },
                {
                    "id": "dd6f96fa-9f06-4930-a1fb-47d690a40478",
                    "transaction_id": "2dab6b4e-7db5-4dcc-bc03-470e3a417e97",
                    "name": "Orange Fruit",
                    "image_url": null,
                    "item_url": "http://omin.com/andndnd",
                    "unit_price": "300.00",
                    "quantity": 1,
                    "created_at": "2022-02-05T17:59:22.537Z",
                    "updated_at": null
                },
                {
                    "id": "0234f2a1-2fb7-4b83-90ee-650327dbbda4",
                    "transaction_id": "2dab6b4e-7db5-4dcc-bc03-470e3a417e97",
                    "name": "Kiwi Fruit",
                    "image_url": null,
                    "item_url": "http://omin.com/andndnd",
                    "unit_price": "400.00",
                    "quantity": 1,
                    "created_at": "2022-02-05T17:59:22.537Z",
                    "updated_at": null
                }
            ]
        }
    }
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
                    <div>
                        <div className="text-base text-[#1F1F2D] space-y-2">
                            <p>
                                After a successful transaction, you must verify that the transaction was successful before providing value to a customer. Every transaction is assigned an ID, which must be supplied when attempting to confirm a transaction. To use the transaction verification API to confirm a transaction, the merchant must provide their Klump Secret Key, which can be found in their Klump dashboard
                            </p>
                            <p>
                                Things to look out for when verifying a transaction:
                            </p>
                            <ul className='space-y-1'>
                                <li className='flex items-center space-x-1'>
                                    <span>
                                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.46233 9.62717C3.49899 9.65001 3.62816 9.71434 3.75783 9.60334L8.90599 5.20784C8.96616 5.15634 9.00066 5.08051 9.00066 4.99967C9.00066 4.91884 8.96616 4.84301 8.90599 4.79151L3.75783 0.396008C3.70183 0.348174 3.64599 0.333008 3.59766 0.333008C3.53399 0.333008 3.48316 0.359341 3.46233 0.372174C3.38149 0.421841 3.30783 0.526341 3.34299 0.670508L4.36549 4.85417C4.38883 4.94934 4.38883 5.05001 4.36549 5.14517L3.34299 9.32884C3.30783 9.47301 3.38149 9.57751 3.46233 9.62717Z" fill="black" />
                                            <path d="M2 6C2.55228 6 3 5.55228 3 5C3 4.44772 2.55228 4 2 4C1.44772 4 1 4.44772 1 5C1 5.55228 1.44772 6 2 6Z" fill="black" />
                                        </svg>
                                    </span>
                                    <span>Verify the transaction data.reference returned matches what you're expecting</span>
                                </li>
                                <li className='flex items-center space-x-1'>
                                    <span>
                                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.46233 9.62717C3.49899 9.65001 3.62816 9.71434 3.75783 9.60334L8.90599 5.20784C8.96616 5.15634 9.00066 5.08051 9.00066 4.99967C9.00066 4.91884 8.96616 4.84301 8.90599 4.79151L3.75783 0.396008C3.70183 0.348174 3.64599 0.333008 3.59766 0.333008C3.53399 0.333008 3.48316 0.359341 3.46233 0.372174C3.38149 0.421841 3.30783 0.526341 3.34299 0.670508L4.36549 4.85417C4.38883 4.94934 4.38883 5.05001 4.36549 5.14517L3.34299 9.32884C3.30783 9.47301 3.38149 9.57751 3.46233 9.62717Z" fill="black" />
                                            <path d="M2 6C2.55228 6 3 5.55228 3 5C3 4.44772 2.55228 4 2 4C1.44772 4 1 4.44772 1 5C1 5.55228 1.44772 6 2 6Z" fill="black" />
                                        </svg>
                                    </span>
                                    <span>Verify the transaction state is success</span>
                                </li>
                                <li className='flex items-center space-x-1'>
                                    <span>
                                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.46233 9.62717C3.49899 9.65001 3.62816 9.71434 3.75783 9.60334L8.90599 5.20784C8.96616 5.15634 9.00066 5.08051 9.00066 4.99967C9.00066 4.91884 8.96616 4.84301 8.90599 4.79151L3.75783 0.396008C3.70183 0.348174 3.64599 0.333008 3.59766 0.333008C3.53399 0.333008 3.48316 0.359341 3.46233 0.372174C3.38149 0.421841 3.30783 0.526341 3.34299 0.670508L4.36549 4.85417C4.38883 4.94934 4.38883 5.05001 4.36549 5.14517L3.34299 9.32884C3.30783 9.47301 3.38149 9.57751 3.46233 9.62717Z" fill="black" />
                                            <path d="M2 6C2.55228 6 3 5.55228 3 5C3 4.44772 2.55228 4 2 4C1.44772 4 1 4.44772 1 5C1 5.55228 1.44772 6 2 6Z" fill="black" />
                                        </svg>
                                    </span>
                                    <span>Verify the data.status is successful</span>
                                </li>
                                <li className='flex items-center space-x-1'>
                                    <span>
                                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.46233 9.62717C3.49899 9.65001 3.62816 9.71434 3.75783 9.60334L8.90599 5.20784C8.96616 5.15634 9.00066 5.08051 9.00066 4.99967C9.00066 4.91884 8.96616 4.84301 8.90599 4.79151L3.75783 0.396008C3.70183 0.348174 3.64599 0.333008 3.59766 0.333008C3.53399 0.333008 3.48316 0.359341 3.46233 0.372174C3.38149 0.421841 3.30783 0.526341 3.34299 0.670508L4.36549 4.85417C4.38883 4.94934 4.38883 5.05001 4.36549 5.14517L3.34299 9.32884C3.30783 9.47301 3.38149 9.57751 3.46233 9.62717Z" fill="black" />
                                            <path d="M2 6C2.55228 6 3 5.55228 3 5C3 4.44772 2.55228 4 2 4C1.44772 4 1 4.44772 1 5C1 5.55228 1.44772 6 2 6Z" fill="black" />
                                        </svg>
                                    </span>
                                    <span>Verify the data.currency matches what you're expecting</span>
                                </li>
                            </ul>
                            <p>Also, depending on your need, data.is_live will return a boolean. If the boolean is true this signifies that the transaction happened in production and you can proceed to issue real value, else, you don't have to.</p>
                            <p>Sample code used in transaction verification</p>
                            <div className='py-2 w-full h-full'>
                                <CodeBlock code={code} lang="javascript" />
                            </div>
                            <p>:reference is the expected transaction ID</p>
                            <p>Sample transaction verification response</p>
                            <div className='py-2 w-full h-full'>
                                <CodeBlock code={codeTwo} lang="javascript" />
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
                sections={[
                    { id: 'transaction-verification', label: 'Transaction Verification' },
                ]}
            />
        </div>
    );
}
