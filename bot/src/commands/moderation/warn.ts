import { SynicClient } from "../../struct/Client";
import { Message } from "discord.js";
import { NativeError } from "mongoose";
import { permissionEmbed, simpleEmbed } from "../../utils/embedBuilder";
import colors from "../../utils/colors";
import formatDate from "../../utils/formatDate";
import responses from "../../utils/responses";

// Import Model
import GuildInfo, { IGuildInfo } from "../../models/GuildInfo";
import ModCase from "../../models/ModCase";

export default {
    name: "warn",
    description: "Issue a warning to specified user",
    /**
     * @param { SynicClient } client
     * @param { Message } message
     * @param { String } args
     */
    async execute(client:SynicClient, message:Message, args:ReadonlyArray<string>) {
        if (!message.member?.hasPermission("MANAGE_MESSAGES")) return permissionEmbed(message, responses.global.no_user_permission, colors.error, "MANAGE_MESSAGES");
        if (!message.guild?.me?.hasPermission("MANAGE_MESSAGES")) return permissionEmbed(message, responses.global.no_bot_permission, colors.error, "MANAGE_MESSAGES")
        const warnUser = message.guild?.member(message.mentions.users.first() || message.guild?.members.cache.get(args[0])!);
        if (!warnUser) return simpleEmbed(message, responses.global.no_user_provided, colors.error);
        if (!warnUser.hasPermission("MANAGE_MESSAGES")) return simpleEmbed(message, responses.moderation.warn.user_warn_failure, colors.error)
        // if (warnUser.id === message.author.id) return simpleEmbed(message, responses.moderation.warn.user_warn_self, colors.error);
        let warnReason = args.join(" ").slice(warnUser.id.length);
        if (!warnReason) warnReason = "No Reason Provided";

        await GuildInfo.findOne({ guildId: message.guild?.id }, async (err:NativeError, response:IGuildInfo|null) => {
            if (err) return console.error(`Error finding guild ${message.guild?.id} document: ${err.message}`)

            let caseId:number|undefined = response?.cases;

            ++caseId!;

            const date = new Date()
            await ModCase.create({
                guildId: message.guild?.id,
                caseId,
                staffMember: message.author.id,
                user: warnUser.user.id,
                reason: warnReason,
                punishment: "Warn",
                date: formatDate(date, "MM/DD/YYYY HH:mm:ss"),
            });

            await GuildInfo.findOneAndUpdate({ guildId: message.guild?.id }, { cases: caseId });

            return simpleEmbed(message, `${warnUser.user.tag} has been warned for: ${warnReason}`, colors.success);
        });
    }
}
