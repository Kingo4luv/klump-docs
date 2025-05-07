import Verification from "../../verification";
import { FeedbackBox } from "../../home/FeedbackBox";
import StartUsingKlump from "../../verification/StartUsingKlump";

export default function VerificationHome() {
    
    return (
        <>
            <Verification />
            <StartUsingKlump />
            <div className="max-w-[826px] mx-auto">
                <FeedbackBox />
            </div>
        </>
    );
}