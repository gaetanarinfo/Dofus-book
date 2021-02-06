module.exports = function(msg, data) {

    const listArr = [],
        listArr2 = [],
        listArr3 = []

    msg.channel
        .send('Monture trouvé(s) : ' + data.length);

    data.slice(0, 50).forEach(data => {

        const datas = data.name

        listArr.push(datas)
    })

    msg.channel
        .send(listArr.join(' | '));

    data.slice(51, 95).forEach(data => {

        const datas = data.name

        listArr2.push(datas)
    })

    msg.channel
        .send(listArr2.join(' | '));

    data.slice(92, 142).forEach(data => {

        const datas = data.name

        listArr3.push(datas)
    })

    msg.channel
        .send(listArr3.join(' | '));
}