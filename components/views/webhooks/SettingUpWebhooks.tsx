import type { ReactNode } from 'react';
import { FeedbackBox } from '../../home/FeedbackBox';
import TableOfContents from '../../TableOfContents';
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
        <div id='setting-up-webhook' className="max-w-7xl mx-auto px-4 lg:px-6 py-6 lg:flex gap-8">
            {/* Main content */}
            <div className="w-full lg:w-3/4">
                {/* Meta info */}
                <div className="mb-4 flex text-sm text-gray-500 items-center space-x-3">
                    {readingTime && (
                        <div className="flex items-center space-x-1">
                            <span className="text-[#444453]">Reading time</span>
                            <span className="text-[#1F1F2D]">{readingTime}</span>
                        </div>
                    )}
                    {date && (
                        <div className="flex items-center space-x-1">
                            <span className="text-[#444453]">Published</span>
                            <span className="text-[#1F1F2D]">{date}</span>
                        </div>
                    )}
                </div>

                {/* Page Title */}
                <h1 className="text-3xl font-bold text-[#1F1F2D] my-6">
                    {title}
                </h1>

                {/* Article Content */}
                <article className="prose prose-blue max-w-none space-y-8 my-6  text-base text-[#1F1F2D]">
                    <div className='border-t text-[#1F1F2D] border-[#E3E8EE] pt-6 space-y-6 lg:space-y-12'>
                        <div>
                            {settingUpWebhooks.description.map((paragraph, index) => (
                                <p key={index} className='mb-4'>{paragraph}</p>
                            ))}
                            <div className='space-y-6'>
                                <SettingUpWebhook />
                            </div>
                        </div>
                    </div>
                </article>

                {/* Feedback */}
                <div className="mt-10">
                    <FeedbackBox />
                </div>
            </div>

            <TableOfContents
                sections={settingUpWebhooks.sections}
            />
        </div>
    );
}
