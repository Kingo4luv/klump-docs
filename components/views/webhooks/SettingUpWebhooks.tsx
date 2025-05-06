import type { ReactNode } from 'react';
import { FeedbackBox } from '../../home/FeedbackBox';
import TableOfContents from '../../TableOfContents';
import SettingUpWebhook from '../../img/webhook/SettingUpWebhook';

interface SettingUpWebhooksViewProps {
    children: ReactNode;
    title: string;
    date?: string;
    readingTime?: string;
}

export default function SettingUpWebhooks({ children, readingTime, date, title }: SettingUpWebhooksViewProps) {


    return (
        <div id='setting-up-webhook' className="max-w-7xl mx-auto px-4 lg:px-6 py-6 lg:flex gap-8">
            {/* Main content */}
            <div className="w-full lg:w-3/4">
                {/* Meta info */}
                <div className="mb-4 flex text-sm text-gray-500 items-center space-x-3">
                    {/* Reading Time */}
                    {readingTime && (
                        <div className="flex items-center space-x-1">
                            <span className="text-[#444453]">Reading time</span>
                            <span className="text-[#1F1F2D]">{readingTime}</span>
                        </div>
                    )}
                    {/* Published Date */}
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
                    {/* {children} */}
                    <div className='border-t text-[#1F1F2D] border-[#E3E8EE] pt-6 space-y-6 lg:space-y-12'>
                        <div>
                            <p className='mb-4'>In other to take advantage of webhooks, you will have to first set up a publicly available URL that Klump can have access to. To set up one, kindly go to your merchant dashboard, click on the Settings link and check under the API Keys & Webhook tabs, there, you will find an input box for your webhook.</p>
                            <p className='mb-4'>Klump allows you to set up different webhook endpoints based on your environment. When your account is set to Test, the webhook URL you set up here will receive all transaction that happens when your test keys are used, consequently, when your account is set to Live, the webhook URL you set up here will receive all transaction that happens when your live keys are used.</p>
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
                sections={[
                    { id: 'Setting-up-webhook', label: 'Setting up Webhook' },
                ]}
            />
        </div>
    );
}
