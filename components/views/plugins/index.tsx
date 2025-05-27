import type { ReactNode } from 'react';
import DocumentationPageLayout from '../../Layouts/DocumentationPageLayout';
import ContentSection from '../../Layouts/ContentSection';
import pluginsContent from '../../../data/content/views/plugins/home.json';
import { IconComponents } from './icons';

interface PluginsViewProps {
    children: ReactNode;
    title: string;
    date?: string;
    readingTime?: string;
}

export default function Plugins({ children, readingTime, date, title }: PluginsViewProps) {
    return (
        <DocumentationPageLayout
            title={title}
            readingTime={readingTime}
            date={date}
            sections={pluginsContent.sections}
            titleId="plugins"
        >
            <ContentSection>
                <div className="border-b border-t border-[#E4E4E7] py-6">
                    <div id="what-are-webhooks" className="text-base text-[#1F1F2D] space-y-2">
                        <h2 className='text-xl font-semibold'>
                            {pluginsContent.introduction.title}
                        </h2>
                        <p>
                            {pluginsContent.introduction.description}
                        </p>
                    </div>
                </div>

                {/* Plugins Section */}
                <div className="mb-6 pb-6">
                    <h3 className="text-xl font-semibold mb-4">{pluginsContent.plugins.title}</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {pluginsContent.plugins.items.map((plugin, index) => (
                            <a key={index} href={plugin.url} className="flex items-center gap-2 px-4 py-6 bg-[#F7FAFC] rounded-md border border-[#E3E8EE]">
                                {IconComponents[plugin.icon]}
                                <span className="text-sm font-medium text-gray-800">{plugin.name}</span>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Libraries Section */}
                <div className="mb-6 border-t border-[#E3E8EE] py-6">
                    <h3 className="text-xl font-semibold mb-4">{pluginsContent.libraries.title}</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {pluginsContent.libraries.items.map((library, index) => (
                            <a key={index} href={library.url} target="_blank" className="block bg-[#F7FAFC] rounded-md border border-[#E3E8EE] p-4 hover:bg-gray-100 transition">
                                <div className="flex items-center gap-2 mb-2">
                                    {IconComponents[library.icon]}
                                    <span className="font-medium text-[#1F1F2D]">{library.name}</span>
                                </div>
                                <div className="flex items-center gap-1 text-sm text-[#5F6368] pl-0 sm:pl-2">
                                    {IconComponents.github}
                                    {library.url}
                                </div>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Packages Section */}
                <div className="mb-6 border-t border-[#E3E8EE] py-6">
                    <h3 className="text-xl font-semibold mb-4">{pluginsContent.packages.title}</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {pluginsContent.packages.items.map((pkg, index) => (
                            <a key={index} href={pkg.url} className="flex items-center gap-2 px-4 py-6 bg-[#F7FAFC] rounded-md border border-[#E3E8EE]">
                                {IconComponents[pkg.icon]}
                                <span className="text-sm font-medium text-gray-800">{pkg.name}</span>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Community Contributions Section */}
                <div className="mb-6 border-t border-[#E3E8EE] py-6">
                    <h3 className="text-xl font-semibold mb-4">{pluginsContent.communityContributions.title}</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {pluginsContent.communityContributions.items.map((contribution, index) => (
                            <a key={index} href={contribution.url} className="flex items-center gap-2 px-4 py-6 bg-[#F7FAFC] rounded-md border border-[#E3E8EE]">
                                {IconComponents[contribution.icon]}
                                <span className="text-sm font-medium text-gray-800">{contribution.name}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </ContentSection>
        </DocumentationPageLayout>
    );
}
