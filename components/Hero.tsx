
import HeroCode from "./img/HeroCode";
import HeroWidget from "./img/HeroWidget";

// import Image from 'next/image';

export function Hero() {
    return (
        <section className="w-full relative bg-[#102267] text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 py-8 lg:py-16 lg:grid lg:grid-cols-2 lg:items-center md:gap-16">
                {/* Left: Text Content */}
                <div className="text-center lg:text-left">
                    <p className="text-xs tracking-widest uppercase text-blue-200">
                        BNPL Solution at your fingertips
                    </p>
                    <h1 className="mt-4 text-4xl font-bold sm:text-6xl leading-tight">
                        Klump <br className="hidden lg:block" /> Developer<br />Documentation
                    </h1>
                    <p className="mt-6 text-base text-blue-200 md:max-w-lg mx-auto xl:mx-0 text-center lg:text-left">
                        From development to deployment, our documentation, tools, and frameworks simplify the process.{' '}
                        <span className="text-[#90AAFB]">
                            Learn to integrate and build Buy Now, Pay Later (BNPL) solutions with ease.
                        </span>
                    </p>
                </div>

                {/* Right: Widget + Code */}
                <div className="relative mt-12 lg:mt-0">
                    <div className="relative w-full flex justify-center lg:justify-end">
                        <HeroCode />
                    </div>

                    <div className="absolute bottom-32 lg:bottom-20 -left-2 md:left-0 lg:-left-10 w-40 sm:w-52">
                        <div className="shadow-xl rounded-xl overflow-hidden">
                            <HeroWidget />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
