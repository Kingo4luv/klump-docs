'use client';

import EnvIcon from '../img/EnvIcon';
import IntegrateIcon from '../img/IntegrateIcon';
import CommerceIcon from '../img/CommerceIcon';
import WebhookIcon from '../img/WebhookIcon';
import VerifyIcon from '../img/VerificationIcon';
import PluginsIcon from '../img/PluginIcon';

const features = [
    {
        title: 'Environments',
        description: 'Klump makes use of a single base API endpoint for both sandbox/development and production environment.',
        icon: EnvIcon,
    },
    {
        title: 'Integrating Klump',
        description: 'Fast-track local development with the essential tools needed for a Klump integration.',
        icon: IntegrateIcon,
    },
    {
        title: 'Klump Commerce',
        description: 'Create an online store easily, update product inventory and reach more customers—no website needed.',
        icon: CommerceIcon,
    },
    {
        title: 'Webhooks',
        description: 'Learn how to listen to events whenever certain actions occur on your integration.',
        icon: WebhookIcon,
    },
    {
        title: 'Verification',
        description: 'Complete your verification process to unlock access to powerful payment solutions and integration options tailored to your business needs.',
        icon: VerifyIcon,
    },
    {
        title: 'Plugins & Library',
        description: 'Below are some of the plugins and libraries that make integrating with Klump super easy.',
        icon: PluginsIcon,
    },
];

export default function FeatureSection() {
    return (
        <section className="py-20 px-4 lg:px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-left mb-4">
                    <h2 className="text-3xl font-bold text-gray-900">Explore by feature</h2>
                    <p className="mt-3 text-gray-600 text-base ">
                        Precisely control access with customisable options tailored to meet the complex security needs of BNPL solutions.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {features.map(({ title, description, icon: Icon }) => (
                        <div
                            key={title}
                            className="bg-white transition"
                        >
                            <div className="mb-4 aspect-[3/2] rounded-lg overflow-hidden flex items-center justify-center">
                                <Icon className="w-full h-full object-contain" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                            <p className="mt-2 text-sm text-gray-600">{description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
