import ErrorsLayout  from '../../components/Layouts/ErrorsLayout';

export const errorslayout = {
    render: ErrorsLayout,
    attributes: {
        title: { type: String, required: true },
        readingTime: { type: String },
        date: { type: String },
    }
};