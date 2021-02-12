module.exports = function(msg, data) {

    const listArr = [],
        listArr2 = [],
        listArr3 = [],
        listArr4 = [],
        listArr5 = []

    msg.channel
        .send('Panoplie trouvé(s) : ' + data.length);

    data.slice(0, 60).forEach(data => {

        const datas = data.name

        listArr.push(datas)
    })

    msg.channel
        .send(listArr.join(' | '));

    data.slice(61, 135).forEach(data => {

        const datas = data.name

        listArr2.push(datas)
    })

    msg.channel
        .send(listArr2.join(' | '));

    data.slice(135, 200).forEach(data => {

        const datas = data.name

        listArr3.push(datas)
    })

    msg.channel
        .send(listArr3.join(' | '));


    data.slice(201, 280).forEach(data => {

        const datas = data.name

        listArr4.push(datas)
    })

    msg.channel
        .send(listArr4.join(' | '));

    data.slice(281, 331).forEach(data => {

        const datas = data.name

        listArr5.push(datas)
    })

    msg.channel
        .send(listArr5.join(' | '));

}