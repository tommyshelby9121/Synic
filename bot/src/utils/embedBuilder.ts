import { Message, MessageEmbed } from "discord.js";

export async function simpleEmbed(message:Message, description:string, color:string) {
    const embed = new MessageEmbed()
        .setDescription(description)
        .setColor(color)
        .setFooter(`Requested By: ${message.author.tag} | Synic v1.0`);

    await message.channel.send(embed);
}
