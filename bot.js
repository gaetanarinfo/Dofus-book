const Discord = require('discord.js'),
    discord = new Discord.Client(),
    config = require("./config.json"),
    commands = require("./commands/commands"),
    msgNew = require("./messages/members"),
    almanax = require("./json/almanax"),
    cron = require('node-cron')

// Connect Database
require('./api/database/db');


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
var task = cron.schedule('00 01 * * * *', () => {

    almanax()

}, {
    scheduled: true
});

// A décommenter en prod
discord.on("ready", () => {
    const msgWel = discord.channels.cache.get("802179665107484674");
    msgWel.send("🌞 Coucou ! Si tu ne le sais pas fait donc !help en mp pour me découvrir... 🌞").catch(e => console.log(e));

    const msgAlma = discord.channels.cache.get("802179665107484674");
    msgAlma.send("🌈 Un nouvel Almanax est disponible ! Viens le découvrir !almanax mp moi... 🌈").catch(e => console.log(e));

    const msgActus = discord.channels.cache.get("802179665107484674");
    msgActus.send("🌵 Regarde dès maintenant les actus dofus pour ne rien manquer ! !actus mp moi... 🌵").catch(e => console.log(e));

});

task.start();

discord.login(config.BOT_TOKEN);

discord.on('ready', () => {
    console.log(`Logged in as ${discord.user.tag}!`);

    let channel = discord.channels.cache.get('802180854888923207');

    channel.join()
        .then(connection => {
            console.log('Rejoins le channel Audio');

            connection.play(('https://gaetan.store/audio/mp3/dofus.mp3'))

        })
        .catch(console.error);

});

module.exports = {
    discord
}