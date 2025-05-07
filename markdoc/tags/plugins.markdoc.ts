import Plugins from "../../components/views/plugins";

export const plugins = {
    render: Plugins,
    attributes: {
        title: { type: String, required: true },
        readingTime: { type: String },
        date: { type: String },
    }
};