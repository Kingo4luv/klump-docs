import TestCredentialsLayout  from '../../components/Layouts/TestCredentialsLayout';

export const testcredentialslayout = {
    render: TestCredentialsLayout,
    attributes: {
        title: { type: String, required: true },
        readingTime: { type: String },
        date: { type: String },
    }
};