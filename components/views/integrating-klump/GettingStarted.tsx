import type { ReactNode } from 'react';
import { FeedbackBox } from '../../home/FeedbackBox';
import dynamic from 'next/dynamic';
import TableOfContents from '../../TableOfContents';
import KlumpButton from '../../img/integrating-klump/KlumpButton';
import CheckoutWidget from '../../img/integrating-klump/CheckoutWidget';
import Callout from '../../Callout';
import CallToAction from '../../img/integrating-klump/CallToAction';
import content from '../../../data/content/views/integrating-klump/getting-started.json';

interface GettingStartedViewProps {
    children: ReactNode;
    title: string;
    date?: string;
    readingTime?: string;
}

export default function IntegratingKlumpGettingStarted({ children, readingTime, date, title }: GettingStartedViewProps) {
    const { gettingStarted } = content;
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
                            {gettingStarted.intro.description.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                            <div className='py-4 w-full h-full'>
                                <CodeBlock code={gettingStarted.intro.scriptExample} lang="javascript" />
                            </div>
                        </div>
                    </div>

                    <div id='checkout-button'>
                        <h2 className='text-2xl font-bold text-[#1F1F2D]'>{gettingStarted.checkoutButton.title}</h2>
                        <div className="mt-4">
                            {gettingStarted.checkoutButton.description}
                        </div>
                        <KlumpButton className="mt-12" />
                    </div>

                    <div id='checkout-widget'>
                        <h2 className='text-2xl font-bold text-[#1F1F2D]'>{gettingStarted.checkoutWidget.title}</h2>
                        <p className="mt-4">
                            {gettingStarted.checkoutWidget.description}
                        </p>
                        <CheckoutWidget className="mt-12" />
                        <p className='mt-3'>{gettingStarted.checkoutWidget.initializationExample.description}</p>
                        <div className='py-4 w-full h-full'>
                            <CodeBlock code={gettingStarted.checkoutWidget.initializationExample.code} lang="javascript" />
                        </div>
                        <div className='my-4 space-y-3'>
                            {gettingStarted.checkoutWidget.afterCodeDescription.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                        <Callout title={gettingStarted.checkoutWidget.transactionAmountWarning.title} type="warning">
                            <div className="text-[#1F1F2D] space-y-3">
                                <p>{gettingStarted.checkoutWidget.transactionAmountWarning.description}</p>
                                <CodeBlock code={gettingStarted.checkoutWidget.transactionAmountWarning.formula} lang="javascript" />
                                <div>
                                    {gettingStarted.checkoutWidget.transactionAmountWarning.notes.map((note, index) => (
                                        <p key={index}>{note}</p>
                                    ))}
                                </div>
                            </div>
                        </Callout>
                        <p className='mt-3'>{gettingStarted.checkoutWidget.verificationNote}</p>
                    </div>

                    <div id='call-to-action-banner'>
                        <h2 className='text-2xl font-bold text-[#1F1F2D]'>{gettingStarted.callToActionBanner.title}</h2>
                        {gettingStarted.callToActionBanner.description.map((paragraph, index) => (
                            <p key={index} className="mt-4">{paragraph}</p>
                        ))}
                        <div className='py-4 w-full h-full'>
                            <CodeBlock code={gettingStarted.callToActionBanner.example.code} lang="javascript" />
                        </div>
                        {gettingStarted.callToActionBanner.afterCodeDescription.map((paragraph, index) => (
                            <p key={index} className='mt-3'>{paragraph}</p>
                        ))}
                        <div className='my-5'>
                            <CallToAction />
                        </div>
                        <Callout title={gettingStarted.callToActionBanner.warning.title} type="warning">
                            <div className="text-[#1F1F2D] space-y-3">
                                <p>{gettingStarted.callToActionBanner.warning.description}</p>
                            </div>
                        </Callout>
                    </div>
                </article>

                {/* Feedback */}
                <div className="mt-10">
                    <FeedbackBox />
                </div>
            </div>

            <TableOfContents sections={gettingStarted.sections} />
        </div>
    );
}
