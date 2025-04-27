'use client';

export default function EnvironmentTable() {
    const environments = [
        {
            environment: 'Sandbox/development',
            purpose:
                'The sandbox/development environment is used majorly during the product development phase. Note - every single transaction that happens via the sandbox will not involve real money. No actual value will be spent.',
            baseUrl: 'https://api.useklump.com',
        },
        {
            environment: 'Production',
            purpose:
                'The production environment is used when the product is about to go live and ready to be used by the general public.',
            baseUrl: 'https://api.useklump.com',
        },
    ];

    return (
        <section className="flex flex-col gap-4 mb-8">
            {/* Header (hide on mobile) */}
            <div className="hidden md:flex bg-[#FAFAFA] text-gray-600 text-xs font-semibold uppercase px-6 py-3 rounded-md border border-gray-200">
                <div className="flex-1">Environment</div>
                <div className="w-96">Purpose</div>
                <div className="flex-1 pl-4">Base URL</div>
            </div>

            {/* Rows */}
            {environments.map((env, idx) => (
                <div
                    key={idx}
                    className="flex flex-col md:flex-row gap-2 md:gap-0 px-6 py-4 rounded-md border border-gray-200 text-gray-900 bg-[#FAFAFA] text-sm"
                >
                    {/* Environment */}
                    <div className="w-full md:flex-1 font-medium text-gray-900">
                        {env.environment}
                    </div>

                    {/* Purpose */}
                    <div className="w-full md:w-96 text-gray-700">
                        {env.purpose}
                    </div>

                    {/* Base URL */}
                    <div className="w-full md:flex-1 pl-0 lg:pl-4 text-blue-600">
                        <a
                            href={env.baseUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline break-words"
                        >
                            {env.baseUrl}
                        </a>
                    </div>
                </div>
            ))}
        </section>
    );
}
