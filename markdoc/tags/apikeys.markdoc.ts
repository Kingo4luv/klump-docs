import ApiKeys from '../../components/views/home/ApiKeys';

export const apikeys = {
    render: ApiKeys,
    attributes: {
        title: { type: String, required: true },
        readingTime: { type: String },
        date: { type: String },
    }
};