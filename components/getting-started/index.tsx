import TellUsAboutYourBusiness from "../img/TellUsAboutYourBusiness";

export default function GetStarted() {
    return (
        <section className="relative bg-white py-8 px-4 lg:px-6 overflow-hidden border-b border-[#E3E8EE]">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div>
                    <h2 className="text-[34px] font-bold text-[#1F1F2D]">Get started</h2>
                    <p className="text-[22px] text-[#1F1F2D] mb-10">
                        Create an account and learn how to start using Klump.
                    </p>

                    <h3 className="text-[22px] font-semibold text-[#1F1F2D] mt-4 lg:mt-28 mb-2">Start using Klump</h3>
                    <p className="text-[#1F1F2D] text-base mb-4 max-w-lg">
                        Create an account today and explore how you can start using Klump to streamline your transactions and simplify payments.
                    </p>
                    <a
                        href="/docs/environment"
                        className="inline-flex items-center text-[#192C69] font-medium hover:underline"
                    >
                        Go to test environment
                        <span className="ml-1">→</span>
                    </a>
                </div>

                {/* Right Side */}
                <div className="relative">
                    <TellUsAboutYourBusiness />
                </div>
            </div>
        </section>
    );
}
