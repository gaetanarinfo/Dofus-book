const livereload = require('livereload'),
    reload = livereload.createServer(),
    Discord = require('discord.js'),
    discord = new Discord.Client(),
    config = require("./config.json"),
    commands = require("./commands/commands"),
    almanax = require("./json/almanax")

reload.watch(__dirname + "/bots.js")

// Connect Database
require('./api/database/db');

// Pour les commandes discord
discord.on('message', msg => {

    if (msg.author.bot) return;

    msg.prefix = config.prefix;
    commands(msg);

})

discord.login(config.BOT_TOKEN);

discord.on('ready', () => {
    console.log(`Logged in as ${discord.user.tag}!`);

    let channel = discord.channels.cache.get('805735120694149180');

    if (!channel) {

        const getDefaultChannel = () => {

            const Long = require("long");

            const generalChannel = discord.channels.cache.find(channel => channel.name === "Général");

            console.log(generalChannel)

            if (generalChannel) {
                generalChannel.join()
                    .then(connection => {

                        connection.play(('https://gaetan.store/audio/mp3/dofus.mp3'))

                    })
                    .catch(console.error);
            }
        }

        getDefaultChannel()

    } else {

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

    }

});

module.exports = {
    discord
}