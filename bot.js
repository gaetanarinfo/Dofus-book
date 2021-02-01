const Discord = require('discord.js'),
    discord = new Discord.Client(),
    config = require("./config.json"),
    commands = require("./commands/commands"),
    almanax = require("./json/almanax")

// Connect Database
require('./api/database/db');

// Pour les commandes discord
discord.on('message', msg => {

    if (msg.author.bot) return;

    msg.prefix = config.prefix;
    commands(msg);

})

// A décommenter en prod
// discord.on("ready", () => {
//     const msgWel = discord.channels.cache.get("805067889336909855");
//     msgWel.send("🌞 Coucou ! Si tu ne le sais pas fait donc !help en mp pour me découvrir... 🌞").catch(e => console.log(e));

//     const msgAlma = discord.channels.cache.get("805067889336909855");
//     msgAlma.send("🌈 Un nouvel Almanax est disponible ! Viens le découvrir !almanax mp moi... 🌈").catch(e => console.log(e));

//     const msgActus = discord.channels.cache.get("805067889336909855");
//     msgActus.send("🌵 Regarde dès maintenant les actus dofus pour ne rien manquer ! !actus mp moi... 🌵").catch(e => console.log(e));

//     const msgClasse = discord.channels.cache.get("805067889336909855");
//     msgActus.send("👻 Tu peux voir la liste des personnages en tapant !classe mp moi... 👻").catch(e => console.log(e));

// });

discord.login(config.BOT_TOKEN);

discord.on('ready', () => {
    console.log(`Logged in as ${discord.user.tag}!`);

    let channel = discord.channels.cache.get('805735120694149180');

    channel.join()
        .then(connection => {
            console.log('Rejoins le channel Audio');

            connection.play(('https://gaetan.store/audio/mp3/dofus.mp3'))

        })
        .catch(console.error);

    // Almanax
    setInterval(() => {
        almanax()
    }, 04000000);

    setInterval((res) => {
        discord.on('ready', () => {

            then(connection => {
                    console.log('Rejoins le channel Audio');

                    connection.play(('https://gaetan.store/audio/mp3/dofus.mp3'))

                })
                .catch(console.error);

        })

        console.log(res);
    }, 3852000);

});

module.exports = {
    discord
}