import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
    sender: String,
    message: String,
    amount: Number,
    type: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model("Transaction", transactionSchema);