import express from "express";
import { getUser,getDashboardStates } from "../controller/general.js";
const router = express.Router();
router.get("/user/:id", getUser);
router.get("/dashboard", getDashboardStates);
export default router;
