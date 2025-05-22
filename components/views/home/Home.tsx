import { Hero } from "../../Hero";
import FeatureSection from "../../home/FeatureSection";
import { FeedbackBox } from "../../home/FeedbackBox";
import SupportCTA from "../../home/SupportCTA";

export function Home() {
    return (
        <>
            <Hero />
            <FeatureSection />
            <SupportCTA />
            <div className="max-w-7xl mx-auto px-4 lg:px-6 py-6">
                <FeedbackBox />
            </div>
        </>
    )
}
