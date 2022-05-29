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
app.use(express_1.default.json());
const client = new discord_js_1.Client({
    intents: [discord_js_1.Intents.FLAGS.GUILDS, discord_js_1.Intents.FLAGS.GUILD_MESSAGES]
});
const port = 3000;
app.post("/notifications", (request, response) => {
    client.login(process.env.TOKEN_BOT);
    client.on("ready", message => {
        const channel = client.channels.cache.get('980083024672718939');
        // @ts-ignore
        channel.send({ content: 'This is a message' });
    });
    console.log("oi");
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
