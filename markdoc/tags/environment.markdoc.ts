import Environment  from '../../components/views/home/Environment';

export const environment = {
    render: Environment,
    attributes: {
        title: { type: String, required: true },
        readingTime: { type: String },
        date: { type: String },
    }
};