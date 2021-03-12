import DiscordStrategy, { Profile } from "passport-discord";

// Modal
import User from "../model/User";

module.exports = (passport:any) => {
    passport.use(new DiscordStrategy.Strategy({
        clientID: process.env.DISCORD_APP_CLIENT_ID!,
        clientSecret: process.env.DISCORD_APP_CLIENT_SECRET!,
        callbackURL: process.env.DISCORD_APP_CLIENT_REDIRECT!,
        scope: ["identify", "guilds"]
    }, async (accessToken:string, refreshToken:string, profile:Profile, done:any) => {
        const { id, username, discriminator, avatar, guilds } = profile;
        try {
            // Filter user guilds and only include ones with permission 0x20
            const filteredGuilds = guilds?.filter(object => (object.permissions & 0x20) === 0x20);

            // Check if user exists and update
            const findUser = await User.findOneAndUpdate({ discordId: id }, {
                discordTag: `${username}#${discriminator}`,
                avatar,
                guilds: filteredGuilds,
            }, { new: true }, (err) => {
               if (err) return console.error(`Error finding/updating user: ${err.message}`);
            });
        }
        catch (err) {
            console.error(`Error logging in user: ${err.message}`);
            process.exit(1);
        }
    }));
}
