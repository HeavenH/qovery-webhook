"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
client.login(process.env.TOKEN_BOT);
const port = 3000;
app.post("/notifications", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const channel = client.channels.cache.get('980083024672718939');
    const payload = {
        html_url: "https://discordjs.guide/popular-topics/embeds.html#using-the-embed-constructor",
        body: "daspdosakdsao" +
            "32013210321o0 \n" +
            "3210321o0321o1",
        release_name: "Kafka refactor"
    };
    const formatedPayload = new discord_js_1.MessageEmbed()
        // @ts-ignore
        .setColor('0099ff')
        .setURL(payload.html_url)
        .setDescription(payload.body)
        .setTitle(payload.release_name);
    // @ts-ignore
    channel.send({ embeds: [formatedPayload] });
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
        // @ts-ignore
        const formatedPayload = new discord_js_1.MessageEmbed().setColor('0099ff').setURL(payload.html_url).setDescription(payload.body);
        // @ts-ignore
        channel.send({ embeds: [formatedPayload] });
    }
    response.json({ ok: true });
}));
app.listen(port, () => {
    console.log("listening on port");
});
