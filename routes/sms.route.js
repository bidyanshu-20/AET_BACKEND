import express from "express";
import { receiveSMS } from "../controllers/sms.controller.js";

const router = express.Router();

router.post("/", receiveSMS);

export default router;