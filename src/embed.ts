import { MessageEmbedOptions } from "discord.js";
import { WebhookPayload } from "./@types/Webhook";

export const embedConfig = (payload: WebhookPayload): MessageEmbedOptions => {
    return {
        author: {
            iconURL: payload.avatar_url,
            name: payload.tag_name,
            url: payload.html_url
        },
        url: payload.html_url,
        color: 'AQUA',
        thumbnail: {
            url: 'https://e3ba6e8732e83984.cdn.gocache.net/uploads/image/file/72484/regular_conta-azul.png',
            width: 120,
            height: 120
        },
        description: payload.body,
        timestamp: new Date(),
        title: payload.release_name
    }
}