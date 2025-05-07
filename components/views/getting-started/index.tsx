import GetStarted from "../../getting-started";
import StartUsingKlump from "../../getting-started/StartUsingKlump";
import { FeedbackBox } from "../../home/FeedbackBox";

export default function GettingStarted() {

    return (
        <>
            <GetStarted />
            <StartUsingKlump />
            <div className="max-w-[826px] mx-auto">
                <FeedbackBox />
            </div>
        </>
    );
}