import InventoryManagemnt from "../../components/views/commerce/InventoryManagement";

export const inventorymanagemnt = {
    render: InventoryManagemnt,
    attributes: {
        title: { type: String, required: true },
        readingTime: { type: String },
        date: { type: String },
    }
};