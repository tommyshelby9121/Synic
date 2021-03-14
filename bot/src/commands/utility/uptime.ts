import { SynicClient } from "../../struct/Client";
import { Message } from "discord.js";
import ms from "ms";

export default {
    name: "uptime",
    description: "Get bot uptime",
    /**
     * @param { SynicClient } client
     * @param { Message } message
     */
    async execute(client:SynicClient, message:Message) {
        await message.channel.send(`My uptime is: \`${ms(client.uptime!, { long: true })}\``)
    }
}
