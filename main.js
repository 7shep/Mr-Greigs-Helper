import { Client, GatewayIntentBits } from 'discord.js';

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

// Bot login token.
const TOKEN = "MTAyNDMwNjY2MjQ5ODEyMzc5Ng.GUMoZd.OcQDkatoASX01RiERcuIAsWgO1KBgdUksDuUx8";

// When the clients ready, it logs "Logged In."
client.on('ready', () => {
    console.log(`${client.user.tag} has been logged in!`)
});

// Logs all the messages being sent
client.on('messageCreate', (message) => {
    console.log("Message:", message.content);
    console.log("Author:", message.author.tag);
    console.log("Channel:", message.channel.id);
})

//Logs when the messages are deleted
client.on('messageDelete', (message) => {
    console.log(message.author.tag, "has deleted a message.")
    console.log("Message:", message.content);
})

//Logs when the messages are updated
client.on('messageUpdate', (message, oldMessage, newMessage,) => {
    console.log(message.author.tag, "has edited a message");
    console.log("Old message:", message.content);
    console.log("New Message:", oldMessage.content);
})




client.login(TOKEN);