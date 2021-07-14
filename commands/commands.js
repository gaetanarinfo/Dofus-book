const config = require('../config.json'),
    Discord = require('discord.js'),
    discord = new Discord.Client(),
    Article = require('../api/database/model/Article'),
    fs = require('fs'),
    equips = require('./equips'),
    consums = require('./consums'),
    weapons = require('./weapons'),
    mounts = require('./mounts'),
    monsters = require('./monsters'),
    sets = require('./sets')

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
                                    .setImage(`http://gaetan-book.fr/${u.image}`)
                                    .setTimestamp(u.dateCreate)
                                    .setFooter(u.author, 'https://pht.qoo-static.com/DwTsGsKrvYPsC-TzKc-3dasiEgIwVOUY5wgTT94XPzcHJP-5V5pvSKZ9v1j1m85OdFfm=w300'))
                                .catch(err => console.log(err));
                        })
                    })
            });
            break;
        case 'classes':
            if (args[1] == undefined) {
                msg.author.createDM().then(channel => {
                    let files = fs.readFileSync('./json/classes.json'),
                        data = JSON.parse(files),
                        listArr = []

                    data.forEach(r => {

                        const datas = r.order

                        listArr.push(datas)
                    })

                    msg.channel
                        .send('Personnage trouvé(s) : ' + data.length);

                    msg.channel
                        .send(listArr.join(', '));

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
        case 'metiers':

            if (args[1] == undefined) {
                msg.author.createDM().then(channel => {
                    let files = fs.readFileSync('./json/professions.json'),
                        data = JSON.parse(files),
                        listArr = []

                    data.forEach(r => {

                        const datas = r.name

                        listArr.push(datas)

                        return datas
                    })

                    msg.channel
                        .send('Métier trouvé(s) : ' + data.length);

                    msg.channel
                        .send(listArr.join(', '));

                });
                break;
            } else {
                let files2 = fs.readFileSync('./json/professions.json'),
                    data2 = JSON.parse(files2)

                data2.forEach(r => {
                    if (r.name == args[1]) {
                        msg.channel
                            .send(new Discord.MessageEmbed()
                                .setColor('#C32F3F')
                                .setTitle(r.name)
                                .setURL(r.url)
                                .setAuthor('Dofus-Book', 'https://pht.qoo-static.com/DwTsGsKrvYPsC-TzKc-3dasiEgIwVOUY5wgTT94XPzcHJP-5V5pvSKZ9v1j1m85OdFfm=w300')
                                .setDescription(r.description)
                                .setThumbnail(r.imgUrl))
                            .catch(err => console.log(err));
                    }
                })
                break;
            }

        case 'pets':

            if (args[1] == undefined) {
                msg.author.createDM().then(channel => {
                    let files = fs.readFileSync('./json/pets.json'),
                        data = JSON.parse(files),
                        listArr = []

                    data.forEach(r => {

                        const datas = r.name

                        listArr.push(datas)

                        return datas
                    })

                    msg.channel
                        .send('Familier trouvé(s) : ' + data.length);

                    msg.channel
                        .send(listArr.join(', '));

                });
                break;
            } else {
                let files2 = fs.readFileSync('./json/pets.json'),
                    data2 = JSON.parse(files2)

                data2.forEach(r => {
                    if (r.name == args[1]) {
                        msg.channel
                            .send(new Discord.MessageEmbed()
                                .setColor('#21B246')
                                .setTitle(r.name)
                                .setURL(r.url)
                                .setAuthor('Dofus-Book', 'https://pht.qoo-static.com/DwTsGsKrvYPsC-TzKc-3dasiEgIwVOUY5wgTT94XPzcHJP-5V5pvSKZ9v1j1m85OdFfm=w300')
                                .setDescription(r.description)
                                .addFields({ name: 'Type', value: r.type, inline: true }, { name: 'Level', value: r.level, inline: true })
                                .setThumbnail(r.imgUrl))
                            .catch(err => console.log(err));
                    }
                })
                break;
            }

        case 'equips':

            if (args[1] == undefined) {
                msg.author.createDM().then(channel => {
                    let files = fs.readFileSync('./json/equipments.json'),
                        data = JSON.parse(files)

                    // Function qui récupere les datas
                    equips(msg, data)

                });
                break;
            } else {
                let files2 = fs.readFileSync('./json/equipments.json'),
                    data2 = JSON.parse(files2)

                data2.forEach(r => {
                    if (r.name == args[1]) {
                        msg.channel
                            .send(new Discord.MessageEmbed()
                                .setColor('#F7ED1F')
                                .setTitle(r.name)
                                .setURL(r.url)
                                .setAuthor('Dofus-Book', 'https://pht.qoo-static.com/DwTsGsKrvYPsC-TzKc-3dasiEgIwVOUY5wgTT94XPzcHJP-5V5pvSKZ9v1j1m85OdFfm=w300')
                                .setDescription(r.description)
                                .addFields({ name: 'Type', value: r.type, inline: true }, { name: 'Level', value: r.level, inline: true })
                                .setThumbnail(r.imgUrl))
                            .catch(err => console.log(err));
                    } else if (r.name == args[1] + ' ' + args[2]) {
                        msg.channel
                            .send(new Discord.MessageEmbed()
                                .setColor('#F7ED1F')
                                .setTitle(r.name)
                                .setURL(r.url)
                                .setAuthor('Dofus-Book', 'https://pht.qoo-static.com/DwTsGsKrvYPsC-TzKc-3dasiEgIwVOUY5wgTT94XPzcHJP-5V5pvSKZ9v1j1m85OdFfm=w300')
                                .setDescription(r.description)
                                .addFields({ name: 'Type', value: r.type, inline: true }, { name: 'Level', value: r.level, inline: true })
                                .setThumbnail(r.imgUrl))
                            .catch(err => console.log(err));
                    } else if (r.name == args[1] + ' ' + args[2] + ' ' + args[3]) {
                        msg.channel
                            .send(new Discord.MessageEmbed()
                                .setColor('#F7ED1F')
                                .setTitle(r.name)
                                .setURL(r.url)
                                .setAuthor('Dofus-Book', 'https://pht.qoo-static.com/DwTsGsKrvYPsC-TzKc-3dasiEgIwVOUY5wgTT94XPzcHJP-5V5pvSKZ9v1j1m85OdFfm=w300')
                                .setDescription(r.description)
                                .addFields({ name: 'Type', value: r.type, inline: true }, { name: 'Level', value: r.level, inline: true })
                                .setThumbnail(r.imgUrl))
                            .catch(err => console.log(err));
                    } else if (r.name == args[1] + ' ' + args[2] + ' ' + args[3] + ' ' + args[4]) {
                        msg.channel
                            .send(new Discord.MessageEmbed()
                                .setColor('#F7ED1F')
                                .setTitle(r.name)
                                .setURL(r.url)
                                .setAuthor('Dofus-Book', 'https://pht.qoo-static.com/DwTsGsKrvYPsC-TzKc-3dasiEgIwVOUY5wgTT94XPzcHJP-5V5pvSKZ9v1j1m85OdFfm=w300')
                                .setDescription(r.description)
                                .addFields({ name: 'Type', value: r.type, inline: true }, { name: 'Level', value: r.level, inline: true })
                                .setThumbnail(r.imgUrl))
                            .catch(err => console.log(err));
                    } else if (r.name == args[1] + ' ' + args[2] + ' ' + args[3] + ' ' + args[4] + ' ' + args[5]) {
                        msg.channel
                            .send(new Discord.MessageEmbed()
                                .setColor('#F7ED1F')
                                .setTitle(r.name)
                                .setURL(r.url)
                                .setAuthor('Dofus-Book', 'https://pht.qoo-static.com/DwTsGsKrvYPsC-TzKc-3dasiEgIwVOUY5wgTT94XPzcHJP-5V5pvSKZ9v1j1m85OdFfm=w300')
                                .setDescription(r.description)
                                .addFields({ name: 'Type', value: r.type, inline: true }, { name: 'Level', value: r.level, inline: true })
                                .setThumbnail(r.imgUrl))
                            .catch(err => console.log(err));
                    }
                })
                break;
            }

        case 'havens':

            if (args[1] == undefined) {
                msg.author.createDM().then(channel => {
                    let files = fs.readFileSync('./json/havenbags.json'),
                        data = JSON.parse(files),
                        listArr = []

                    data.forEach(r => {

                        const datas = r.name

                        listArr.push(datas)

                        return datas
                    })

                    msg.channel
                        .send('Havenbag trouvé(s) : ' + 'Havres-sacs ' + data.length);

                    msg.channel
                        .send(listArr.join(', '));

                });
                break;
            } else {
                let files2 = fs.readFileSync('./json/havenbags.json'),
                    data2 = JSON.parse(files2)

                data2.forEach(r => {
                    if (r.name == args[1] || r.name == args[1]) {
                        msg.channel
                            .send(new Discord.MessageEmbed()
                                .setColor('#6283D0')
                                .setTitle(r.name)
                                .setURL(r.url)
                                .setAuthor('Dofus-Book', 'https://pht.qoo-static.com/DwTsGsKrvYPsC-TzKc-3dasiEgIwVOUY5wgTT94XPzcHJP-5V5pvSKZ9v1j1m85OdFfm=w300')
                                .setDescription("Les Havres-Sacs arrivent enfin sur DOFUS avec la version 2.32, vous permettant de personnaliser l'intérieur d'une maison tout en vous offrant un espace de stockage supplémentaire. \n Ces «maisons» sont partagées entre tous les personnages sur le même compte et sur le même serveur (comme une banque). \n Les Havres-Sacs sont disponibles pour chaque compte, mais certaines fonctionnalités seront réservées aux comptes d'abonnement uniquement.")
                                .setThumbnail(r.imgUrl)
                                .setImage('https://static.ankama.com/comm/news/ankama/www/11_2015/ng-havre-sac.jpg'))
                            .catch(err => console.log(err));
                    } else if (r.name == args[1] + ' ' + args[2]) {
                        msg.channel
                            .send(new Discord.MessageEmbed()
                                .setColor('#6283D0')
                                .setTitle(r.name)
                                .setURL(r.url)
                                .setAuthor('Dofus-Book', 'https://pht.qoo-static.com/DwTsGsKrvYPsC-TzKc-3dasiEgIwVOUY5wgTT94XPzcHJP-5V5pvSKZ9v1j1m85OdFfm=w300')
                                .setDescription("Les Havres-Sacs arrivent enfin sur DOFUS avec la version 2.32, vous permettant de personnaliser l'intérieur d'une maison tout en vous offrant un espace de stockage supplémentaire. \n Ces «maisons» sont partagées entre tous les personnages sur le même compte et sur le même serveur (comme une banque). \n Les Havres-Sacs sont disponibles pour chaque compte, mais certaines fonctionnalités seront réservées aux comptes d'abonnement uniquement.")
                                .setThumbnail(r.imgUrl)
                                .setImage('https://static.ankama.com/comm/news/ankama/www/11_2015/ng-havre-sac.jpg'))
                            .catch(err => console.log(err));
                    } else if (r.name == args[1] + ' ' + args[2] + ' ' + args[3]) {
                        msg.channel
                            .send(new Discord.MessageEmbed()
                                .setColor('#6283D0')
                                .setTitle(r.name)
                                .setURL(r.url)
                                .setAuthor('Dofus-Book', 'https://pht.qoo-static.com/DwTsGsKrvYPsC-TzKc-3dasiEgIwVOUY5wgTT94XPzcHJP-5V5pvSKZ9v1j1m85OdFfm=w300')
                                .setDescription("Les Havres-Sacs arrivent enfin sur DOFUS avec la version 2.32, vous permettant de personnaliser l'intérieur d'une maison tout en vous offrant un espace de stockage supplémentaire. \n Ces «maisons» sont partagées entre tous les personnages sur le même compte et sur le même serveur (comme une banque). \n Les Havres-Sacs sont disponibles pour chaque compte, mais certaines fonctionnalités seront réservées aux comptes d'abonnement uniquement.")
                                .setThumbnail(r.imgUrl)
                                .setImage('https://static.ankama.com/comm/news/ankama/www/11_2015/ng-havre-sac.jpg'))
                            .catch(err => console.log(err));
                    } else if (r.name == args[1] + ' ' + args[2] + ' ' + args[3] + ' ' + args[4]) {
                        msg.channel
                            .send(new Discord.MessageEmbed()
                                .setColor('#6283D0')
                                .setTitle(r.name)
                                .setURL(r.url)
                                .setAuthor('Dofus-Book', 'https://pht.qoo-static.com/DwTsGsKrvYPsC-TzKc-3dasiEgIwVOUY5wgTT94XPzcHJP-5V5pvSKZ9v1j1m85OdFfm=w300')
                                .setDescription("Les Havres-Sacs arrivent enfin sur DOFUS avec la version 2.32, vous permettant de personnaliser l'intérieur d'une maison tout en vous offrant un espace de stockage supplémentaire. \n Ces «maisons» sont partagées entre tous les personnages sur le même compte et sur le même serveur (comme une banque). \n Les Havres-Sacs sont disponibles pour chaque compte, mais certaines fonctionnalités seront réservées aux comptes d'abonnement uniquement.")
                                .setThumbnail(r.imgUrl)
                                .setImage('https://static.ankama.com/comm/news/ankama/www/11_2015/ng-havre-sac.jpg'))
                            .catch(err => console.log(err));
                    } else if (r.name == args[1] + ' ' + args[2] + ' ' + args[3] + ' ' + args[4] + ' ' + args[5]) {
                        msg.channel
                            .send(new Discord.MessageEmbed()
                                .setColor('#6283D0')
                                .setTitle(r.name)
                                .setURL(r.url)
                                .setAuthor('Dofus-Book', 'https://pht.qoo-static.com/DwTsGsKrvYPsC-TzKc-3dasiEgIwVOUY5wgTT94XPzcHJP-5V5pvSKZ9v1j1m85OdFfm=w300')
                                .setDescription("Les Havres-Sacs arrivent enfin sur DOFUS avec la version 2.32, vous permettant de personnaliser l'intérieur d'une maison tout en vous offrant un espace de stockage supplémentaire. \n Ces «maisons» sont partagées entre tous les personnages sur le même compte et sur le même serveur (comme une banque). \n Les Havres-Sacs sont disponibles pour chaque compte, mais certaines fonctionnalités seront réservées aux comptes d'abonnement uniquement.")
                                .setThumbnail(r.imgUrl)
                                .setImage('https://static.ankama.com/comm/news/ankama/www/11_2015/ng-havre-sac.jpg'))
                            .catch(err => console.log(err));
                    }
                })
                break;
            }

        case 'idols':

            if (args[1] == undefined) {
                msg.author.createDM().then(channel => {
                    let files = fs.readFileSync('./json/idols.json'),
                        data = JSON.parse(files),
                        listArr = []

                    data.forEach(r => {

                        const datas = r.name

                        listArr.push(datas)

                        return datas
                    })

                    msg.channel
                        .send('Idols trouvé(s) : ' + data.length);

                    msg.channel
                        .send(listArr.join(', '));

                });
                break;
            } else {
                let files2 = fs.readFileSync('./json/idols.json'),
                    data2 = JSON.parse(files2)

                data2.forEach(r => {

                    const valueArray = JSON.stringify(r.statistics),
                        tab = []

                    tab.push(valueArray)

                    const reqArr = JSON.parse(valueArray),
                        resArr = [],
                        resArr2 = []

                    reqArr.forEach(r => {
                        resArr.push(r.name)
                    })

                    reqArr.forEach(r => {
                        resArr2.push(r.power)
                    })


                    if (r.name == args[1]) {

                        msg.channel
                            .send(new Discord.MessageEmbed()
                                .setColor('#9F61AE')
                                .setTitle(r.name)
                                .setURL(r.url)
                                .setAuthor('Dofus-Book', 'https://pht.qoo-static.com/DwTsGsKrvYPsC-TzKc-3dasiEgIwVOUY5wgTT94XPzcHJP-5V5pvSKZ9v1j1m85OdFfm=w300')
                                .setDescription(r.description)
                                .addFields({ name: 'Bonus', value: resArr.slice(-1).join(', '), inline: true }, { name: 'Puissance', value: resArr2.slice(-1).join(', '), inline: true })
                                .setThumbnail(r.imgUrl))
                            .catch(err => console.log(err));
                    } else if (r.name == args[1] + ' ' + args[2]) {
                        msg.channel
                            .setColor('#9F61AE')
                            .setTitle(r.name)
                            .setURL(r.url)
                            .setAuthor('Dofus-Book', 'https://pht.qoo-static.com/DwTsGsKrvYPsC-TzKc-3dasiEgIwVOUY5wgTT94XPzcHJP-5V5pvSKZ9v1j1m85OdFfm=w300')
                            .setDescription(r.description)
                            .addFields({ name: 'Bonus', value: resArr.slice(-1).join(', '), inline: true }, { name: 'Puissance', value: resArr2.slice(-1).join(', '), inline: true })
                            .setThumbnail(r.imgUrl)
                            .catch(err => console.log(err));
                    } else if (r.name == args[1] + ' ' + args[2] + ' ' + args[3]) {
                        msg.channel
                            .setColor('#9F61AE')
                            .setTitle(r.name)
                            .setURL(r.url)
                            .setAuthor('Dofus-Book', 'https://pht.qoo-static.com/DwTsGsKrvYPsC-TzKc-3dasiEgIwVOUY5wgTT94XPzcHJP-5V5pvSKZ9v1j1m85OdFfm=w300')
                            .setDescription(r.description)
                            .addFields({ name: 'Bonus', value: resArr.slice(-1).join(', '), inline: true }, { name: 'Puissance', value: resArr2.slice(-1).join(', '), inline: true })
                            .setThumbnail(r.imgUrl)
                            .catch(err => console.log(err));
                    } else if (r.name == args[1] + ' ' + args[2] + ' ' + args[3] + ' ' + args[4]) {
                        msg.channel
                            .setColor('#9F61AE')
                            .setTitle(r.name)
                            .setURL(r.url)
                            .setAuthor('Dofus-Book', 'https://pht.qoo-static.com/DwTsGsKrvYPsC-TzKc-3dasiEgIwVOUY5wgTT94XPzcHJP-5V5pvSKZ9v1j1m85OdFfm=w300')
                            .setDescription(r.description)
                            .addFields({ name: 'Bonus', value: resArr.slice(-1).join(', '), inline: true }, { name: 'Puissance', value: resArr2.slice(-1).join(', '), inline: true })
                            .setThumbnail(r.imgUrl)
                            .catch(err => console.log(err));
                    } else if (r.name == args[1] + ' ' + args[2] + ' ' + args[3] + ' ' + args[4] + ' ' + args[5]) {
                        msg.channel
                            .setColor('#9F61AE')
                            .setTitle(r.name)
                            .setURL(r.url)
                            .setAuthor('Dofus-Book', 'https://pht.qoo-static.com/DwTsGsKrvYPsC-TzKc-3dasiEgIwVOUY5wgTT94XPzcHJP-5V5pvSKZ9v1j1m85OdFfm=w300')
                            .setDescription(r.description)
                            .addFields({ name: 'Bonus', value: resArr.slice(-1).join(', '), inline: true }, { name: 'Puissance', value: resArr2.slice(-1).join(', '), inline: true })
                            .setThumbnail(r.imgUrl)
                            .catch(err => console.log(err));
                    }
                })
                break;
            }

        case 'consums':

            if (args[1] == undefined) {
                msg.author.createDM().then(channel => {
                    let files = fs.readFileSync('./json/consumables.json'),
                        data = JSON.parse(files)

                    // Function qui récupere les datas
                    consums(msg, data)

                });
                break;
            } else {
                let files2 = fs.readFileSync('./json/consumables.json'),
                    data2 = JSON.parse(files2)

                data2.forEach(r => {
                    if (r.name == args[1]) {
                        msg.channel
                            .send(new Discord.MessageEmbed()
                                .setColor('#F7ED1F')
                                .setTitle(r.name)
                                .setURL(r.url)
                                .setAuthor('Dofus-Book', 'https://pht.qoo-static.com/DwTsGsKrvYPsC-TzKc-3dasiEgIwVOUY5wgTT94XPzcHJP-5V5pvSKZ9v1j1m85OdFfm=w300')
                                .setDescription(r.description)
                                .addFields({ name: 'Type', value: r.type, inline: true }, { name: 'Level', value: r.level, inline: true })
                                .setThumbnail(r.imgUrl)
                                .setImage(r.imgUrl))
                            .catch(err => console.log(err));
                    } else if (r.name == args[1] + ' ' + args[2]) {
                        msg.channel
                            .send(new Discord.MessageEmbed()
                                .setColor('#F7ED1F')
                                .setTitle(r.name)
                                .setURL(r.url)
                                .setAuthor('Dofus-Book', 'https://pht.qoo-static.com/DwTsGsKrvYPsC-TzKc-3dasiEgIwVOUY5wgTT94XPzcHJP-5V5pvSKZ9v1j1m85OdFfm=w300')
                                .setDescription(r.description)
                                .addFields({ name: 'Type', value: r.type, inline: true }, { name: 'Level', value: r.level, inline: true })
                                .setThumbnail(r.imgUrl)
                                .setImage(r.imgUrl))
                            .catch(err => console.log(err));
                    } else if (r.name == args[1] + ' ' + args[2] + ' ' + args[3]) {
                        msg.channel
                            .send(new Discord.MessageEmbed()
                                .setColor('#F7ED1F')
                                .setTitle(r.name)
                                .setURL(r.url)
                                .setAuthor('Dofus-Book', 'https://pht.qoo-static.com/DwTsGsKrvYPsC-TzKc-3dasiEgIwVOUY5wgTT94XPzcHJP-5V5pvSKZ9v1j1m85OdFfm=w300')
                                .setDescription(r.description)
                                .addFields({ name: 'Type', value: r.type, inline: true }, { name: 'Level', value: r.level, inline: true })
                                .setThumbnail(r.imgUrl)
                                .setImage(r.imgUrl))
                            .catch(err => console.log(err));
                    } else if (r.name == args[1] + ' ' + args[2] + ' ' + args[3] + ' ' + args[4]) {
                        msg.channel
                            .send(new Discord.MessageEmbed()
                                .setColor('#F7ED1F')
                                .setTitle(r.name)
                                .setURL(r.url)
                                .setAuthor('Dofus-Book', 'https://pht.qoo-static.com/DwTsGsKrvYPsC-TzKc-3dasiEgIwVOUY5wgTT94XPzcHJP-5V5pvSKZ9v1j1m85OdFfm=w300')
                                .setDescription(r.description)
                                .addFields({ name: 'Type', value: r.type, inline: true }, { name: 'Level', value: r.level, inline: true })
                                .setThumbnail(r.imgUrl)
                                .setImage(r.imgUrl))
                            .catch(err => console.log(err));
                    } else if (r.name == args[1] + ' ' + args[2] + ' ' + args[3] + ' ' + args[4] + ' ' + args[5]) {
                        msg.channel
                            .send(new Discord.MessageEmbed()
                                .setColor('#F7ED1F')
                                .setTitle(r.name)
                                .setURL(r.url)
                                .setAuthor('Dofus-Book', 'https://pht.qoo-static.com/DwTsGsKrvYPsC-TzKc-3dasiEgIwVOUY5wgTT94XPzcHJP-5V5pvSKZ9v1j1m85OdFfm=w300')
                                .setDescription(r.description)
                                .addFields({ name: 'Type', value: r.type, inline: true }, { name: 'Level', value: r.level, inline: true })
                                .setThumbnail(r.imgUrl)
                                .setImage(r.imgUrl))
                            .catch(err => console.log(err));
                    }
                })
                break;
            }

        case 'weapons':

            if (args[1] == undefined) {
                msg.author.createDM().then(channel => {
                    let files = fs.readFileSync('./json/weapons.json'),
                        data = JSON.parse(files)

                    // Function qui récupere les datas
                    weapons(msg, data)

                });
                break;
            } else {

                let files = fs.readFileSync('./json/weapons.json'),
                    data = JSON.parse(files)

                data.forEach(r => {

                    const valueArray = JSON.stringify(r.characteristics),
                        tab = []

                    tab.push(valueArray)

                    const reqArr = JSON.parse(valueArray),
                        resArr = [],
                        resArr2 = [],
                        resArr3 = []

                    reqArr.forEach(r => {
                        resArr.push(r.PA)
                    })

                    reqArr.forEach(r => {
                        resArr2.push(r.Portée)
                    })

                    reqArr.forEach(r => {
                        resArr3.push(r.CC)
                    })

                    if (r.name == args[1]) {

                        msg.channel
                            .send(new Discord.MessageEmbed()
                                .setColor('#9F61AE')
                                .setTitle(r.name)
                                .setURL(r.url)
                                .setAuthor('Dofus-Book', 'https://pht.qoo-static.com/DwTsGsKrvYPsC-TzKc-3dasiEgIwVOUY5wgTT94XPzcHJP-5V5pvSKZ9v1j1m85OdFfm=w300')
                                .setDescription(r.description)
                                .addFields({ name: 'Level', value: r.level, inline: true }, { name: 'Type', value: r.type, inline: true }, { name: 'PA', value: resArr.slice(-3), inline: true, required: false }, { name: 'Portée', value: resArr2.slice(-3), inline: true, required: false }, { name: 'CC', value: resArr3.slice(-3), inline: true, required: false })
                                .setThumbnail(r.imgUrl))
                            .catch(err => console.log(err));
                    } else if (r.name == args[1] + ' ' + args[2]) {
                        msg.channel
                            .send(new Discord.MessageEmbed()
                                .setColor('#9F61AE')
                                .setTitle(r.name)
                                .setURL(r.url)
                                .setAuthor('Dofus-Book', 'https://pht.qoo-static.com/DwTsGsKrvYPsC-TzKc-3dasiEgIwVOUY5wgTT94XPzcHJP-5V5pvSKZ9v1j1m85OdFfm=w300')
                                .setDescription(r.description)
                                .addFields({ name: 'Level', value: r.level, inline: true }, { name: 'Type', value: r.type, inline: true }, { name: 'PA', value: resArr.slice(-3), inline: true, required: false }, { name: 'Portée', value: resArr2.slice(-3), inline: true, required: false }, { name: 'CC', value: resArr3.slice(-3), inline: true, required: false })
                                .setThumbnail(r.imgUrl))
                            .catch(err => console.log(err));
                    } else if (r.name == args[1] + ' ' + args[2] + ' ' + args[3]) {
                        msg.channel
                            .send(new Discord.MessageEmbed()
                                .setColor('#9F61AE')
                                .setTitle(r.name)
                                .setURL(r.url)
                                .setAuthor('Dofus-Book', 'https://pht.qoo-static.com/DwTsGsKrvYPsC-TzKc-3dasiEgIwVOUY5wgTT94XPzcHJP-5V5pvSKZ9v1j1m85OdFfm=w300')
                                .setDescription(r.description)
                                .addFields({ name: 'Level', value: r.level, inline: true }, { name: 'Type', value: r.type, inline: true }, { name: 'PA', value: resArr.slice(-3), inline: true, required: false }, { name: 'Portée', value: resArr2.slice(-3), inline: true, required: false }, { name: 'CC', value: resArr3.slice(-3), inline: true, required: false })
                                .setThumbnail(r.imgUrl))
                            .catch(err => console.log(err));
                    } else if (r.name == args[1] + ' ' + args[2] + ' ' + args[3] + ' ' + args[4]) {
                        msg.channel
                            .send(new Discord.MessageEmbed()
                                .setColor('#9F61AE')
                                .setTitle(r.name)
                                .setURL(r.url)
                                .setAuthor('Dofus-Book', 'https://pht.qoo-static.com/DwTsGsKrvYPsC-TzKc-3dasiEgIwVOUY5wgTT94XPzcHJP-5V5pvSKZ9v1j1m85OdFfm=w300')
                                .setDescription(r.description)
                                .addFields({ name: 'Level', value: r.level, inline: true }, { name: 'Type', value: r.type, inline: true }, { name: 'PA', value: resArr.slice(-3), inline: true, required: false }, { name: 'Portée', value: resArr2.slice(-3), inline: true, required: false }, { name: 'CC', value: resArr3.slice(-3), inline: true, required: false })
                                .setThumbnail(r.imgUrl))
                            .catch(err => console.log(err));
                    } else if (r.name == args[1] + ' ' + args[2] + ' ' + args[3] + ' ' + args[4] + ' ' + args[5]) {
                        msg.channel
                            .send(new Discord.MessageEmbed()
                                .setColor('#9F61AE')
                                .setTitle(r.name)
                                .setURL(r.url)
                                .setAuthor('Dofus-Book', 'https://pht.qoo-static.com/DwTsGsKrvYPsC-TzKc-3dasiEgIwVOUY5wgTT94XPzcHJP-5V5pvSKZ9v1j1m85OdFfm=w300')
                                .setDescription(r.description)
                                .addFields({ name: 'Level', value: r.level, inline: true }, { name: 'Type', value: r.type, inline: true }, { name: 'PA', value: resArr.slice(-3), inline: true, required: false }, { name: 'Portée', value: resArr2.slice(-3), inline: true, required: false }, { name: 'CC', value: resArr3.slice(-3), inline: true, required: false })
                                .setThumbnail(r.imgUrl))
                            .catch(err => console.log(err));
                    }
                })
                break;
            }

        case 'mounts':

            if (args[1] == undefined) {
                msg.author.createDM().then(channel => {
                    let files = fs.readFileSync('./json/mounts.json'),
                        data = JSON.parse(files)

                    // Function qui récupere les datas
                    mounts(msg, data)

                });
                break;
            } else {
                let files2 = fs.readFileSync('./json/mounts.json'),
                    data2 = JSON.parse(files2)

                data2.forEach(r => {

                    if (r.name == args[1]) {

                        msg.channel
                            .send(new Discord.MessageEmbed()
                                .setColor('#9F61AE')
                                .setTitle(r.name)
                                .setURL(r.url)
                                .setAuthor('Dofus-Book', 'https://pht.qoo-static.com/DwTsGsKrvYPsC-TzKc-3dasiEgIwVOUY5wgTT94XPzcHJP-5V5pvSKZ9v1j1m85OdFfm=w300')
                                .setDescription("Dans Dofus il existe trois types de montures : les dragodindes, les muldos et les volkornes.")
                                .addFields({ name: 'Level', value: r.level, inline: true }, { name: 'Type', value: r.type, inline: true })
                                .setThumbnail(r.imgUrl))
                            .catch(err => console.log(err));
                    } else if (r.name == args[1] + ' ' + args[2]) {
                        msg.channel
                            .send(new Discord.MessageEmbed()
                                .setColor('#9F61AE')
                                .setTitle(r.name)
                                .setURL(r.url)
                                .setAuthor('Dofus-Book', 'https://pht.qoo-static.com/DwTsGsKrvYPsC-TzKc-3dasiEgIwVOUY5wgTT94XPzcHJP-5V5pvSKZ9v1j1m85OdFfm=w300')
                                .setDescription("Dans Dofus il existe trois types de montures : les dragodindes, les muldos et les volkornes.")
                                .addFields({ name: 'Level', value: r.level, inline: true }, { name: 'Type', value: r.type, inline: true })
                                .setThumbnail(r.imgUrl))
                            .catch(err => console.log(err));
                    } else if (r.name == args[1] + ' ' + args[2] + ' ' + args[3]) {
                        msg.channel
                            .send(new Discord.MessageEmbed()
                                .setColor('#9F61AE')
                                .setTitle(r.name)
                                .setURL(r.url)
                                .setAuthor('Dofus-Book', 'https://pht.qoo-static.com/DwTsGsKrvYPsC-TzKc-3dasiEgIwVOUY5wgTT94XPzcHJP-5V5pvSKZ9v1j1m85OdFfm=w300')
                                .setDescription("Dans Dofus il existe trois types de montures : les dragodindes, les muldos et les volkornes.")
                                .addFields({ name: 'Level', value: r.level, inline: true }, { name: 'Type', value: r.type, inline: true })
                                .setThumbnail(r.imgUrl))
                            .catch(err => console.log(err));
                    } else if (r.name == args[1] + ' ' + args[2] + ' ' + args[3] + ' ' + args[4]) {
                        msg.channel
                            .send(new Discord.MessageEmbed()
                                .setColor('#9F61AE')
                                .setTitle(r.name)
                                .setURL(r.url)
                                .setAuthor('Dofus-Book', 'https://pht.qoo-static.com/DwTsGsKrvYPsC-TzKc-3dasiEgIwVOUY5wgTT94XPzcHJP-5V5pvSKZ9v1j1m85OdFfm=w300')
                                .setDescription("Dans Dofus il existe trois types de montures : les dragodindes, les muldos et les volkornes.")
                                .addFields({ name: 'Level', value: r.level, inline: true }, { name: 'Type', value: r.type, inline: true })
                                .setThumbnail(r.imgUrl))
                            .catch(err => console.log(err));
                    } else if (r.name == args[1] + ' ' + args[2] + ' ' + args[3] + ' ' + args[4] + ' ' + args[5]) {
                        msg.channel
                            .send(new Discord.MessageEmbed()
                                .setColor('#9F61AE')
                                .setTitle(r.name)
                                .setURL(r.url)
                                .setAuthor('Dofus-Book', 'https://pht.qoo-static.com/DwTsGsKrvYPsC-TzKc-3dasiEgIwVOUY5wgTT94XPzcHJP-5V5pvSKZ9v1j1m85OdFfm=w300')
                                .setDescription("Dans Dofus il existe trois types de montures : les dragodindes, les muldos et les volkornes.")
                                .addFields({ name: 'Level', value: r.level, inline: true }, { name: 'Type', value: r.type, inline: true })
                                .setThumbnail(r.imgUrl))
                            .catch(err => console.log(err));
                    }
                })
                break;
            }

        case 'monsters':

            if (args[1] == undefined) {
                msg.author.createDM().then(channel => {
                    let files = fs.readFileSync('./json/monsters.json'),
                        data = JSON.parse(files)

                    // Function qui récupere les datas
                    monsters(msg, data)

                });
                break;
            } else {

                let files2 = fs.readFileSync('./json/monsters.json'),
                    data2 = JSON.parse(files2)

                data2.forEach(r => {

                    const valueArray = JSON.stringify(r.statistics),
                        tab = []

                    tab.push(valueArray)

                    const reqArr = JSON.parse(valueArray),
                        resArr = [],
                        resArr2 = [],
                        resArr3 = []

                    reqArr.forEach(r => {
                        resArr.push(r.PV)
                    })

                    const PVmin = resArr.slice(0, 1)

                    JSON.stringify(PVmin)

                    reqArr.forEach(r => {
                        resArr2.push(r.PM)
                    })

                    const PMmin = resArr2.slice(2, 3)

                    JSON.stringify(PMmin)

                    reqArr.forEach(r => {
                        resArr3.push(r.PA)
                    })

                    const PAmin = resArr3.slice(1, 2)

                    JSON.stringify(PAmin)

                    const valueArray2 = JSON.stringify(r.resistances),
                        tab2 = []

                    tab2.push(valueArray2)

                    const reqArr2 = JSON.parse(valueArray2),
                        resArr4 = [],
                        resArr5 = [],
                        resArr6 = [],
                        resArr7 = []

                    reqArr2.forEach(r => {
                        resArr4.push(r.Terre)
                    })

                    const TERREmin = resArr4.slice(0, 1)

                    JSON.stringify(TERREmin)

                    reqArr2.forEach(r => {
                        resArr5.push(r.Air)
                    })

                    const AIRmin = resArr5.slice(1, 2)

                    JSON.stringify(AIRmin)

                    reqArr2.forEach(r => {
                        resArr6.push(r.Feu)
                    })

                    const FEUmin = resArr6.slice(2, 3)

                    JSON.stringify(PAmin)

                    reqArr2.forEach(r => {
                        resArr7.push(r.Neutre)
                    })

                    const NEUTREmin = resArr7.slice(4, 5)

                    JSON.stringify(NEUTREmin)

                    const valueArray3 = JSON.stringify(r.areas),
                        tab3 = [];

                    tab3.push(valueArray3)

                    JSON.stringify(tab3)

                    const resAREAS = tab3.join(' , ').replace(/[[\]]/g, '')

                    if (r.name == args[1]) {

                        msg.channel
                            .send(new Discord.MessageEmbed()
                                .setColor('#9F61AE')
                                .setTitle(r.name)
                                .setURL(r.url)
                                .setAuthor('Dofus-Book', 'https://pht.qoo-static.com/DwTsGsKrvYPsC-TzKc-3dasiEgIwVOUY5wgTT94XPzcHJP-5V5pvSKZ9v1j1m85OdFfm=w300')
                                .setDescription("Monstres, archi monstres et autres bestioles : le Monde des Douze regorge de créatures menaçantes. Étudiez ... Abrakildas le Vénérable, Archi-Monstre")
                                .addFields({ name: 'Type', value: r.type, inline: true }, { name: 'PV', value: "min : " + PVmin[0].min + " " + "max : " + PVmin[0].max, inline: true, required: false }, { name: 'PM', value: "min : " + PMmin[0].min, inline: true, required: false }, { name: 'PA', value: "min : " + PAmin[0].min + " " + "max : " + PVmin[0].max, inline: true, required: false }, { name: 'Res Terre', value: "min : " + TERREmin[0].min + " " + "max : " + TERREmin[0].max, inline: true, required: false }, { name: 'Res Air', value: "min : " + AIRmin[0].min + " " + "max : " + AIRmin[0].max, inline: true, required: false }, { name: 'Res Feu', value: "min : " + FEUmin[0].min + " " + "max : " + FEUmin[0].max, inline: true, required: false }, { name: 'Res Neutre', value: "min : " + NEUTREmin[0].min + " " + "max : " + NEUTREmin[0].max, inline: true, required: false }, { name: 'Zones', value: resAREAS })
                                .setThumbnail(r.imgUrl))
                            .catch(err => console.log(err));
                    } else if (r.name == args[1] + ' ' + args[2]) {
                        msg.channel
                            .send(new Discord.MessageEmbed()
                                .setColor('#9F61AE')
                                .setTitle(r.name)
                                .setURL(r.url)
                                .setAuthor('Dofus-Book', 'https://pht.qoo-static.com/DwTsGsKrvYPsC-TzKc-3dasiEgIwVOUY5wgTT94XPzcHJP-5V5pvSKZ9v1j1m85OdFfm=w300')
                                .setDescription("Monstres, archi monstres et autres bestioles : le Monde des Douze regorge de créatures menaçantes. Étudiez ... Abrakildas le Vénérable, Archi-Monstre")
                                .addFields({ name: 'Type', value: r.type, inline: true }, { name: 'PV', value: "min : " + PVmin[0].min + " " + "max : " + PVmin[0].max, inline: true, required: false }, { name: 'PM', value: "min : " + PMmin[0].min, inline: true, required: false }, { name: 'PA', value: "min : " + PAmin[0].min + " " + "max : " + PVmin[0].max, inline: true, required: false }, { name: 'Res Terre', value: "min : " + TERREmin[0].min + " " + "max : " + TERREmin[0].max, inline: true, required: false }, { name: 'Res Air', value: "min : " + AIRmin[0].min + " " + "max : " + AIRmin[0].max, inline: true, required: false }, { name: 'Res Feu', value: "min : " + FEUmin[0].min + " " + "max : " + FEUmin[0].max, inline: true, required: false }, { name: 'Res Neutre', value: "min : " + NEUTREmin[0].min + " " + "max : " + NEUTREmin[0].max, inline: true, required: false }, { name: 'Zones', value: resAREAS })
                                .setThumbnail(r.imgUrl))
                            .catch(err => console.log(err));
                    } else if (r.name == args[1] + ' ' + args[2] + ' ' + args[3]) {
                        msg.channel
                            .send(new Discord.MessageEmbed()
                                .setColor('#9F61AE')
                                .setTitle(r.name)
                                .setURL(r.url)
                                .setAuthor('Dofus-Book', 'https://pht.qoo-static.com/DwTsGsKrvYPsC-TzKc-3dasiEgIwVOUY5wgTT94XPzcHJP-5V5pvSKZ9v1j1m85OdFfm=w300')
                                .setDescription("Monstres, archi monstres et autres bestioles : le Monde des Douze regorge de créatures menaçantes. Étudiez ... Abrakildas le Vénérable, Archi-Monstre")
                                .addFields({ name: 'Type', value: r.type, inline: true }, { name: 'PV', value: "min : " + PVmin[0].min + " " + "max : " + PVmin[0].max, inline: true, required: false }, { name: 'PM', value: "min : " + PMmin[0].min, inline: true, required: false }, { name: 'PA', value: "min : " + PAmin[0].min + " " + "max : " + PVmin[0].max, inline: true, required: false }, { name: 'Res Terre', value: "min : " + TERREmin[0].min + " " + "max : " + TERREmin[0].max, inline: true, required: false }, { name: 'Res Air', value: "min : " + AIRmin[0].min + " " + "max : " + AIRmin[0].max, inline: true, required: false }, { name: 'Res Feu', value: "min : " + FEUmin[0].min + " " + "max : " + FEUmin[0].max, inline: true, required: false }, { name: 'Res Neutre', value: "min : " + NEUTREmin[0].min + " " + "max : " + NEUTREmin[0].max, inline: true, required: false }, { name: 'Zones', value: resAREAS })
                                .setThumbnail(r.imgUrl))
                            .catch(err => console.log(err));
                    } else if (r.name == args[1] + ' ' + args[2] + ' ' + args[3] + ' ' + args[4]) {
                        msg.channel
                            .send(new Discord.MessageEmbed()
                                .setColor('#9F61AE')
                                .setTitle(r.name)
                                .setURL(r.url)
                                .setAuthor('Dofus-Book', 'https://pht.qoo-static.com/DwTsGsKrvYPsC-TzKc-3dasiEgIwVOUY5wgTT94XPzcHJP-5V5pvSKZ9v1j1m85OdFfm=w300')
                                .setDescription("Monstres, archi monstres et autres bestioles : le Monde des Douze regorge de créatures menaçantes. Étudiez ... Abrakildas le Vénérable, Archi-Monstre")
                                .addFields({ name: 'Type', value: r.type, inline: true }, { name: 'PV', value: "min : " + PVmin[0].min + " " + "max : " + PVmin[0].max, inline: true, required: false }, { name: 'PM', value: "min : " + PMmin[0].min, inline: true, required: false }, { name: 'PA', value: "min : " + PAmin[0].min + " " + "max : " + PVmin[0].max, inline: true, required: false }, { name: 'Res Terre', value: "min : " + TERREmin[0].min + " " + "max : " + TERREmin[0].max, inline: true, required: false }, { name: 'Res Air', value: "min : " + AIRmin[0].min + " " + "max : " + AIRmin[0].max, inline: true, required: false }, { name: 'Res Feu', value: "min : " + FEUmin[0].min + " " + "max : " + FEUmin[0].max, inline: true, required: false }, { name: 'Res Neutre', value: "min : " + NEUTREmin[0].min + " " + "max : " + NEUTREmin[0].max, inline: true, required: false }, { name: 'Zones', value: resAREAS })
                                .setThumbnail(r.imgUrl))
                            .catch(err => console.log(err));
                    } else if (r.name == args[1] + ' ' + args[2] + ' ' + args[3] + ' ' + args[4] + ' ' + args[5]) {
                        msg.channel
                            .send(new Discord.MessageEmbed()
                                .setColor('#9F61AE')
                                .setTitle(r.name)
                                .setURL(r.url)
                                .setAuthor('Dofus-Book', 'https://pht.qoo-static.com/DwTsGsKrvYPsC-TzKc-3dasiEgIwVOUY5wgTT94XPzcHJP-5V5pvSKZ9v1j1m85OdFfm=w300')
                                .setDescription("Monstres, archi monstres et autres bestioles : le Monde des Douze regorge de créatures menaçantes. Étudiez ... Abrakildas le Vénérable, Archi-Monstre")
                                .addFields({ name: 'Type', value: r.type, inline: true }, { name: 'PV', value: "min : " + PVmin[0].min + " " + "max : " + PVmin[0].max, inline: true, required: false }, { name: 'PM', value: "min : " + PMmin[0].min, inline: true, required: false }, { name: 'PA', value: "min : " + PAmin[0].min + " " + "max : " + PVmin[0].max, inline: true, required: false }, { name: 'Res Terre', value: "min : " + TERREmin[0].min + " " + "max : " + TERREmin[0].max, inline: true, required: false }, { name: 'Res Air', value: "min : " + AIRmin[0].min + " " + "max : " + AIRmin[0].max, inline: true, required: false }, { name: 'Res Feu', value: "min : " + FEUmin[0].min + " " + "max : " + FEUmin[0].max, inline: true, required: false }, { name: 'Res Neutre', value: "min : " + NEUTREmin[0].min + " " + "max : " + NEUTREmin[0].max, inline: true, required: false }, { name: 'Zones', value: resAREAS })
                                .setThumbnail(r.imgUrl))
                            .catch(err => console.log(err));
                    }
                })
                break;
            }

        case 'sets':

            if (args[1] == undefined) {
                msg.author.createDM().then(channel => {
                    let files = fs.readFileSync('./json/sets.json'),
                        data = JSON.parse(files)

                    // Function qui récupere les datas
                    sets(msg, data)

                });
                break;
            } else {

                let files2 = fs.readFileSync('./json/sets.json'),
                    data2 = JSON.parse(files2)

                data2.forEach(r => {

                    const valueArray = JSON.stringify(r.bonus)

                    if (r.name == args[1]) {
                        msg.channel
                            .send(new Discord.MessageEmbed()
                                .setColor('#9F61AE')
                                .setTitle(r.name)
                                .setURL(r.url)
                                .setAuthor('Dofus-Book', 'https://pht.qoo-static.com/DwTsGsKrvYPsC-TzKc-3dasiEgIwVOUY5wgTT94XPzcHJP-5V5pvSKZ9v1j1m85OdFfm=w300')
                                .setDescription("Monstres, archi monstres et autres bestioles : le Monde des Douze regorge de créatures menaçantes. Étudiez ... Abrakildas le Vénérable, Archi-Monstre")
                                .addFields({ name: 'Type', value: r.type, inline: true }, { name: 'Level', value: r.level, inline: true, required: false }, { name: 'Bonus', value: valueArray.slice(10, 11), inline: true, required: false })
                                .setThumbnail(r.imgUrl))
                            .catch(err => console.log(err));
                    } else if (r.name == args[1] + ' ' + args[2]) {
                        msg.channel
                            .send(new Discord.MessageEmbed()
                                .setColor('#9F61AE')
                                .setTitle(r.name)
                                .setURL(r.url)
                                .setAuthor('Dofus-Book', 'https://pht.qoo-static.com/DwTsGsKrvYPsC-TzKc-3dasiEgIwVOUY5wgTT94XPzcHJP-5V5pvSKZ9v1j1m85OdFfm=w300')
                                .setDescription("Monstres, archi monstres et autres bestioles : le Monde des Douze regorge de créatures menaçantes. Étudiez ... Abrakildas le Vénérable, Archi-Monstre")
                                .addFields({ name: 'Type', value: r.type, inline: true }, { name: 'Level', value: r.level, inline: true, required: false }, { name: 'Bonus', value: valueArray.slice(10, 11), inline: true, required: false })
                                .setThumbnail(r.imgUrl))
                            .catch(err => console.log(err));
                    } else if (r.name == args[1] + ' ' + args[2] + ' ' + args[3]) {
                        msg.channel
                            .send(new Discord.MessageEmbed()
                                .setColor('#9F61AE')
                                .setTitle(r.name)
                                .setURL(r.url)
                                .setAuthor('Dofus-Book', 'https://pht.qoo-static.com/DwTsGsKrvYPsC-TzKc-3dasiEgIwVOUY5wgTT94XPzcHJP-5V5pvSKZ9v1j1m85OdFfm=w300')
                                .setDescription("Monstres, archi monstres et autres bestioles : le Monde des Douze regorge de créatures menaçantes. Étudiez ... Abrakildas le Vénérable, Archi-Monstre")
                                .addFields({ name: 'Type', value: r.type, inline: true }, { name: 'Level', value: r.level, inline: true, required: false }, { name: 'Bonus', value: valueArray.slice(10, 11), inline: true, required: false })
                                .setThumbnail(r.imgUrl))
                            .catch(err => console.log(err));
                    } else if (r.name == args[1] + ' ' + args[2] + ' ' + args[3] + ' ' + args[4]) {
                        msg.channel
                            .send(new Discord.MessageEmbed()
                                .setColor('#9F61AE')
                                .setTitle(r.name)
                                .setURL(r.url)
                                .setAuthor('Dofus-Book', 'https://pht.qoo-static.com/DwTsGsKrvYPsC-TzKc-3dasiEgIwVOUY5wgTT94XPzcHJP-5V5pvSKZ9v1j1m85OdFfm=w300')
                                .setDescription("Monstres, archi monstres et autres bestioles : le Monde des Douze regorge de créatures menaçantes. Étudiez ... Abrakildas le Vénérable, Archi-Monstre")
                                .addFields({ name: 'Type', value: r.type, inline: true }, { name: 'Level', value: r.level, inline: true, required: false }, { name: 'Bonus', value: valueArray.slice(10, 11), inline: true, required: false })
                                .setThumbnail(r.imgUrl))
                            .catch(err => console.log(err));
                    } else if (r.name == args[1] + ' ' + args[2] + ' ' + args[3] + ' ' + args[4] + ' ' + args[5]) {
                        msg.channel
                            .send(new Discord.MessageEmbed()
                                .setColor('#9F61AE')
                                .setTitle(r.name)
                                .setURL(r.url)
                                .setAuthor('Dofus-Book', 'https://pht.qoo-static.com/DwTsGsKrvYPsC-TzKc-3dasiEgIwVOUY5wgTT94XPzcHJP-5V5pvSKZ9v1j1m85OdFfm=w300')
                                .setDescription("Monstres, archi monstres et autres bestioles : le Monde des Douze regorge de créatures menaçantes. Étudiez ... Abrakildas le Vénérable, Archi-Monstre")
                                .addFields({ name: 'Type', value: r.type, inline: true }, { name: 'Level', value: r.level, inline: true, required: false }, { name: 'Bonus', value: valueArray.slice(10, 11), inline: true, required: false })
                                .setThumbnail(r.imgUrl))
                            .catch(err => console.log(err));
                    }
                })
                break;
            }
    }

}