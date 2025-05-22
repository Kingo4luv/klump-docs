import EnvIcon from '../img/EnvIcon';
import IntegrateIcon from '../img/IntegrateIcon';
import CommerceIcon from '../img/CommerceIcon';
import WebhookIcon from '../img/WebhookIcon';
import VerifyIcon from '../img/VerificationIcon';
import PluginsIcon from '../img/PluginIcon';
import featureContent from '../../data/content/views/home/features.json';

const iconComponents = {
    EnvIcon,
    IntegrateIcon,
    CommerceIcon,
    WebhookIcon,
    VerifyIcon,
    PluginsIcon,
};

export default function FeatureSection() {
    return (
        <section className="py-20 px-4 lg:px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-left mb-4">
                    <h2 className="text-3xl font-bold text-gray-900">{featureContent.title}</h2>
                    <p className="mt-3 text-gray-600 text-base ">
                        {featureContent.description}
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {featureContent.features.map(({ title, description, icon }) => {
                        const Icon = iconComponents[icon];
                        return (
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
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
