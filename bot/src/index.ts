import { config } from "dotenv";
config();
import { SynicClient } from "./struct/Client";
const client:SynicClient = new SynicClient({
   token: process.env.DISCORD_CLIENT_TOKEN,
   prefix: process.env.DISCORD_CLIENT_PREFIX,
});

// Login
client.login(client.config.token).catch(err => console.log(`Error logging in: ${err.message}`));