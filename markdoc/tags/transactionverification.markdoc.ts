import TransactionVerification from "../../components/views/verification/TransactionVerification";

export const transactionverification = {
    render: TransactionVerification,
    attributes: {
        title: { type: String, required: true },
        readingTime: { type: String },
        date: { type: String },
    }
};