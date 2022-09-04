const {
    Client,
    GatewayIntentBits
} = require("discord.js");

const client = new Client({
    intents: [GatewayIntentBits.Guilds]
});

client.once("ready", () => console.log(`[Ready] ${client.user.tag}`));

client.on("guildMemberAdd", async member => {
    if (!member.guild.systemChannel) return;
    await member.guild.systemChannel.send({
        content: `<@${member.id}> has joined the server. Welcome!`
    })
});

client.login(process.env.TOKEN);