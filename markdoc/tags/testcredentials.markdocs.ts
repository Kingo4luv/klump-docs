import TestCredentialsView  from '../../components/views/home/TestCredentialsView';

export const testcredentials = {
    render: TestCredentialsView,
    attributes: {
        title: { type: String, required: true },
        readingTime: { type: String },
        date: { type: String },
    }
};