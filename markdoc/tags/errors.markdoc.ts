import Errors  from '../../components/views/home/Errors';

export const errors = {
    render: Errors,
    attributes: {
        title: { type: String, required: true },
        readingTime: { type: String },
        date: { type: String },
    }
};