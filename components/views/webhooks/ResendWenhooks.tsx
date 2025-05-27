import type { ReactNode } from 'react';
import DocumentationPageLayout from '../../Layouts/DocumentationPageLayout';
import ContentSection from '../../Layouts/ContentSection';
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

    return (
        <DocumentationPageLayout
            title={title}
            readingTime={readingTime}
            date={date}
            sections={resendWebhooks.sections}
            titleId="resend-webhooks"
        >
            <ContentSection>
                {resendWebhooks.description.map((paragraph, index) => (
                    <p key={index} className='mb-4'>{paragraph}</p>
                ))}
                
                <div className='space-y-3'>
                    <div className='py-2 w-full h-full'>
                        <CodeBlock code={resendWebhooks.codeSnippets.webhookRequest} lang="javascript" />
                    </div>
                    <p>{resendWebhooks.note}</p>
                    <div className='py-2 w-full h-full'>
                        <CodeBlock code={resendWebhooks.codeSnippets.webhookResponse} lang="javascript" />
                    </div>
                </div>
            </ContentSection>
        </DocumentationPageLayout>
    );
}
