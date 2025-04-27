import IntroLayout  from '../../components/Layouts/IntroLayout';

export const introlayout = {
    render: IntroLayout,
    attributes: {
        title: { type: String, required: true },
        readingTime: { type: String },
        date: { type: String },
    }
};