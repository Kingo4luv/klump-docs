

import { useState } from 'react';

export function FeedbackBox() {
    const [selected, setSelected] = useState<null | 'up' | 'down'>(null);

    return (
        <div className="bg-gray-50 border border-gray-200 rounded-md p-6 text-center w-full mx-auto my-12">
            <h3 className="text-md font-semibold text-gray-900 mb-4">
                What did you think of this content?
            </h3>
            <div className="flex flex-col md:flex-row justify-center gap-4 max-w-50 md:max-w-96 mx-auto">
                <button
                    onClick={() => setSelected('up')}
                    className={`inline-flex justify-center items-center gap-2 px-4 py-2 border rounded-md text-sm font-medium text-center transition ${selected === 'up'
                            ? 'bg-blue-50 border-blue-600 text-blue-600'
                            : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-100'
                        }`}
                >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.75 9.75H5.75L8.75 2.75H9.25C9.78043 2.75 10.2891 2.96071 10.6642 3.33579C11.0393 3.71086 11.25 4.21957 11.25 4.75V8.75L15.252 8.739C15.5344 8.73891 15.8135 8.79861 16.0712 8.91418C16.3288 9.02974 16.559 9.19854 16.7467 9.40948C16.9344 9.62042 17.0753 9.86872 17.1602 10.138C17.245 10.4073 17.2719 10.6916 17.239 10.972L16.709 15.472C16.6519 15.9587 16.4181 16.4075 16.052 16.7332C15.686 17.0589 15.213 17.2389 14.723 17.239L5.75 17.25H2.75V9.75Z" fill="#9394A1" fill-opacity="0.15" />
                        <path d="M5.75 9.75H2.75V17.25H5.75M5.75 9.75L8.75 2.75H9.25C9.78043 2.75 10.2891 2.96071 10.6642 3.33579C11.0393 3.71086 11.25 4.21957 11.25 4.75V8.75L15.252 8.739C15.5344 8.73891 15.8135 8.79861 16.0712 8.91418C16.3288 9.02974 16.559 9.19854 16.7467 9.40948C16.9344 9.62042 17.0753 9.86872 17.1602 10.138C17.245 10.4073 17.2719 10.6916 17.239 10.972L16.709 15.472C16.6519 15.9587 16.4181 16.4075 16.052 16.7332C15.686 17.0589 15.213 17.2389 14.723 17.239L5.75 17.25M5.75 9.75V17.25" stroke="#9394A1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                    It was helpful
                </button>
                <button
                    onClick={() => setSelected('down')}
                    className={`inline-flex justify-center items-center gap-2 px-4 py-2 border rounded-md text-sm font-medium text-center transition ${selected === 'down'
                            ? 'bg-red-50 border-red-600 text-red-600'
                            : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-100'
                        }`}
                >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.75 10.25H5.75L8.75 17.25H9.25C9.78043 17.25 10.2891 17.0393 10.6642 16.6642C11.0393 16.2891 11.25 15.7804 11.25 15.25V11.25L15.252 11.261C15.5344 11.2611 15.8135 11.2014 16.0712 11.0858C16.3288 10.9703 16.559 10.8015 16.7467 10.5905C16.9344 10.3796 17.0753 10.1313 17.1602 9.86197C17.245 9.59266 17.2719 9.30844 17.239 9.028L16.709 4.528C16.6519 4.04132 16.4181 3.59253 16.052 3.2668C15.686 2.94108 15.213 2.76109 14.723 2.761L5.75 2.75H2.75V10.25Z" fill="#9394A1" fill-opacity="0.15" />
                        <path d="M5.75 10.25H2.75V2.75H5.75M5.75 10.25L8.75 17.25H9.25C9.78043 17.25 10.2891 17.0393 10.6642 16.6642C11.0393 16.2891 11.25 15.7804 11.25 15.25V11.25L15.252 11.261C15.5344 11.2611 15.8135 11.2014 16.0712 11.0858C16.3288 10.9703 16.559 10.8015 16.7467 10.5905C16.9344 10.3796 17.0753 10.1313 17.1602 9.86197C17.245 9.59266 17.2719 9.30844 17.239 9.028L16.709 4.528C16.6519 4.04132 16.4181 3.59253 16.052 3.2668C15.686 2.94108 15.213 2.76109 14.723 2.761L5.75 2.75M5.75 10.25V2.75" stroke="#9394A1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    It was not helpful
                </button>
            </div>
        </div>
    );
}
