import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import smsRoute from "./routes/sms.route.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/sms", smsRoute);

app.get("/", (req,res)=>{
    res.send("Backend Working For AET Project");
});

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("Mongo connected"));

const PORT = process.env.PORT || 6000;
// console.log(process.env.PORT)
// console.log(typeof PORT,PORT);
app.listen(PORT, ()=>{
    console.log("Server Is running");
});