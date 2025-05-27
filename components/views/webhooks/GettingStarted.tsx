import type { ReactNode } from 'react';
import DocumentationPageLayout from '../../Layouts/DocumentationPageLayout';
import ContentSection from '../../Layouts/ContentSection';
import CodeBlockWrapper from '../../Layouts/CodeBlockWrapper';
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
    const { gettingStarted } = content;

    const codeSamples = [
        {
            label: 'Transaction initiated',
            content: (
                <div className="py-2 w-full h-full">
                    <CodeBlockWrapper code={gettingStarted.supportedEvent.eventExamples.transactionInitiated} lang="json" />
                </div>
            ),
        },
        {
            label: 'Transaction successful',
            content: (
                <div className="py-2 w-full h-full">
                    <CodeBlockWrapper code={gettingStarted.supportedEvent.eventExamples.transactionSuccessful} lang="json" />
                </div>
            ),
        },
        {
            label: 'Transaction abandoned',
            content: (
                <div className="py-2 w-full h-full">
                    <CodeBlockWrapper code={gettingStarted.supportedEvent.eventExamples.transactionAbandoned} lang="json" />
                </div>
            ),
        },
    ];


    return (
        <DocumentationPageLayout
            title={title}
            readingTime={readingTime}
            date={date}
            sections={content.sections}
        >
            <ContentSection>
                <p>{gettingStarted.intro}</p>
            </ContentSection>

            <ContentSection
                id="what-are-webhooks"
                title={gettingStarted.whatAreWebhooks.title}
            >
                <p>{gettingStarted.whatAreWebhooks.description}</p>
                <p>{gettingStarted.whatAreWebhooks.integration}</p>
                <ul className="space-y-1 my-4">
                    {gettingStarted.whatAreWebhooks.rules.map((rule, index) => (
                        <li key={index} className="flex items-center space-x-1">
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
                <div className="mt-4 space-y-4">
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
                <p className="mt-4">All webhook requests contain these headers:</p>
                <div className="mt-5">
                    <WebhookHeadersTable />
                </div>
            </ContentSection>

            <ContentSection
                id="security-and-performance"
                title={gettingStarted.securityAndPerformance.title}
                className="border-b border-t border-gray-200 py-4"
            >
                <p>{gettingStarted.securityAndPerformance.description}</p>
                <ul className="space-y-1 my-4">
                    {gettingStarted.securityAndPerformance.guidelines.map((guideline, index) => (
                        <li key={index} className="flex items-center space-x-1">
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
            </ContentSection>

            <ContentSection
                id="signature-and-webhook-verification"
                title={gettingStarted.signatureVerification.title}
            >
                <p>{gettingStarted.signatureVerification.description}</p>
                <CodeBlockWrapper code={gettingStarted.signatureVerification.codeExample} lang="javascript" className="py-2 w-full h-full" />
            </ContentSection>

            <ContentSection
                id="responding-to-event"
                title={gettingStarted.respondingToEvent.title}
                className="border-b border-t border-gray-200 py-6"
            >
                <p>{gettingStarted.respondingToEvent.description}</p>
            </ContentSection>

            <ContentSection
                id="supported-event"
                title={gettingStarted.supportedEvent.title}
            >
                <p>{gettingStarted.supportedEvent.description}</p>
                <div className="py-2 w-full h-full">
                    <CodeTabs tabs={codeSamples}/>
                </div>
                <Callout title="Idempotent Webhooks" type="warning">
                    <div className="text-[#1F1F2D] space-y-3">
                        <p>{gettingStarted.supportedEvent.idempotentNote}</p>
                    </div>
                </Callout>
            </ContentSection>
        </DocumentationPageLayout>
    );
}
