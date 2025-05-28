import type { ReactNode } from 'react';
import DocumentationPageLayout from '../../Layouts/DocumentationPageLayout';
import ContentSection from '../../Layouts/ContentSection';
import CodeBlockWrapper from '../../Layouts/CodeBlockWrapper';
import PaymentPagesDashboard from '../../img/integrating-klump/PaymentPagesDashboard';
import PaymentPagesModal from '../../img/integrating-klump/PaymentPagesModal';
import content from '../../../data/content/views/integrating-klump/payment-pages.json';
import { CodeTabs } from '../../Codetabs';

interface PaymentPagesViewProps {
    children: ReactNode;
    title: string;
    date?: string;
    readingTime?: string;
}

export default function PaymentPages({ children, readingTime, date, title }: PaymentPagesViewProps) {
    const { paymentPages } = content;

    return (
        <DocumentationPageLayout
            title={title}
            readingTime={readingTime}
            date={date}
            sections={paymentPages.sections}
        >
            <ContentSection
                title={paymentPages.merchantDashboard.title}
                className="border-t border-[#E3E8EE] pt-6 space-y-6 lg:space-y-12"
            >
                {paymentPages.merchantDashboard.description.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
                <div className="space-y-6">
                    <PaymentPagesDashboard />
                    <PaymentPagesModal />
                </div>
            </ContentSection>

            <ContentSection
                title={paymentPages.api.title}
                className="border-t border-[#E3E8EE] pt-6"
            >
                <p>{paymentPages.api.description[0]}</p>
                <CodeTabs tabs={[
                    {
                        label: 'Payment Page without a fixed amount',
                        content: (
                            <div className="py-2 w-full h-full">
                                <CodeBlockWrapper code={paymentPages.api.example.code} lang="bash" />
                            </div>
                        ),
                    },
                    {
                        label: 'Payment Page with a fixed amount',
                        content: (
                            <div className="py-2 w-full h-full">
                                <CodeBlockWrapper code={paymentPages.api.example2.code} lang="bash" />
                            </div>
                        ),
                    },
                ]} />
                <p>{paymentPages.api.description[1]}</p>
            </ContentSection>
        </DocumentationPageLayout>
    );
}
