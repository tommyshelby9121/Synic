import { SynicClient } from "../struct/Client";
import { Guild } from "discord.js";

// Import Model
import GuildInfo from "../models/GuildInfo";

module.exports = async (client:SynicClient, guildData:Guild) => {
    await GuildInfo.create({
        guildId: guildData.id,
        guildName: guildData.name,
        memberCount: guildData.memberCount,
        region: guildData.region,
    });
}
