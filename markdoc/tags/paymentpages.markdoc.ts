import PaymentPages from "../../components/views/integrating-klump/PaymentPages";

export const paymentpages = {
    render: PaymentPages,
    attributes: {
        title: { type: String, required: true },
        readingTime: { type: String },
        date: { type: String },
    }
};