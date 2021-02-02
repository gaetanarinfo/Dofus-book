const config = require('../config.json'),
    Discord = require('discord.js'),
    discord = new Discord.Client(),
    Article = require('../api/database/model/Article'),
    fs = require('fs'),
    getJSON = require('get-json')

module.exports = msg => {
    let args = msg.content.substring(config.prefix.length).split(" ");

    switch (args[0]) {
        case 'help':
            msg.author.createDM().then(channel => {
                channel.send({
                    embed: require('../messages/help').embed
                })
            });
            break;
        case 'almanax':
            msg.author.createDM().then(channel => {
                channel.send({
                        embed: require('../messages/almanax').embed,
                    }),
                    channel.send({
                        embed: require('../messages/almanax').embed2
                    })
            });
            break;
        case 'actus':
            msg.author.createDM().then(channel => {
                Article
                    .find({})
                    .sort('-dateCreate')
                    .limit(6)
                    .lean()
                    .exec((err, articles) => {
                        articles.forEach(u => {
                            msg.channel
                                .send(new Discord.MessageEmbed()
                                    .setColor('#30B3C0')
                                    .setTitle(u.title)
                                    .setURL(u.url)
                                    .setAuthor(u.author, 'https://pht.qoo-static.com/DwTsGsKrvYPsC-TzKc-3dasiEgIwVOUY5wgTT94XPzcHJP-5V5pvSKZ9v1j1m85OdFfm=w300')
                                    .setDescription(u.content)
                                    .setThumbnail(u.category)
                                    .addFields({ name: 'Catégorie', value: u.cat })
                                    .setImage(u.image)
                                    .setTimestamp(u.dateCreate)
                                    .setFooter(u.author, 'https://pht.qoo-static.com/DwTsGsKrvYPsC-TzKc-3dasiEgIwVOUY5wgTT94XPzcHJP-5V5pvSKZ9v1j1m85OdFfm=w300'))
                                .catch(err => console.log(err));
                        })
                    })
            });
            break;
        case 'classe':
            if (args[1] == undefined) {
                msg.author.createDM().then(channel => {
                    let files = fs.readFileSync('./json/classes.json'),
                        data = JSON.parse(files)

                    msg.channel
                        .send(' | Résultat trouvé : ' + data.length + ' | ');

                    data.forEach(r => {
                        msg.channel
                            .send(' | ' + r.title + ' - Personnage : ' + r.order + ' | ');
                    })
                });
                break;
            } else {
                let files2 = fs.readFileSync('./json/classes.json'),
                    data2 = JSON.parse(files2)

                data2.forEach(r => {
                    if (r.order == args[1]) {
                        msg.channel
                            .send(new Discord.MessageEmbed()
                                .setColor('#9B47DC')
                                .setTitle(r.title)
                                .setURL('http://www.krosmoz.com/fr/almanax?game=dofus')
                                .setAuthor('Dofus-Book', 'https://pht.qoo-static.com/DwTsGsKrvYPsC-TzKc-3dasiEgIwVOUY5wgTT94XPzcHJP-5V5pvSKZ9v1j1m85OdFfm=w300')
                                .setDescription(r.content)
                                .setThumbnail(r.image2)
                                .addFields({ name: 'Catégorie', value: r.cat })
                                .setImage(r.image))
                            .catch(err => console.log(err));
                    }
                })
                break;
            }
        case 'metier':

            if (args[1] == undefined) {
                msg.author.createDM().then(channel => {

                    getJSON('https://fr.dofus.dofapi.fr/professions', function(err, res) {

                        msg.channel
                            .send(' | Résultat trouvé : ' + res.length + ' | ');

                        res.forEach(r => {
                            msg.channel
                                .send(' | ' + r.name + ' | ');
                        })

                    })

                })
                break;
            } else {

                getJSON('https://fr.dofus.dofapi.fr/professions', function(err, res) {

                    res.forEach(r => {
                        if (r.name == args[1]) {
                            msg.channel
                                .send(new Discord.MessageEmbed()
                                    .setColor('#9B47DC')
                                    .setTitle(r.name)
                                    .setURL(r.url)
                                    .setAuthor('Dofus-Book', 'https://pht.qoo-static.com/DwTsGsKrvYPsC-TzKc-3dasiEgIwVOUY5wgTT94XPzcHJP-5V5pvSKZ9v1j1m85OdFfm=w300')
                                    .setDescription(r.description)
                                    .setThumbnail(r.imgUrl)
                                    .setImage(r.imgUrl))
                                .catch(err => console.log(err));
                        }
                    })

                })

                break;
}
                
  
      


    }
}
