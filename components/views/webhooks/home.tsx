import { FeedbackBox } from "../../home/FeedbackBox";

import Webhook from "../../webhooks";
import StartUsingKlump from "../../webhooks/StartUsingKlump";

export default function WebhookHome() {
    
    return (
        <>
            <Webhook />
            <StartUsingKlump />
            <FeedbackBox />
        </>
    );
}