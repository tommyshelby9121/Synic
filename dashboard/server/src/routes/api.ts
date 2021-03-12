import { Router } from "express";
const router = Router();

// Import
import auth from "./auth";
router.use("/auth", auth);

export default router;
