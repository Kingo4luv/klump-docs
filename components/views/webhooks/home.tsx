import { FeedbackBox } from "../../home/FeedbackBox";

import Webhook from "../../webhooks";
import StartUsingKlump from "../../webhooks/StartUsingKlump";

export default function WebhookHome() {
    
    return (
        <>
            <Webhook />
            <StartUsingKlump />
            <div className="max-w-[826px] mx-auto">
                <FeedbackBox />
            </div>
        </>
    );
}