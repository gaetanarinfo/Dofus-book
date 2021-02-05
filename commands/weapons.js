module.exports = function(msg, data) {

    const listArr = [],
        listArr2 = [],
        listArr3 = [],
        listArr4 = [],
        listArr5 = [],
        listArr6 = [],
        listArr7 = [],
        listArr8 = [],
        listArr9 = []

    msg.channel
        .send('Equipement trouvé(s) : ' + data.length);

    data.slice(0, 90).forEach(data => {

        const datas = data.name

        listArr.push(datas)
    })

    msg.channel
        .send(listArr.join(' | '));

    data.slice(91, 180).forEach(data => {

        const datas = data.name

        listArr2.push(datas)
    })

    msg.channel
        .send(listArr2.join(' | '));

    data.slice(181, 272).forEach(data => {

        const datas = data.name

        listArr3.push(datas)
    })

    msg.channel
        .send(listArr3.join(' | '));


    data.slice(272, 363).forEach(data => {

        const datas = data.name

        listArr4.push(datas)
    })

    msg.channel
        .send(listArr4.join(' | '));

    data.slice(363, 454).forEach(data => {

        const datas = data.name

        listArr5.push(datas)
    })

    msg.channel
        .send(listArr5.join(' | '));

    data.slice(454, 545).forEach(data => {

        const datas = data.name

        listArr6.push(datas)
    })

    msg.channel
        .send(listArr6.join(' | '));

    data.slice(545, 636).forEach(data => {

        const datas = data.name

        listArr7.push(datas)
    })

    msg.channel
        .send(listArr7.join(' | '));

    data.slice(637, 700).forEach(data => {

        const datas = data.name

        listArr8.push(datas)
    })

    msg.channel
        .send(listArr8.join(' | '));

    data.slice(701, 725).forEach(data => {

        const datas = data.name

        listArr9.push(datas)
    })

    msg.channel
        .send(listArr9.join(' | '));

}