import express from "express";
import dotenv from "dotenv"
import {WebhookClient} from "./src/client";
import {embedConfig} from "./src/embed";

dotenv.config()

const app = express()
app.use(express.json())

const client = new WebhookClient();

client.login(process.env.BOT_TOKEN)

const port = 3000

app.post("/notifications", async (request, response) => {

    const channel = client.channels.cache.get('980083024672718939');

    if (request.body.action == "created") {
        const payload = {
            html_url: request.body.release.html_url,
            release_name: request.body.release.name,
            body: request.body.release.body,
            tag_name: request.body.release.tag_name,
            avatar_url: request.body.release.author.avatar_url
        }

        const optionsEmbed = embedConfig(payload)

        console.log("embed", optionsEmbed)

        //@ts-ignore
        channel.send("ok");
    }

    response.json({ok: true})
})

app.listen(port, () => {
    console.log("listening on port")
})