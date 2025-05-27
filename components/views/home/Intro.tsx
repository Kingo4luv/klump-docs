import type { ReactNode } from 'react';
import DocumentationPageLayout from '../../Layouts/DocumentationPageLayout';
import ContentSection from '../../Layouts/ContentSection';
import Callout from '../../Callout';
import IntoPageImage from '../../img/intro/PageImage';
import introContent from '../../../data/content/views/home/intro.json';

interface IntoLayoutProps {
    children: ReactNode;
    title: string;
    date?: string;
    readingTime?: string;
}

export default function Intro({ children, readingTime, date, title }: IntoLayoutProps) {
    const sections = [
        { id: 'introduction', label: 'Introduction' },
    ];

    return (
        <DocumentationPageLayout
            title={title}
            readingTime={readingTime}
            date={date}
            sections={sections}
            titleId="introduction"
        >
            <ContentSection>
                <div className="w-full lg:w-[821px] h-[419px]">
                    <IntoPageImage />
                </div>

                <article className="prose prose-blue max-w-none space-y-4 my-6 lg:my-10 text-base text-[#1F1F2D]">
                    {introContent.content.mainText.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </article>

                <Callout title={introContent.content.callout.title} type="help">
                    {introContent.content.callout.message} <a href={introContent.content.callout.link.url} className='text-indigo-600'>{introContent.content.callout.link.text}</a>
                </Callout>
            </ContentSection>
        </DocumentationPageLayout>
    );
}
