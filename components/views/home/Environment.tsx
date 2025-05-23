import type { ReactNode } from 'react';
import { FeedbackBox } from '../../home/FeedbackBox';
import Callout from '../../Callout';
import EnvironmentTable from '../../EnvironmentTable';
import TableOfContents from '../../TableOfContents';
import environmentContent from '../../../data/content/views/home/environment.json';

interface EnvironmentLayoutProps {
    children: ReactNode;
    title: string;
    date?: string;
    readingTime?: string;
}

export default function Environment({ children, readingTime, date, title }: EnvironmentLayoutProps) {
    const { content, sections } = environmentContent;
    
    return (
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-6 lg:flex gap-8">
            {/* Main Column */}
            <div className="w-full lg:w-3/4">
                {/* Meta */}
                <div className="mb-4 flex text-sm text-gray-500 items-center space-x-3">
                    <div className='flex items-center space-x-1'>
                        <span>
                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_104_2196)">
                                    <path d="M12.025 1.17177C11.7205 0.917148 11.3637 0.73269 10.9798 0.631493C10.596 0.530296 10.1946 0.514842 9.80417 0.586229L7.73392 0.962145C7.25595 1.04992 6.82137 1.29583 6.5 1.66035C6.1778 1.2952 5.74197 1.04923 5.26283 0.962145L3.19583 0.586229C2.80538 0.514779 2.40399 0.530031 2.02008 0.630903C1.63617 0.731775 1.27913 0.915802 0.974223 1.16996C0.669319 1.42411 0.424009 1.74218 0.255657 2.10165C0.0873048 2.46112 2.64401e-05 2.85321 0 3.25015L0 9.09635C3.11219e-05 9.73054 0.222612 10.3446 0.628947 10.8315C1.03528 11.3184 1.5996 11.6473 2.22354 11.7608L5.62846 12.3799C6.20477 12.4847 6.79523 12.4847 7.37154 12.3799L10.7792 11.7608C11.4026 11.6467 11.9663 11.3176 12.3721 10.8308C12.7779 10.3439 13.0001 9.73015 13 9.09635V3.25015C13.0002 2.85334 12.913 2.46137 12.7445 2.10213C12.576 1.7429 12.3303 1.42524 12.025 1.17177Z" fill="#444453"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_104_2196">
                                        <rect width="13" height="13" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </span>
                        <span className="text-[#444453]">Reading time </span>
                        {readingTime && <span className="text-[#1F1F2D]"> {readingTime} </span>}
                    </div>
                    {date && <div className='flex items-center space-x-2'>
                        <span>
                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_104_2200)">
                                    <path d="M10.2917 1.08333H9.75V0.541667C9.75 0.398008 9.69293 0.260233 9.59135 0.158651C9.48977 0.0570683 9.35199 0 9.20833 0C9.06467 0 8.9269 0.0570683 8.82532 0.158651C8.72373 0.260233 8.66667 0.398008 8.66667 0.541667V1.08333H4.33333V0.541667C4.33333 0.398008 4.27627 0.260233 4.17468 0.158651C4.0731 0.0570683 3.93533 0 3.79167 0C3.64801 0 3.51023 0.0570683 3.40865 0.158651C3.30707 0.260233 3.25 0.398008 3.25 0.541667V1.08333H2.70833C1.9903 1.08419 1.30193 1.36981 0.794202 1.87754C0.286478 2.38526 0.00086009 3.07364 0 3.79167L0 10.2917C0.00086009 11.0097 0.286478 11.6981 0.794202 12.2058C1.30193 12.7135 1.9903 12.9991 2.70833 13H10.2917C11.0097 12.9991 11.6981 12.7135 12.2058 12.2058C12.7135 11.6981 12.9991 11.0097 13 10.2917V3.79167C12.9991 3.07364 12.7135 2.38526 12.2058 1.87754C11.6981 1.36981 11.0097 1.08419 10.2917 1.08333ZM1.08333 3.79167C1.08333 3.36069 1.25454 2.94736 1.55928 2.64262C1.86403 2.33787 2.27736 2.16667 2.70833 2.16667H10.2917C10.7226 2.16667 11.136 2.33787 11.4407 2.64262C11.7455 2.94736 11.9167 3.36069 11.9167 3.79167V4.33333H1.08333V3.79167ZM10.2917 11.9167H2.70833C2.27736 11.9167 1.86403 11.7455 1.55928 11.4407C1.25454 11.136 1.08333 10.7226 1.08333 10.2917V5.41667H11.9167V10.2917C11.9167 10.7226 11.7455 11.136 11.4407 11.4407C11.136 11.7455 10.7226 11.9167 10.2917 11.9167Z" fill="#444453"/>
                                <path d="M6.5 8.9375C6.94873 8.9375 7.3125 8.57373 7.3125 8.125C7.3125 7.67627 6.94873 7.3125 6.5 7.3125C6.05127 7.3125 5.6875 7.67627 5.6875 8.125C5.6875 8.57373 6.05127 8.9375 6.5 8.9375Z" fill="#444453"/>
                                <path d="M3.79175 8.9375C4.24048 8.9375 4.60425 8.57373 4.60425 8.125C4.60425 7.67627 4.24048 7.3125 3.79175 7.3125C3.34302 7.3125 2.97925 7.67627 2.97925 8.125C2.97925 8.57373 3.34302 8.9375 3.79175 8.9375Z" fill="#444453"/>
                                <path d="M9.20825 8.9375C9.65698 8.9375 10.0208 8.57373 10.0208 8.125C10.0208 7.67627 9.65698 7.3125 9.20825 7.3125C8.75952 7.3125 8.39575 7.67627 8.39575 8.125C8.39575 8.57373 8.75952 8.9375 9.20825 8.9375Z" fill="#444453"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_104_2200">
                                    <rect width="13" height="13" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </span>
                        <span className="text-[#444453]">Published</span>
                        <span className="text-[#1F1F2D]"> {date} </span>
                    </div>}
                </div>

                <h1 className="text-3xl font-bold text-gray-900 my-6 lg:my-12">
                    {title}
                </h1>

                <article className="prose prose-blue max-w-none space-y-4 my-6 lg:my-10 text-base text-[#1F1F2D]">
                    <p>{content.main}</p>
                </article>

                <EnvironmentTable />

                <Callout title={content.callout.title} type="warning">
                    <div className="text-[#1F1F2D] space-y-2">
                        {content.callout.content.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                </Callout>

                <FeedbackBox />
            </div>

            <TableOfContents sections={sections} />
        </div>
    );
}
