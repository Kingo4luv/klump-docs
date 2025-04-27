import { Hero } from "../Hero";
import FeatureSection from "../home/FeatureSection";
import { FeedbackBox } from "../home/FeedbackBox";
import SupportCTA from "../home/SupportCTA";

export function HomeLayouts() {
    return (
        <>
            <Hero />
            <FeatureSection />
            <SupportCTA />
            <FeedbackBox />
        </>
    )
}
