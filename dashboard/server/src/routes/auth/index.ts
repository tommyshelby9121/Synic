import { Router, Request, Response } from "express";
import passport from "passport";
const router = Router();

// @route       GET /auth
// @desc        Authenticate w/Discord
router.get("/", passport.authenticate("discord"));

// @route       GET /auth/redirect
// @desc        Redirection Validation
router.get("/redirect", passport.authenticate("discord"), (req:Request, res:Response) => {
    res.redirect(`${process.env.CLIENT_SIDE_APP_URL}/account`);
});

export default router;
