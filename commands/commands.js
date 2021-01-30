const prefix = "!"

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
    }

}