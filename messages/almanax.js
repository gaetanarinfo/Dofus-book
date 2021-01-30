const Discord = require('discord.js'),
    { discord } = require('../bot'),
    fs = require('fs')

// Lire fichier json
let files = fs.readFileSync('./json/almanax.json'),
    data = JSON.parse(files)

// Card discord
module.exports = {
    embed: new Discord.MessageEmbed()
        .setColor('#9B47DC')
        .setTitle(data[0].title)
        .setURL('http://www.krosmoz.com/fr/almanax?game=dofus')
        .setAuthor(discord.user.username, 'https://pht.qoo-static.com/DwTsGsKrvYPsC-TzKc-3dasiEgIwVOUY5wgTT94XPzcHJP-5V5pvSKZ9v1j1m85OdFfm=w300')
        .setDescription(data[0].content)
        .setThumbnail(data[0].img)
        .setImage('https://staticns.ankama.com/comm/news/dofus/www/08_2012/carrou-almanax1.jpg')
        .setTimestamp()
        .setFooter(discord.user.username, 'https://pht.qoo-static.com/DwTsGsKrvYPsC-TzKc-3dasiEgIwVOUY5wgTT94XPzcHJP-5V5pvSKZ9v1j1m85OdFfm=w300'),

    embed2: new Discord.MessageEmbed()
        .setColor('#9B47DC')
        .setTitle('Bonus et Quêtes DOFUS')
        .setURL('http://www.krosmoz.com/fr/almanax?game=dofus')
        .setAuthor(discord.user.username, 'https://pht.qoo-static.com/DwTsGsKrvYPsC-TzKc-3dasiEgIwVOUY5wgTT94XPzcHJP-5V5pvSKZ9v1j1m85OdFfm=w300')
        .setDescription(data[0].content2)
        .setThumbnail(data[0].img2)
        .setTimestamp()
        .setFooter(discord.user.username, 'https://pht.qoo-static.com/DwTsGsKrvYPsC-TzKc-3dasiEgIwVOUY5wgTT94XPzcHJP-5V5pvSKZ9v1j1m85OdFfm=w300')
}