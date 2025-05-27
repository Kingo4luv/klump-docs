import type { ReactNode } from 'react';
import DocumentationPageLayout from '../../Layouts/DocumentationPageLayout';
import ContentSection from '../../Layouts/ContentSection';
import ErrorsTable from '../../ErrorsTable';
import errorsContent from '../../../data/content/views/home/errors.json';

interface ErrorsLayoutProps {
    children: ReactNode;
    title: string;
    date?: string;
    readingTime?: string;
}

export default function Errors({ children, readingTime, date, title }: ErrorsLayoutProps) {
    const { content, sections } = errorsContent;
    
    return (
        <DocumentationPageLayout
            title={title}
            readingTime={readingTime}
            date={date}
            sections={sections}
            titleId="errors"
        >
            <ContentSection>
                <p>{content.main}</p>
                
                <ErrorsTable />
            </ContentSection>
        </DocumentationPageLayout>
    );
}
