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
        color: 'BLUE',
        thumbnail: {
            url: 'https://e3ba6e8732e83984.cdn.gocache.net/uploads/image/file/72484/regular_conta-azul.png',
            width: 420,
            height: 420
        },
        description: payload.body,
        timestamp: new Date(),
        title: payload.release_name,
        footer: {
            text: "\u3000\Uma nova versão do swp-common está disponivel"
        }
    }
}