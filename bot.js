const Discord = require('discord.js'),
    discord = new Discord.Client(),
    config = require("./config.json"),
    commands = require("./commands/commands"),
    msgNew = require("./messages/members"),
    almanax = require("./json/almanax"),
    cron = require('node-cron'),
    broadcast = discord.voice.createBroadcast()


// Nouveau membre
discord.on('guildMemberAdd', newMember => {

    if (newMember.author.bot) return;

    newMember.prefix = prefix;
    msgNew(newMember);

})

// Pour les commandes discord
discord.on('message', msg => {

    if (msg.author.bot) return;

    commands(msg);

})

//Recharge 1 fois par jour pour le mettre à jour
var task = cron.schedule('00 01 00 * * 0-7', () => {

    almanax()

});

discord.on("ready", () => {
    const msgWel = discord.channels.cache.get("802179665107484674");
    msgWel.send("🌞 Coucou ! Si tu ne le sais pas fait donc !help en mp pour me découvrir... 🌞").catch(e => console.log(e));

    const msgAlma = discord.channels.cache.get("802179665107484674");
    msgAlma.send("🌈 Un nouvel Almanax est disponible ! Viens le découvrir !almanax mp moi... 🌈").catch(e => console.log(e));

});

task.start();

broadcast.play('./audio.mp3', { volume: 0.5 });
// Play "music.mp3" in all voice connections that the client is in
for (const connection of discord.voice.connections.values()) {
    connection.play(broadcast);
}

broadcast.on('subscribe', dispatcher => {
    console.log(`Broadcast playing in ${dispatcher.player.voiceConnection.channel.name}`);
});

discord.login(config.BOT_TOKEN);

discord.on('ready', () => {
    console.log(`Logged in as ${discord.user.tag}!`);
});

module.exports = {
    discord
}