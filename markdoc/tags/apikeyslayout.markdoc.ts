import ApiKeysLayout from '../../components/Layouts/ApiKeysLayout';

export const apikeyslayout = {
    render: ApiKeysLayout,
    attributes: {
        title: { type: String, required: true },
        readingTime: { type: String },
        date: { type: String },
    }
};