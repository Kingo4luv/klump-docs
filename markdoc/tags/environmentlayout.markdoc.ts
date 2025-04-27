import EnvironmentLayout  from '../../components/Layouts/EnvironmentLayout';

export const environmentlayout = {
    render: EnvironmentLayout,
    attributes: {
        title: { type: String, required: true },
        readingTime: { type: String },
        date: { type: String },
    }
};