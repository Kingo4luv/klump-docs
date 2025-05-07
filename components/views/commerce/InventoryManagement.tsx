import type { ReactNode } from 'react';
import { FeedbackBox } from '../../home/FeedbackBox';
import TableOfContents from '../../TableOfContents';
import dynamic from 'next/dynamic';
import Callout from '../../Callout';
import WebhookHeadersTable from '../../WebhookHeadersTable';
import { CodeTabs } from '../../Codetabs';

interface InventoryManagemntViewProps {
    children: ReactNode;
    title: string;
    date?: string;
    readingTime?: string;
}

export default function InventoryManagemnt({ children, readingTime, date, title }: InventoryManagemntViewProps) {

    const CodeBlock = dynamic(() => import('../../CodeBlock'), {
        ssr: false,
    });

    const updateCode = 
    `
    curl --location --request PATCH 'https://api.useklump.com/v1/products/update-webhook' \\
    --header 'Content-Type: application/json' \\
    --header 'klump-secret-key: {{KLUMP_SEC_KEY}}' \\
    --data '{"name": "iPhone 15", "price": 150000, "quantity": 1}'
    `

    const UpdateProductInventory = [
        {
            label: 'Update Product Inventory',
            content: (
                <div className="py-2 w-full h-full">
                    <CodeBlock code={updateCode} lang="json" />
                </div>
            ),
        },
    ];
    const sampleResponse = 
    `
    {
        "id": "bb343101-612c-4f0c-a252-bc4439e26b8f",
        "merchant_id": "936b8f34-59d9-4aca-a2a8-f26013b03bd4",
        "product_category_id": "49a685bc-499e-4f04-9b20-c48093a32ab8",
        "product_sub_category_id": "54f94900-ac58-4ce7-8e4e-e68fa5cd4aa3",
        "name": "iPhone 15",
        "slug": "iphone-15-936b8f34-59d9-4aca-a2a8-f26013b03bd4",
        "description": "It's a good phone.",
        "old_price": "20000.00",
        "deprecated_discount": 10,
        "quantity": 5,
        "preview_image": null,
        "created_at": "2023-12-12T15:35:47.445Z",
        "updated_at": "2023-12-18T16:51:42.090Z",
        "deleted_at": null,
        "is_deleted": false,
        "is_published": true,
        "summary": null,
        "is_approved": true,
        "price": "38784993.00",
        "updated_by": null,
        "size": null,
        "weight": null
    }
    `

    const Response = [
        {
            label: 'Json',
            content: (
                <div className="py-2 w-full h-full">
                    <CodeBlock code={sampleResponse} lang="json" />
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
                    <div className='border-t border-[#E3E8EE] pt-6'>
                        <div className="text-base text-[#1F1F2D] space-y-2">
                            <h2 className='text-xl font-semibold'>
                                Klump's ecommerce marketplace
                            </h2>
                            <p>
                                Klump Commerce is Klump's ecommerce marketplace. Merchants without a website can create a storefront via https://store.useklump.com and start selling their wares in minutes.
                            </p>
                            <p>
                                We recognize that merchants, often have other sources where they sell their goods. This, in itself, isn't a problem. The problem arises when it's time for inventory reconciliation.
                            </p>
                            <p>
                                It isn't unusual for merchants to run out of inventory via other outlets, while their storefront on Klump Commerce still shows SKUs as being available. To solve this problem, we developed a bridge between any ecommerce store and Klump.
                            </p>
                            <p>
                                The two frequently changed variables on most ecommerce platforms are price and quantity. With Klump's API, merchants can update these parameters as need be thereby helping to keep inventory in sync.
                            </p>
                            <div className='py-2 w-full h-full'>
                                <CodeTabs tabs={UpdateProductInventory} />
                            </div>
                            <p>
                                With the code above, Klump will update the price of the item to 150000 and the quantity to 1. Please note, it's important to always include the name of the product you want to update. This is a required field.
                            </p>
                            <p>
                                Sample response
                            </p>
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

            <TableOfContents
                sections={[
                    { id: 'inventory-management', label: 'Inventory Management' },
                ]}
            />
        </div>
    );
}
