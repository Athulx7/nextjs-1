import mongoose from "mongoose";

const productSchema = new mongoose.Schema({

    name: { type: String, required: true },
    price: { type: Number, required: true },

})

export const product = mongoose.models.product || mongoose.model('product', productSchema)
