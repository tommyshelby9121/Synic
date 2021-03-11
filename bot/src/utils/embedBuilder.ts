import { Message, MessageEmbed } from "discord.js";

export async function permissionEmbed(message:Message, description:string, color:string, permission:string) {
    const embed = new MessageEmbed()
        .setDescription(description)
        .setColor(color)
        .addField("Required Permission", permission)
        .setFooter(`Requested By: ${message.author.tag} | Synic v1.0`);

    await message.channel.send(embed);
}

export async function simpleEmbed(message:Message, description:string, color:string) {
    const embed = new MessageEmbed()
        .setDescription(description)
        .setColor(color)
        .setFooter(`Requested By: ${message.author.tag} | Synic v1.0`);

    await message.channel.send(embed);
}
