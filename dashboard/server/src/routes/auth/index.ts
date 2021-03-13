import { Router } from "express";
import passport from "passport";
const router = Router();

// @route       GET /auth
// @desc        Authenticate w/Discord
router.get("/", passport.authenticate("discord"));

export default router;
