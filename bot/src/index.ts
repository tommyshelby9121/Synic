import { config } from "dotenv";
config();
import { readdirSync } from "fs";
import { join } from "path";
import { SynicClient } from "./struct/Client";
const client:SynicClient = new SynicClient({
   token: process.env.DISCORD_CLIENT_TOKEN!,
   prefix: process.env.DISCORD_CLIENT_PREFIX!,
});

// Event Handler
const eventFiles = readdirSync(join(__dirname, "events")).filter(file => file.endsWith(".js"));
for (const file of eventFiles) {
   const event = require(`./events/${file}`);
   const eventName = file.split(".").shift();
   client.on(eventName!, event.bind(null, client));
   delete require.cache[require.resolve(`./events/${file}`)];
   console.log(`${file} event loaded!`);
}

// Command Handler
readdirSync(join(__dirname, "commands")).forEach(dir => {
   const commandFiles = readdirSync(join(__dirname, `./commands/${dir}/`)).filter(file => file.endsWith(".js"));

   for (const file of commandFiles) {
      const command = require(`./commands/${dir}/${file}`);
      if (command.default.name) {
         client.commands.set(command.default.name, command.default);
      }
      console.log(`${file} command loaded!`);
   }
});

// Login
client.login(client.config.token).catch(err => console.log(`Error logging in: ${err.message}`));
