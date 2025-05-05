import TransactionVerification from "../img/verification/TransactionVerification";

export default function Verification() {
    return (
        <section className="relative bg-white py-8 px-4 lg:px-6 overflow-hidden border-b border-[#E3E8EE]">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div>
                    <h2 className="text-[34px] font-bold text-[#1F1F2D]">Verification</h2>
                    <p className="text-[22px] text-[#1F1F2D] mb-10">
                        Get up and running with Payment Pages and integration tools.
                    </p>

                    <h3 className="text-[22px] font-semibold text-[#1F1F2D] mt-4 lg:mt-28 mb-2">Fast and secure setup for seamless transactions.</h3>
                    <p className="text-[#1F1F2D] text-base mb-4 max-w-lg">
                        Complete your verification process to unlock access to powerful payment solutions and integration options tailored to your business needs.
                    </p>
                    <a
                        href="/docs/transaction-verification"
                        className="inline-flex items-center text-[#192C69] font-medium hover:underline"
                    >
                        Get Started
                        <span className="ml-1">→</span>
                    </a>
                </div>

                {/* Right Side */}
                <div className="relative">
                    <TransactionVerification />
                </div>
            </div>
        </section>
    );
}
