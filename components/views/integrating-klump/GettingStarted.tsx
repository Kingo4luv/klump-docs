import type { ReactNode } from 'react';
import DocumentationPageLayout from '../../Layouts/DocumentationPageLayout';
import ContentSection from '../../Layouts/ContentSection';
import CodeBlockWrapper from '../../Layouts/CodeBlockWrapper';
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

    return (
        <DocumentationPageLayout
            title={title}
            readingTime={readingTime}
            date={date}
            sections={gettingStarted.sections}
        >
            <ContentSection>
                {gettingStarted.intro.description.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
                <CodeBlockWrapper code={gettingStarted.intro.scriptExample} lang="javascript" />
            </ContentSection>

            <ContentSection
                id="checkout-button"
                title={gettingStarted.checkoutButton.title}
            >
                <p>{gettingStarted.checkoutButton.description}</p>
                <div className="mt-12">
                    <KlumpButton />
                </div>
            </ContentSection>

            <ContentSection
                id="checkout-widget"
                title={gettingStarted.checkoutWidget.title}
            >
                <p>{gettingStarted.checkoutWidget.description}</p>
                <div className="mt-12">
                    <CheckoutWidget />
                </div>
                <p className="mt-3">{gettingStarted.checkoutWidget.initializationExample.description}</p>
                <CodeBlockWrapper 
                    code={gettingStarted.checkoutWidget.initializationExample.code} 
                    lang="javascript" 
                />
                <div className="space-y-3">
                    {gettingStarted.checkoutWidget.afterCodeDescription.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </div>
                <div className="my-4">
                    <Callout title={gettingStarted.checkoutWidget.transactionAmountWarning.title} type="warning">
                        <div className="text-[#1F1F2D] space-y-3">
                            <p>{gettingStarted.checkoutWidget.transactionAmountWarning.description}</p>
                            <CodeBlockWrapper 
                                code={gettingStarted.checkoutWidget.transactionAmountWarning.formula} 
                                lang="javascript" 
                                className="py-2"
                            />
                            <div>
                                {gettingStarted.checkoutWidget.transactionAmountWarning.notes.map((note, index) => (
                                    <p key={index}>{note}</p>
                                ))}
                            </div>
                        </div>
                    </Callout>
                </div>
                <p>{gettingStarted.checkoutWidget.verificationNote}</p>
            </ContentSection>

            <ContentSection
                id="call-to-action-banner"
                title={gettingStarted.callToActionBanner.title}
            >
                {gettingStarted.callToActionBanner.description.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
                <CodeBlockWrapper 
                    code={gettingStarted.callToActionBanner.example.code} 
                    lang="javascript" 
                />
                {gettingStarted.callToActionBanner.afterCodeDescription.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
                <div className="my-5">
                    <CallToAction />
                </div>
                <Callout title={gettingStarted.callToActionBanner.warning.title} type="warning">
                    <div className="text-[#1F1F2D] space-y-3">
                        <p>{gettingStarted.callToActionBanner.warning.description}</p>
                    </div>
                </Callout>
            </ContentSection>
        </DocumentationPageLayout>
    );
}
