import ProductTesting from "../../components/views/integrating-klump/ProductTesting";

export const producttesting = {
    render: ProductTesting,
    attributes: {
        title: { type: String, required: true },
        readingTime: { type: String },
        date: { type: String },
    }
};