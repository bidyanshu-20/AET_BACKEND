// import mongoose from "mongoose";

// const transactionSchema = new mongoose.Schema({
//     sender: String,
//     message: String,
//     amount: Number,
//     type: String,
//     createdAt: {
//         type: Date,
//         default: Date.now
//     }
// });

// export default mongoose.model("Transaction", transactionSchema);
import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
  accountLast4: String,
  amount: Number,
  bank: String,
  rawMessage: String,
  type: {
    type: String,
    enum: ["DEBIT", "CREDIT"]
  }
}, { timestamps: true });

export default mongoose.model("Transaction", transactionSchema);