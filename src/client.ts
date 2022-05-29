import { Client, Intents } from "discord.js";
import dotenv from "dotenv";

dotenv.config()

export class WebhookClient extends Client {
    constructor() {
        super({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
    }

    async init() {
        await this.login(process.env.bot_token)
    }
}