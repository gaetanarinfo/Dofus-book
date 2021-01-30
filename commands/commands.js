const Discord = require('discord.js'),
    { discord } = require('../bot'),
    prefix = "!",
    Article = require('../api/database/model/Article')

module.exports = msg => {
    let args = msg.content.substring(prefix.length).split(" ");

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
    }

}