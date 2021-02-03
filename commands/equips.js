module.exports = function(msg, data) {

    const listArr = [],
        listArr2 = [],
        listArr3 = [],
        listArr4 = [],
        listArr5 = [],
        listArr6 = [],
        listArr7 = [],
        listArr8 = [],
        listArr9 = [],
        listArr10 = [],
        listArr11 = [],
        listArr12 = [],
        listArr13 = [],
        listArr14 = [],
        listArr15 = [],
        listArr16 = [],
        listArr17 = [],
        listArr18 = [],
        listArr19 = [],
        listArr20 = [],
        listArr21 = [],
        listArr22 = [],
        listArr23 = [],
        listArr24 = [],
        listArr25 = [],
        listArr26 = [],
        listArr27 = [],
        listArr28 = []

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

    data.slice(728, 818).forEach(data => {

        const datas = data.name

        listArr9.push(datas)
    })

    msg.channel
        .send(listArr9.join(' | '));

    data.slice(819, 909).forEach(data => {

        const datas = data.name

        listArr10.push(datas)
    })

    msg.channel
        .send(listArr10.join(' | '));

    data.slice(910, 1000).forEach(data => {

        const datas = data.name

        listArr11.push(datas)
    })

    msg.channel
        .send(listArr11.join(' | '));

    data.slice(1001, 1091).forEach(data => {

        const datas = data.name

        listArr12.push(datas)
    })

    msg.channel
        .send(listArr12.join(' | '));

    data.slice(1092, 1182).forEach(data => {

        const datas = data.name
        listArr13.push(datas)
    })

    msg.channel
        .send(listArr13.join(' | '));

    data.slice(1183, 1273).forEach(data => {

        const datas = data.name

        listArr14.push(datas)
    })

    msg.channel
        .send(listArr14.join(' | '));

    data.slice(1274, 1365).forEach(data => {

        const datas = data.name

        listArr15.push(datas)
    })

    msg.channel
        .send(listArr15.join(' | '));

    data.slice(1366, 1456).forEach(data => {

        const datas = data.name

        listArr16.push(datas)
    })

    msg.channel
        .send(listArr16.join(' | '));

    data.slice(1367, 1458).forEach(data => {

        const datas = data.name

        listArr17.push(datas)
    });

    msg.channel
        .send(listArr17.join(' | '));

    data.slice(1459, 1549).forEach(data => {

        const datas = data.name

        listArr18.push(datas)
    })

    msg.channel
        .send(listArr18.join(' | '));

    data.slice(1550, 1641).forEach(data => {

        const datas = data.name

        listArr19.push(datas)
    })

    msg.channel
        .send(listArr19.join(' | '));

    data.slice(1642, 1733).forEach(data => {

        const datas = data.name

        listArr20.push(datas)
    });

    msg.channel
        .send(listArr20.join(' | '));

    data.slice(1734, 1824).forEach(data => {

        const datas = data.name

        listArr21.push(datas)
    });

    msg.channel
        .send(listArr21.join(' | '));


    data.slice(1825, 1916).forEach(data => {

        const datas = data.name

        listArr22.push(datas)
    });

    msg.channel
        .send(listArr22.join(' | '));

    data.slice(1917, 2007).forEach(data => {

        const datas = data.name

        listArr23.push(datas)
    });

    msg.channel
        .send(listArr23.join(' | '));



    data.slice(2008, 2099).forEach(data => {

        const datas = data.name

        listArr24.push(datas)
    });

    msg.channel
        .send(listArr24.join(' | '));


    data.slice(2100, 2191).forEach(data => {

        const datas = data.name

        listArr25.push(datas)
    });

    msg.channel
        .send(listArr25.join(' | '));


    data.slice(2192, 2283).forEach(data => {

        const datas = data.name

        listArr26.push(datas)
    });

    msg.channel
        .send(listArr26.join(' | '));


    data.slice(2284, 2322).forEach(data => {

        const datas = data.name

        listArr27.push(datas)
    });

    msg.channel
        .send(listArr27.join(' | '));

    data.slice(701, 727).forEach(data => {

        const datas = data.name

        listArr28.push(datas)
    })

    msg.channel
        .send(listArr28.join(' | '));
}