import type { ReactNode } from 'react';
import DocumentationPageLayout from '../../Layouts/DocumentationPageLayout';
import ContentSection from '../../Layouts/ContentSection';
import Callout from '../../Callout';
import EnvironmentTable from '../../EnvironmentTable';
import environmentContent from '../../../data/content/views/home/environment.json';

interface EnvironmentLayoutProps {
    children: ReactNode;
    title: string;
    date?: string;
    readingTime?: string;
}

export default function Environment({ children, readingTime, date, title }: EnvironmentLayoutProps) {
    return (
        <DocumentationPageLayout
            title={title}
            readingTime={readingTime}
            date={date}
            pageId="environment"
            sections={environmentContent.sections}
        >
            <ContentSection>
                <p>{environmentContent.content.main}</p>
                
                <EnvironmentTable />

                <Callout title={environmentContent.content.callout.title} type="warning">
                    <div className="text-[#1F1F2D] space-y-2">
                        {environmentContent.content.callout.content.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                </Callout>
            </ContentSection>
        </DocumentationPageLayout>
    );
}
