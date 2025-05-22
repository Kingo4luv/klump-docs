import type { ReactNode } from 'react';
import { FeedbackBox } from '../../home/FeedbackBox';
import TableOfContents from '../../TableOfContents';
import dynamic from 'next/dynamic';
import Callout from '../../Callout';
import WebhookHeadersTable from '../../WebhookHeadersTable';
import { CodeTabs } from '../../Codetabs';
import content from '../../../data/content/views/webhooks/getting-started.json';

interface WebhookGettingStartedViewProps {
    children: ReactNode;
    title: string;
    date?: string;
    readingTime?: string;
}

export default function WebhookGettingStarted({ children, readingTime, date, title }: WebhookGettingStartedViewProps) {
    const CodeBlock = dynamic(() => import('../../CodeBlock'), {
        ssr: false,
    });

    const { gettingStarted } = content;
    
    const code =
    `
    const crypto = require('crypto');
    const secret = process.env.KLUMP_SECRET_KEY;

    /**
    * Grab the body of the event.
    */
    const { body } = req;
    const hash = crypto.createHmac('sha512', secret).update(JSON.stringify(body)).digest('hex');
    if (hash === req.headers['x-klump-signature']) {
        /**
        * The request is verified and it's coming from Klump
        * Go ahead and process it. While at it, return a 200 status code. when you are done.
        */
        res.status(200).send('OK');
    }
    `

    const initiatedCode = 
    `
    {
        "event":"klump.payment.transaction.initiated",
        "data":{
            "id":"d1c4e30f-bb2b-4d72-8701-f9ce3ef51b62",
            "reference":"KLP-1643-891092-6351",
            "amount":1195.48,
            "currency":"NGN",
            "meta_data":{},
            "status":"new",
            "is_live":false,
            "shipping_fee":100,
            "created_at":"2022-02-03T12:24:52.647Z",
            "items":[
                {
                    "id":"13b6be02-4a41-4227-b081-b58ebc6bccf9",
                    "transaction_id":"2dab6b4e-7db5-4dcc-bc03-470e3a417e97",
                    "name":"Timbeland",
                    "image_url":null,
                    "item_url":"http://omin.com/andndnd",
                    "unit_price":"300.00",
                    "quantity":1,
                    "created_at":"2022-02-05T17:59:22.537Z",
                    "updated_at":null
                },
                {
                    "id":"dd6f96fa-9f06-4930-a1fb-47d690a40478",
                    "transaction_id":"2dab6b4e-7db5-4dcc-bc03-470e3a417e97",
                    "name":"Orange Fruit",
                    "image_url":null,
                    "item_url":"http://omin.com/andndnd",
                    "unit_price":"300.00",
                    "quantity":1,
                    "created_at":"2022-02-05T17:59:22.537Z",
                    "updated_at":null
                },
                {
                    "id":"0234f2a1-2fb7-4b83-90ee-650327dbbda4",
                    "transaction_id":"2dab6b4e-7db5-4dcc-bc03-470e3a417e97",
                    "name":"Kiwi Fruit",
                    "image_url":null,
                    "item_url":"http://omin.com/andndnd",
                    "unit_price":"400.00",
                    "quantity":1,
                    "created_at":"2022-02-05T17:59:22.537Z",
                    "updated_at":null
                }
            ],
            "customer":{
                "id":"6ea945c5-0575-473f-8ff9-0baed42cef94",
                "firstname":"Garret",
                "lastname":"Omin",
                "email":"cyberomin@gmail.com",
                "phone":"+2348122632296"
            }
        }
    }
    `
    const successfulCode = 
    `
    {
        "event":"klump.payment.transaction.successful",
        "data":{
            "id":"d1c4e30f-bb2b-4d72-8701-f9ce3ef51b62",
            "reference":"KLP-1643-891092-6351",
            "amount":1195.48,
            "currency":"NGN",
            "meta_data":{},
            "status":"successful",
            "is_live":false,
            "shipping_fee":100,
            "created_at":"2022-02-03T12:24:52.647Z",
            "items":[
                {
                    "id":"13b6be02-4a41-4227-b081-b58ebc6bccf9",
                    "transaction_id":"2dab6b4e-7db5-4dcc-bc03-470e3a417e97",
                    "name":"Timbeland",
                    "image_url":null,
                    "item_url":"http://omin.com/andndnd",
                    "unit_price":"300.00",
                    "quantity":1,
                    "created_at":"2022-02-05T17:59:22.537Z",
                    "updated_at":null
                },
                {
                    "id":"dd6f96fa-9f06-4930-a1fb-47d690a40478",
                    "transaction_id":"2dab6b4e-7db5-4dcc-bc03-470e3a417e97",
                    "name":"Orange Fruit",
                    "image_url":null,
                    "item_url":"http://omin.com/andndnd",
                    "unit_price":"300.00",
                    "quantity":1,
                    "created_at":"2022-02-05T17:59:22.537Z",
                    "updated_at":null
                },
                {
                    "id":"0234f2a1-2fb7-4b83-90ee-650327dbbda4",
                    "transaction_id":"2dab6b4e-7db5-4dcc-bc03-470e3a417e97",
                    "name":"Kiwi Fruit",
                    "image_url":null,
                    "item_url":"http://omin.com/andndnd",
                    "unit_price":"400.00",
                    "quantity":1,
                    "created_at":"2022-02-05T17:59:22.537Z",
                    "updated_at":null
                }
            ],
            "customer":{
                "id":"6ea945c5-0575-473f-8ff9-0baed42cef94",
                "firstname":"Garret",
                "lastname":"Omin",
                "email":"cyberomin@gmail.com",
                "phone":"+2348122632296"
            }
        }
    }
    `
    const abandonedCode = 
    `
     {
        "event": "klump.payment.transaction.abandoned",
        "transaction_id": "f4400d5c-2dd0-4540-bc5c-7467800b3d8b",
        "merchant_id": "45c0e2cd-c208-46db-8640-5bc01a21d9a6",
        "webhook_url": "https://ogabassey.com/wc-api/klp_wc_payment_webhook/",
        "data": {
            "id": "f4400d5c-2dd0-4540-bc5c-7467800b3d8b",
            "user_id": "f79e9fc0-a11d-496e-862f-2ccc96a82567",
            "merchant_id": "45c0e2cd-c208-46db-8640-5bc01a21d9a6",
            "amount": "205952.33",
            "original_amount": "197000.00",
            "commission": "3.00",
            "interest": "3.00",
            "merchant_payout_amount": "191090.00",
            "shipping_fee": null,
            "currency": "NGN",
            "reference": "KLP-1660-945019-8651",
            "merchant_reference": null,
            "status": "abandoned",
            "is_successful": false,
            "is_live": true,
            "meta_data": null,
            "repayment_cycle": 3,
            "loan_is_paid_off": false,
            "is_picked_for_settlement": false,
            "created_at": "2022-08-19T21:36:59.909Z",
            "updated_at": "2022-08-20T22:55:03.479Z",
            "redirect_url": null,
            "processor_webhook_data": null,
            "req_id": "eaHg0WolI7G",
            "checkout_url": "https://checkout.paystack.com/r2jqcd442n1wk2t",
            "source": null,
            "merchant": {
                "id": "45c0e2cd-c208-46db-8640-5bc01a21d9a6",
                "country_id": "e798bb0c-bc65-45c2-87ad-6e7c2243451b",
                "industry_id": "e3663a26-8e49-4d48-8229-8c334e40e9ce",
                "active": true,
                "logo": "https://s3.eu-west-1.amazonaws.com/cdn.useklump.com/logo/logo",
                "address": "25 Montgomery Road Yaba",
                "business_name": "Dapo Limited",
                "firstname": "Mr",
                "lastname": "Merchant",
                "email": "merchant@gmail.com",
                "phone": "+234814111111",
                "role": "merchant",
                "is_live": true,
                "is_business_registered": true,
                "is_email_verified": true,
                "is_phone_verified": false,
                "is_deleted": false,
                "can_transact": true,
                "player_id": null,
                "device_brand": null,
                "device_model": null,
                "state": "Lagos",
                "city": "Lagos Mainland",
                "maximum_loan_amount": null,
                "merchant_pays_commission": true,
                "webhook": [
                    {
                        "id": "b0106134-097a-4ab4-a19b-8db765f91cbd",
                        "merchant_id": "45c0e2cd-c208-46db-8640-5bc01a21d9a6",
                        "url": "https://ogabassey.com/wc-api/klp_wc_payment_webhook/",
                        "environment": "live",
                        "created_at": "2022-04-28T16:26:42.401Z",
                        "updated_at": null
                    }
                ]
            }
        },
        "environment": "live"
    }
    `

    const codeSamples = [
        {
            label: 'Transaction initiated',
            content: (
                <div className="py-2 w-full h-full">
                    <CodeBlock code={initiatedCode} lang="json" />
                </div>
            ),
        },
        {
            label: 'Transaction successful',
            content: (
                <div className="py-2 w-full h-full">
                    <CodeBlock code={successfulCode} lang="json" />
                </div>
            ),
        },
        {
            label: 'Transaction abandoned',
            content: (
                <div className="py-2 w-full h-full">
                    <CodeBlock code={abandonedCode} lang="json" />
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
                        <p>{gettingStarted.intro}</p>
                    </div>
                    <div>
                        <div id="what-are-webhooks" className="text-base text-[#1F1F2D] space-y-2">
                            <h2 className='text-xl font-semibold'>
                                {gettingStarted.whatAreWebhooks.title}
                            </h2>
                            <p>{gettingStarted.whatAreWebhooks.description}</p>
                            <p>{gettingStarted.whatAreWebhooks.integration}</p>
                            <ul className='space-y-1 my-4'>
                                {gettingStarted.whatAreWebhooks.rules.map((rule, index) => (
                                    <li key={index} className='flex items-center space-x-1'>
                                        <span>
                                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M3.46233 9.62717C3.49899 9.65001 3.62816 9.71434 3.75783 9.60334L8.90599 5.20784C8.96616 5.15634 9.00066 5.08051 9.00066 4.99967C9.00066 4.91884 8.96616 4.84301 8.90599 4.79151L3.75783 0.396008C3.70183 0.348174 3.64599 0.333008 3.59766 0.333008C3.53399 0.333008 3.48316 0.359341 3.46233 0.372174C3.38149 0.421841 3.30783 0.526341 3.34299 0.670508L4.36549 4.85417C4.38883 4.94934 4.38883 5.05001 4.36549 5.14517L3.34299 9.32884C3.30783 9.47301 3.38149 9.57751 3.46233 9.62717Z" fill="black" />
                                                <path d="M2 6C2.55228 6 3 5.55228 3 5C3 4.44772 2.55228 4 2 4C1.44772 4 1 4.44772 1 5C1 5.55228 1.44772 6 2 6Z" fill="black" />
                                            </svg>
                                        </span>
                                        <span>{rule}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className='mt-4 space-y-4'>
                                <Callout title="" type="help">
                                    <div className="text-[#1F1F2D] space-y-3">
                                        <p>{gettingStarted.whatAreWebhooks.retryNote}</p>
                                    </div>
                                </Callout>
                                <Callout title="Abandoned Transaction" type="warning">
                                    <div className="text-[#1F1F2D] space-y-3">
                                        <p>{gettingStarted.whatAreWebhooks.abandonedNote}</p>
                                    </div>
                                </Callout>
                            </div>
                            <p className='mt-4'>All webhook requests contain these headers:</p>
                            <div className='mt-5'>
                                <WebhookHeadersTable />
                            </div>
                        </div>
                    </div>
                    <div id="security-and-performance" className="text-base text-[#1F1F2D] space-y-2 border-b border-t border-gray-200 py-4">
                        <h2 className='text-xl font-semibold'>
                            {gettingStarted.securityAndPerformance.title}
                        </h2>
                        <p>{gettingStarted.securityAndPerformance.description}</p>
                        <ul className='space-y-1 my-4'>
                            {gettingStarted.securityAndPerformance.guidelines.map((guideline, index) => (
                                <li key={index} className='flex items-center space-x-1'>
                                    <span>
                                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.46233 9.62717C3.49899 9.65001 3.62816 9.71434 3.75783 9.60334L8.90599 5.20784C8.96616 5.15634 9.00066 5.08051 9.00066 4.99967C9.00066 4.91884 8.96616 4.84301 8.90599 4.79151L3.75783 0.396008C3.70183 0.348174 3.64599 0.333008 3.59766 0.333008C3.53399 0.333008 3.48316 0.359341 3.46233 0.372174C3.38149 0.421841 3.30783 0.526341 3.34299 0.670508L4.36549 4.85417C4.38883 4.94934 4.38883 5.05001 4.36549 5.14517L3.34299 9.32884C3.30783 9.47301 3.38149 9.57751 3.46233 9.62717Z" fill="black" />
                                            <path d="M2 6C2.55228 6 3 5.55228 3 5C3 4.44772 2.55228 4 2 4C1.44772 4 1 4.44772 1 5C1 5.55228 1.44772 6 2 6Z" fill="black" />
                                        </svg>
                                    </span>
                                    <span>{guideline}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div id="signature-and-webhook-verification" className="text-base text-[#1F1F2D] space-y-2">
                        <h2 className='text-xl font-semibold'>
                            {gettingStarted.signatureVerification.title}
                        </h2>
                        <p>{gettingStarted.signatureVerification.description}</p>
                        <div className='py-2 w-full h-full'>
                            <CodeBlock code={code} lang="javascript" />
                        </div>
                    </div>
                    <div id="responding-to-event" className="text-base text-[#1F1F2D] space-y-2 border-b border-t border-gray-200 py-6">
                        <h2 className='text-xl font-semibold'>
                            {gettingStarted.respondingToEvent.title}
                        </h2>
                        <p>{gettingStarted.respondingToEvent.description}</p>
                    </div>
                    <div id="supported-event" className="text-base text-[#1F1F2D] space-y-3">
                        <h2 className='text-xl font-semibold'>
                            {gettingStarted.supportedEvent.title}
                        </h2>
                        <p>{gettingStarted.supportedEvent.description}</p>
                        <div className='py-2 w-full h-full'>
                            <CodeTabs tabs={codeSamples}/>
                        </div>
                        <Callout title="Idempotent Webhooks" type="warning">
                            <div className="text-[#1F1F2D] space-y-3">
                                <p>{gettingStarted.supportedEvent.idempotentNote}</p>
                            </div>
                        </Callout>
                    </div>
                </article>

                {/* Feedback */}
                <div className="mt-10">
                    <FeedbackBox />
                </div>
            </div>

            <TableOfContents sections={content.sections} />
        </div>
    );
}
