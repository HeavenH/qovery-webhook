import { Client, Intents } from "discord.js";
import dotenv from "dotenv";

dotenv.config()

export class WebhookClient extends Client {
    constructor() {
        super({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
    }

    init() {
        this.login(process.env.BOT_TOKEN)
    }
}