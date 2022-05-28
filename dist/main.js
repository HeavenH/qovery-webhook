"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const discord_js_1 = require("discord.js");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const client = new discord_js_1.Client({
    intents: [discord_js_1.Intents.FLAGS.GUILDS, discord_js_1.Intents.FLAGS.GUILD_MESSAGES]
});
client.login(process.env.TOKEN_BOT);
app.use(express_1.default.json());
const port = 3000;
client.on("ready", message => {
    // @ts-ignore
    client.channels.fetch('980083024672718939').then(channel => channel.send('booyah!'));
});
app.post("/notifications", (request, response) => {
    if (request.body.action == "created") {
        // @ts-ignore
        let html_url = request.body.release.html_url;
        let release_name = request.body.release.name;
        let body = request.body.release.body;
        const payload = {
            release_name,
            html_url,
            body
        };
        console.log("payload", payload);
    }
    response.json({ ok: true });
});
app.listen(port, () => {
    console.log("listening on port");
});
