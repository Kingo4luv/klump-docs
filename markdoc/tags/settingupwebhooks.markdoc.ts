import SettingUpWebhooks from "../../components/views/webhooks/SettingUpWebhooks";

export const settingupwebhooks = {
    render: SettingUpWebhooks,
    attributes: {
        title: { type: String, required: true },
        readingTime: { type: String },
        date: { type: String },
    }
};