import mongoose, {Schema, Document} from "mongoose";

interface CustomFeatures extends Document{
    [Key:string]:any
}

export interface Product extends Document{
    _id: string;
    customFeatures: CustomFeatures,
    updatedAt?: Date;
}

const ProductSchema: Schema = new Schema (
    {
        _id: {type: String, required: true},
        customFeatures: {
            type: Map,
            of: Schema.Types.Mixed,
            default: {}
        }
    },
    {timestamps: true}
)

export const CustomeFeature = mongoose.model<Product>('CustomFeature', ProductSchema);