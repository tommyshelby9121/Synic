import DiscordStrategy, { Profile } from "passport-discord";

module.exports = (passport:any) => {
    passport.use(new DiscordStrategy.Strategy({
        clientID: process.env.DISCORD_APP_CLIENT_ID!,
        clientSecret: process.env.DISCORD_APP_CLIENT_SECRET!,
        callbackURL: process.env.DISCORD_APP_CLIENT_REDIRECT!,
        scope: ["identify", "guilds"]
    }, async (accessToken:string, refreshToken:string, profile:Profile, done:any) => {

    }));
}
