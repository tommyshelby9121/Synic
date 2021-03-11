import { SynicClient } from "../struct/Client";
import { Guild } from "discord.js";
import { NativeError } from "mongoose";

// Import Model
import GuildInfo from "../models/GuildInfo";

module.exports = async (client:SynicClient, guildData:Guild) => {
    await GuildInfo.findOneAndRemove({ guildId: guildData.id }).exec((err:NativeError) => console.error(`Error deleting guild data: ${err.message}`));
}
