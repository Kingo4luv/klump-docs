import WebhookGettingStarted from "../../components/views/webhooks/GettingStarted";

export const webhookgettingstarted = {
    render: WebhookGettingStarted,
    attributes: {
        title: { type: String, required: true },
        readingTime: { type: String },
        date: { type: String },
    }
};