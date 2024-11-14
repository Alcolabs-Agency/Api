import mongoose, {Schema, Document} from "mongoose";



interface Invoice extends Document {
    invoiceNumber: number
    customerName: string
    products:{produictId: string; quantity: number}[];
    totalAmount: number;
    date: Date;
    customData?: Record<string, any>
}

const InvoiceSchema = new Schema({
    invoiceNumber: Number,
    customerName: String,
    products: [
        {
            _id: String,
            quantity: Number,
        }
    ],
    totalAmount: { type: Number, required: true},
    date: { type: Date, default: Date.now},
    customData: {
        type: Map,
        of: Schema.Types.Mixed,
    }
});

export const Invoice = mongoose.model<Invoice>('Invoice', InvoiceSchema);