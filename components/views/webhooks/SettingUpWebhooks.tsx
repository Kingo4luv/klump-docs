import type { ReactNode } from 'react';
import DocumentationPageLayout from '../../Layouts/DocumentationPageLayout';
import ContentSection from '../../Layouts/ContentSection';
import SettingUpWebhook from '../../img/webhook/SettingUpWebhook';
import content from '../../../data/content/views/webhooks/setting-up-webhooks.json';

interface SettingUpWebhooksViewProps {
    children: ReactNode;
    title: string;
    date?: string;
    readingTime?: string;
}

export default function SettingUpWebhooks({ children, readingTime, date, title }: SettingUpWebhooksViewProps) {
    const { settingUpWebhooks } = content;

    return (
        <DocumentationPageLayout
            title={title}
            readingTime={readingTime}
            date={date}
            sections={settingUpWebhooks.sections}
            titleId="setting-up-webhook"
        >
            <ContentSection className="border-t border-[#E3E8EE] pt-6 space-y-6 lg:space-y-12">
                {settingUpWebhooks.description.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
                <div className="space-y-6">
                    <SettingUpWebhook />
                </div>
            </ContentSection>
        </DocumentationPageLayout>
    );
}
