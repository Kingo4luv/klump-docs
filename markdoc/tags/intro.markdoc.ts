import Intro  from '../../components/views/home/Intro';

export const intro = {
    render: Intro,
    attributes: {
        title: { type: String, required: true },
        readingTime: { type: String },
        date: { type: String },
    }
};