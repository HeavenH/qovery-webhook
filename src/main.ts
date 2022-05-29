import express from "express";
import { TextChannel } from "discord.js";
import { WebhookClient } from "./client";
import { embedConfig } from "./embed";

const app = express()

app.use(express.json())

const port = 3000

app.post("/notifications", async (request, response) => {
    const clientWebhook = new WebhookClient()

    await clientWebhook.init()

    const channel = clientWebhook.channels.cache.get('980083024672718939') as TextChannel;

    await channel.send("class refactor");

    if (request.body.action == "created") {
        const payload = {
            html_url: request.body.release.html_url,
            release_name: request.body.release.name,
            body: request.body.release.body,
            tag_name: request.body.release.tag_name,
            avatar_url: request.body.release.author.avatar_url
        }

        const optionsEmbed = embedConfig(payload)

        await channel.send("ok");
    }

    response.json({ ok: true })
})

app.listen(port, () => {
    console.log("listening on port")
})