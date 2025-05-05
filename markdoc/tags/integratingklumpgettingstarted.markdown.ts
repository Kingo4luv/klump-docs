import IntegratingKlumpGettingStarted   from '../../components/views/integrating-klump/GettingStarted';

export const integratingklumpgettingstarted = {
    render: IntegratingKlumpGettingStarted,
    attributes: {
        title: { type: String, required: true },
        readingTime: { type: String },
        date: { type: String },
    }
};