import type { ReactNode } from 'react';
import DocumentationPageLayout from '../../Layouts/DocumentationPageLayout';
import ContentSection from '../../Layouts/ContentSection';
import TestCredentials from '../../TestCredentialsTable';
import testCredentialsContent from '../../../data/content/views/home/test-credentials.json';

interface TestCredentialsLayoutProps {
    children: ReactNode;
    title: string;
    date?: string;
    readingTime?: string;
}

export default function TestCredentialsView({ children, readingTime, date, title }: TestCredentialsLayoutProps) {
    const { content, sections } = testCredentialsContent;
    
    return (
        <DocumentationPageLayout
            title={title}
            readingTime={readingTime}
            date={date}
            sections={sections}
            titleId="test-credentials"
        >
            <ContentSection>
                <p>{content.main}</p>
                
                <TestCredentials />
            </ContentSection>
        </DocumentationPageLayout>
    );
}
