import express from "express";
import { Client, Intents, TextChannel } from "discord.js";
import dotenv from "dotenv"

dotenv.config()

const app = express()
const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});

client.login(process.env.TOKEN_BOT)

app.use(express.json())

const port = 3000

app.post("/notifications", (request, response) => {

    if (request.body.action == "created") {
        // @ts-ignore
        let html_url = request.body.release.html_url
        let release_name = request.body.release.name
        let body = request.body.release.body

        const payload = {
            release_name,
            html_url,
            body
        }

        console.log("payload", payload)

        client.on("ready", message => {

            // @ts-ignore
            client.channels.fetch('980083024672718939').then(channel=>channel.send(JSON.stringify("payload")))
        })

    }

    response.json({ok: true})
})

app.listen(port, () => {
    console.log("listening on port")
})