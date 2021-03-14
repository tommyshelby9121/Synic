import { Router, Request, Response } from "express";
import passport from "passport";
const router = Router();

// @route       GET /authenticated
// @desc        Check if user is authenticated
router.get("/authenticated", (req:Request, res:Response) => {
   if (req.user) {
       res.send(req.user);
   }
   else {
       res.status(401).send({
           msg: "Unauthorized",
       });
   }
});

// @route       GET /auth
// @desc        Authenticate w/Discord
router.get("/", passport.authenticate("discord"));

// @route       GET /auth/redirect
// @desc        Redirection Validation
router.get("/redirect", passport.authenticate("discord"), (req:Request, res:Response) => {
    res.redirect(`${process.env.CLIENT_SIDE_APP_URL}/account`);
});

export default router;
