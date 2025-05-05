import { FeedbackBox } from "../home/FeedbackBox";
import IntegratingKlump from "../integrating-klump";
import StartUsingKlump from "../integrating-klump/StartUsingKlump";

export default function IntegratingKlumpLayout() {
    return (
        <>
            <IntegratingKlump />
            <StartUsingKlump />
            <div className="max-w-4xl mx-auto">
                <FeedbackBox />
            </div>
        </>
    );
}