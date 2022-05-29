import express from "express";
import { Client, Intents, TextChannel, MessageEmbed } from "discord.js";
import dotenv from "dotenv"

dotenv.config()

const app = express()
app.use(express.json())

const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});

client.login(process.env.TOKEN_BOT)

const port = 3000

app.post("/notifications", async (request, response) => {

    const channel = client.channels.cache.get('980083024672718939');

    console.log("BODY", request.body.release)

    if (request.body.action == "created") {
        // @ts-ignore
        let html_url = request.body.release.html_url
        let release_name = request.body.release.name
        let body = request.body.release.body
        let tag_name = request.body.release.tag_name
        let avatar_url = request.body.release.author.avatar_url

        const payload = {
            release_name,
            html_url,
            body,
            tag_name,
            avatar_url
        }

        const formatedPayload = new MessageEmbed()
            // @ts-ignore
            .setColor('0099ff')
            .setTimestamp(new Date())
            .setURL(payload.html_url)
            .setDescription(payload.body)
            .setTitle(payload.release_name)
            .setThumbnail(payload.avatar_url)
            .setImage("https://e3ba6e8732e83984.cdn.gocache.net/uploads/image/file/72484/regular_conta-azul.png")
            .setAuthor({ name: payload.tag_name, url: payload.html_url, iconURL: payload.avatar_url })
            .setFooter("\u3000".repeat(10/*any big number works too*/)+"|")

        // @ts-ignore
        channel.send({ embeds: [formatedPayload]});
    }

    response.json({ok: true})
})

app.listen(port, () => {
    console.log("listening on port")
})