import Environment from '../img/getting-started/Environment';
import Transactions from '../img/getting-started/Transactions';
import ApiKeys from '../img/getting-started/ApiKeys';

const features = [
    {
        title: 'Environments',
        description:
            'Create an account today and explore how you can start using Klump to streamline your transactions and simplify payments. At gravida tellus ac leo.',
        image: Environment,
    },
    {
        title: 'Test Credentials',
        description:
            'Create an account today and explore how you can start using Klump to streamline your transactions and simplify payments. At gravida tellus ac leo.',
        image: Transactions,
    },
    {
        title: 'API Keys & Authorization',
        description:
            'Create an account today and explore how you can start using Klump to streamline your transactions and simplify payments. At gravida tellus ac leo.',
        image: ApiKeys,
    },
];

export default function StartUsingKlump() {
    return (
        <section className="px-4 lg:px-6 bg-white  border-b border-[#E3E8EE]">
            <div className=" py-8 max-w-7xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                Start using Klump
            </h2>
            <p className="text-gray-700 mb-8">
                Create an account today and explore how you can start using Klump to streamline your transactions and simplify payments. At gravida tellus ac leo.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
                {features.map((feature, idx) => {
                    const Image = feature.image;
                    return (
                        <div key={idx} className="flex flex-col text-left w-full">
                           
                            <div className="mb-4 rounded-lg overflow-hidden flex items-center justify-center">
                                <Image className="w-full h-full" />
                            </div>

                            {/* Title & Description */}
                            <h3 className="text-[#192C69] font-semibold text-lg mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-sm text-gray-600">{feature.description}</p>
                        </div>
                    );
                })}
            </div>
            </div>
        </section>
    );
}
