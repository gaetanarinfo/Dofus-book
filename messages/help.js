const Discord = require('discord.js');
const { discord } = require('../bot');

module.exports = {
    embed: new Discord.MessageEmbed()
        .setColor('#0FEF2D')
        .setTitle("🤖 Site officiel 🤖")
        .setURL('https://www.dofus.com/')
        .setAuthor(discord.user.username, 'https://pht.qoo-static.com/DwTsGsKrvYPsC-TzKc-3dasiEgIwVOUY5wgTT94XPzcHJP-5V5pvSKZ9v1j1m85OdFfm=w300')
        .setDescription('Retrouver les commandes utilisable de Dofus Book')
        .setThumbnail('https://pht.qoo-static.com/DwTsGsKrvYPsC-TzKc-3dasiEgIwVOUY5wgTT94XPzcHJP-5V5pvSKZ9v1j1m85OdFfm=w300')
        .addFields({ name: '\`🧡 !help\`', value: "Commande d'aide du bot !" }, { name: '\`💜 !almanax\`', value: "Permet de voir l'almanax du jour !" }, {
            name: '\`🤎 !actus\`',
            value: "Permet de voir les dernières actualités !"
        }, {
            name: '\`🖤 !classes\`',
            value: "Permet de voir la liste des classes disponible !"
        }, {
            name: '\`💗 !classes nomdupersonnage\`',
            value: "Permet de voir la classe du personnage !"
        }, {
            name: '\`💚 !metiers\`',
            value: "Permet de voir les metiers disponible !"
        }, {
            name: '\`🧡 !metiers nomdumetier\`',
            value: "Permet de voir un metier !"
        }, {
            name: '\`💙 !havens\`',
            value: "Permet de voir les havenbags disponible !"
        }, {
            name: '\`💝 !havens nomduhavenbags\`',
            value: "Permet de voir les havenbags disponible !"
        })
        .setImage('https://static.ankama.com/ankama/cms/images/273/2020/01/03/1083711.w500h.jpg')
        .setTimestamp()
        .setFooter(discord.user.username, 'https://pht.qoo-static.com/DwTsGsKrvYPsC-TzKc-3dasiEgIwVOUY5wgTT94XPzcHJP-5V5pvSKZ9v1j1m85OdFfm=w300')
}