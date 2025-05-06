import ResendWebhooks from "../../components/views/webhooks/ResendWenhooks";

export const resendwebhooks = {
    render: ResendWebhooks,
    attributes: {
        title: { type: String, required: true },
        readingTime: { type: String },
        date: { type: String },
    }
};