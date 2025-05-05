import type { ReactNode } from 'react';
import { FeedbackBox } from '../../home/FeedbackBox';
import dynamic from 'next/dynamic';
import TableOfContents from '../../TableOfContents';
import KlumpButton from '../../img/integrating-klump/KlumpButton';
import CheckoutWidget from '../../img/integrating-klump/CheckoutWidget';
import Callout from '../../Callout';
import CallToAction from '../../img/integrating-klump/CallToAction';

interface GettingStartedViewProps {
    children: ReactNode;
    title: string;
    date?: string;
    readingTime?: string;
}

export default function IntegratingKlumpGettingStarted({ children, readingTime, date, title }: GettingStartedViewProps) {
    

    const CodeBlock = dynamic(() => import('../../CodeBlock'), {
        ssr: false,
    });
    const code = `<script src="https://js.useklump.com/klump.js" defer></script>`

    const codeTwo = 
    `
    <script>
        const payload = {
            publicKey: 'klp_pk_1234abdc5678',
            data: {
                amount: 4100,
                shipping_fee: 100,
                currency: 'NGN',
                first_name: 'John',
                last_name: 'Doe',
                email: 'john@example.com',
                phone: '08012345678',
                redirect_url: 'https://verygoodmerchant.com/checkout/confirmation',
                merchant_reference: 'what-ever-you-want-this-to-be',
                meta_data: {
                customer: 'Elon Musk',
                email: 'musk@spacex.com'
                },
                items: [
                    {
                        image_url:
                            'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                        item_url: 'https://www.paypal.com/in/webapps/mpp/home',
                        name: 'Awesome item',
                        unit_price: 2000,
                        quantity: 2,
                    }
                ]
            },
            onSuccess: (data) => {
                console.log('html onSuccess will be handled by the merchant');
                console.log(data);
                ok = data;
                return data;
            },
            onError: (data) => {
                console.log('html onError will be handled by the merchant');
                console.log(data);
            },
            onLoad: (data) => {
                console.log('html onLoad will be handled by the merchant');
                console.log(data);
            },
            onOpen: (data) => {
                console.log('html OnOpen will be handled by the merchant');
                console.log(data);
            },
            onClose: (data) => {
                console.log('html onClose will be handled by the merchant');
                console.log(data);
            }
        }
        document.getElementById('klump__checkout').addEventListener('click', function () {
            const klump = new Klump(payload);
        });
    </script>
    `

    const codeThree = 
    `
    <div id="klump__ad">    
        <input type="number" value="2000" id="klump__price">    
        <input type="text" value="klp_pk_abcde12345fghijkl" id="klump__merchant__public__key">    
        <input type="text" value="NGN" id="klump__currency"> 
    </div>
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
                                To begin using Klump as your preferred By Now, Pay Later solution, you must first create an account. Simply register as a merchant via the merchant dashboard. When you're finished, log into your account, go to the settings page, check the API & Webhook tabs, and copy your Klump public key. We'll be needing it soon.
                            </p>
                            <p>
                                To begin integrating Klump as a merchant, simply place the klump.js script in the header section of your website. When you finish this process, you'll be halfway there.
                            </p>

                            <div className='py-4 w-full h-full'>
                                <CodeBlock code={code} lang="javascript" />
                            </div>

                        </div>
                    </div>
                    <div id='checkout-button'>
                        <h2 className='text-2xl font-bold text-[#1F1F2D]'>Klump Checkout Button</h2>
                        <div className="mt-4">
                            The checkout button is the fastest way to start accepting payments using Klump. We recommend placing it on your website’s product details page or checkout page. To activate the checkout button, simply copy and paste this code:
                            <code className="bg-gray-100 text-gray-800 text-sm px-1.5 py-0.5 rounded font-mono">
                                &lt;div id="klump__checkout"&gt;&lt;/div&gt;
                            </code>.
                            This will automatically launch the Klump checkout button on that page.
                        </div>

                        <KlumpButton className="mt-12" />
                    </div>
                    <div id='checkout-widget'>
                        <h2 className='text-2xl font-bold text-[#1F1F2D]'>Klump Checkout Widget</h2>
                        <p className="mt-4">
                            The checkout widget is where the transaction happens. The widget is <strong>ONLY</strong> activated when a user clicks on the Checkout button. Installing the button via
                            <code className="bg-gray-100 text-gray-800 text-sm px-1.5 py-0.5 rounded font-mono">
                                &lt;div id="klump__checkout"&gt;&lt;/div&gt;
                            </code> isn't the end of the road — we need to attach an event handler to it and also pass the product/item information to an instance of Klump.
                        </p>
                        <CheckoutWidget className="mt-12" />
                        <p className='mt-3'>Sample code initialization for the Klump checkout button that triggers the Klump checkout widget.</p>
                        <div className='py-4 w-full h-full'>
                            <CodeBlock code={codeTwo} lang="javascript" />
                        </div>
                        <div className='my-4 space-y-3'>
                            <p>
                                From the code above, the Public Key(publicKey) required is the Klump merchant's public key that we mentioned above. You will need it here. The data object carries some important information like amount which is the total transaction amount.
                            </p>
                            <p>The next item in the data object is the shipping fee(shipping_fee) optional. The shipping fee here is optional as not all merchants will need to ship their products or services.</p>
                            <p>
                                Currency(currency) required is the next item in the data object. Today, all currency must be set to NGN given that Klump is only operational in Nigeria.
                            </p>
                            <p>From the data object above, first_name, last_name, email, phone are all optional fields.</p>
                            <p>Redirect URL(redirect_url) This isn't required but can come in handy for merchants who want to show their customers a custom message or a confirmation page after a successful transaction.</p>
                            <p>Merchant Transaction reference(merchant_reference) isn't a strictly required field, Klump allows a merchant to send their own reference. This is mostly for the merchant's internal use.</p>
                            <p>Metadata(meta_data) - This is another field that isn't required, but merchants can use it to store personal information relating to an order.</p>
                            <p>
                                Items(items) required is the next key in the data object. It must be set as an array and should have the following required keys unit_price, quantity and name. Unit price(unit_price) must always be an integer. Image URL(image_url) and item link(item_link) are nice to have as they provide a visual cue as to what was purchased and an easy path to viewing the said item. You can add as many products as necessary to the items array.
                            </p>
                        
                        </div>
                        <Callout title="Transaction Amount." type="warning">
                            <div className="text-[#1F1F2D] space-y-3">
                                <p>
                                    The amount here must be equal to the sum of the items in the items array plus the optional shipping fee(shipping_fee). In the example code above, the amount is derived using the formula below
                                </p>
                                <CodeBlock code={`amount = (unit_price * quantity) + shipping_fee`} lang="javascript" />
                                <div>
                                    <p>
                                        Please note that if the amount provided doesn't match the sum of unit price, quantity and the optional shipping fee, the transaction wouldn't be accepted.
                                    </p>
                                    <p> <strong>PS:</strong> amount and shipping_fee must be integers.</p>
                                </div>
                            </div>
                        </Callout>
                        <p className='mt-3'>At the end of every successful transaction, it's advisable that you verify the transaction before giving value. You can verify a transaction using the transaction Transaction verification endpoint or via webhooks.</p>
                    </div>
                    <div id='call-to-action-banner'>
                        <h2 className='text-2xl font-bold text-[#1F1F2D]'>Klump Call To Action Banner</h2>
                        <p className="mt-4">
                            Using a call-to-action banner is one of the simplest ways to sell Klump to prospective customers without them having to click the checkout button to find out for themselves. The banner provides a simple and easy-to-understand message that sells Klump to your customer.
                        </p>
                        <p className="mt-4">
                            To integrate the Klump call-to-action banner, simply add the line of code below to the location where you want the ad to appear.
                        </p>
                        <div className='py-4 w-full h-full'>
                            <CodeBlock code={codeThree} lang="javascript" />
                        </div>
                        {/* <CheckoutWidget className="mt-12" /> */}
                        <p className='mt-3'>
                            Please note, you will need to include 3 core components, the amount, the merchant public key and the currency. Please note, the amount, in this case, is 2000, the public key is klp_pk_abcde12345fghijkl and the currency is NGN.
                        </p>
                        <p className='mt-3 mb-5'>
                            When this is done correctly, a banner will appear on the part of the page where this was added.
                        </p>
                        <div className='my-5'>
                            <CallToAction />
                        </div>
                        <Callout title="PS." type="warning">
                            <div className="text-[#1F1F2D] space-y-3">
                                <p>
                                    You will need to include klump.js for this to work.
                                </p>
                            </div>
                        </Callout>
                    </div>
                </article>

                {/* Feedback */}
                <div className="mt-10">
                    <FeedbackBox />
                </div>
            </div>

            <TableOfContents
                sections={[
                    { id: 'getting-started', label: 'Getting Started' },
                    { id: 'checkout-button', label: 'Klump Checkout Button' },
                    { id: 'checkout-widget', label: 'Klump Checkout Widget' },
                    { id: 'call-to-action-banner', label: 'Klump Call to action banner' },
                ]}
            />
        </div>
    );
}
