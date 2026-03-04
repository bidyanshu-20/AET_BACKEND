// import Transaction from "../models/Transaction.models.js";

// export const receiveSMS = async (req, res) => {

//     const { sender, message } = req.body;

//     if (!sender || !message) {
//         return res.status(400).json({ error: "Missing data" });
//     }
//     console.log("🔥 API HIT");
//     console.log("BODY:", req.body);
//     const amount = extractAmount(message);
//     const type = detectType(message);

//     try {

//         const txn = await Transaction.create({
//             sender,
//             message,
//             amount,
//             type
//         });

//         res.json(txn);

//     } catch (error) {
//         res.status(500).json({ error: "Server Error" });
//     }
// };


// function extractAmount(msg) {
//     const match = msg.match(/(Rs|INR)\.?\s?([0-9,]+\.?[0-9]*)/i);
//     return match ? Number(match[2].replace(/,/g, "")) : 0;
// }

// function detectType(msg) {
//     msg = msg.toLowerCase();
//     if (msg.includes("debited")) return "DEBIT";
//     if (msg.includes("credited")) return "CREDIT";
//     return "UNKNOWN";
// }
import Transaction from "../models/Transaction.models.js";

export const receiveSMS = async (req, res) => {

    console.log("🔥 API HIT");
    console.log("BODY:", req.body);
    try {
        const {
            accountLast4,
            amount,
            bank,
            rawMessage,
            type
        } = req.body;

        // Validation
        if (!accountLast4 || !amount || !bank || !rawMessage || !type) {
            return res.status(400).json({ error: "Missing required fields" });
        }

        const txn = await Transaction.create({
            accountLast4,
            amount,
            bank,
            rawMessage,
            type
        });

        res.status(201).json(txn);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    }
};