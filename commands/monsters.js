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
        listArr26 = []

    msg.channel
        .send('Monstre trouvé(s) : ' + data.length);

    data.slice(0, 80).forEach(data => {

        const datas = data.name

        listArr.push(datas)
    })

    msg.channel
        .send(listArr.join(' | '));

    data.slice(81, 151).forEach(data => {

        const datas = data.name

        listArr2.push(datas)
    })

    msg.channel
        .send(listArr2.join(' | '));

    data.slice(152, 200).forEach(data => {

        const datas = data.name

        listArr3.push(datas)
    })

    msg.channel
        .send(listArr3.join(' | '));


    data.slice(201, 261).forEach(data => {

        const datas = data.name

        listArr4.push(datas)
    })

    msg.channel
        .send(listArr4.join(' | '));

    data.slice(262, 311).forEach(data => {

        const datas = data.name

        listArr5.push(datas)
    })

    msg.channel
        .send(listArr5.join(' | '));

    data.slice(312, 364).forEach(data => {

        const datas = data.name

        listArr6.push(datas)
    })

    msg.channel
        .send(listArr6.join(' | '));

    data.slice(365, 445).forEach(data => {

        const datas = data.name

        listArr7.push(datas)
    })

    msg.channel
        .send(listArr7.join(' | '));

    data.slice(446, 500).forEach(data => {

        const datas = data.name

        listArr8.push(datas)
    })

    msg.channel
        .send(listArr8.join(' | '));

    data.slice(501, 565).forEach(data => {

        const datas = data.name

        listArr9.push(datas)
    })

    msg.channel
        .send(listArr9.join(' | '));

    data.slice(566, 650).forEach(data => {

        const datas = data.name

        listArr10.push(datas)
    })

    msg.channel
        .send(listArr10.join(' | '));

    data.slice(651, 720).forEach(data => {

        const datas = data.name

        listArr11.push(datas)
    })

    msg.channel
        .send(listArr11.join(' | '));

    data.slice(721, 790).forEach(data => {

        const datas = data.name

        listArr12.push(datas)
    })

    msg.channel
        .send(listArr12.join(' | '));

    data.slice(791, 851).forEach(data => {

        const datas = data.name
        listArr13.push(datas)
    })

    msg.channel
        .send(listArr13.join(' | '));

    data.slice(852, 920).forEach(data => {

        const datas = data.name

        listArr14.push(datas)
    })

    msg.channel
        .send(listArr14.join(' | '));

    data.slice(921, 1010).forEach(data => {

        const datas = data.name

        listArr15.push(datas)
    })

    msg.channel
        .send(listArr15.join(' | '));

    data.slice(1011, 1070).forEach(data => {

        const datas = data.name

        listArr16.push(datas)
    })

    msg.channel
        .send(listArr16.join(' | '));

    data.slice(1071, 1121).forEach(data => {

        const datas = data.name

        listArr17.push(datas)
    });

    msg.channel
        .send(listArr17.join(' | '));


    data.slice(1122, 1160).forEach(data => {

        const datas = data.name

        listArr18.push(datas)
    });

    msg.channel
        .send(listArr18.join(' | '));

    data.slice(1161, 1220).forEach(data => {

        const datas = data.name

        listArr19.push(datas)
    });

    msg.channel
        .send(listArr19.join(' | '));

    data.slice(1221, 1290).forEach(data => {

        const datas = data.name

        listArr20.push(datas)
    });

    msg.channel
        .send(listArr20.join(' | '));

    data.slice(1291, 1369).forEach(data => {

        const datas = data.name

        listArr21.push(datas)
    });

    msg.channel
        .send(listArr21.join(' | '));

    data.slice(1370, 1460).forEach(data => {

        const datas = data.name
    
        listArr22.push(datas)
    });
    
    msg.channel
        .send(listArr22.join(' | '));  
        
    data.slice(1461, 1560).forEach(data => {

        const datas = data.name
    
        listArr23.push(datas)
    });
    
    msg.channel
        .send(listArr23.join(' | '));
        
    data.slice(1561, 1660).forEach(data => {

        const datas = data.name
    
        listArr24.push(datas)
    });
    
    msg.channel
        .send(listArr24.join(' | '));  
        
    data.slice(1661, 1760).forEach(data => {

        const datas = data.name
    
        listArr25.push(datas)
    });
    
    msg.channel
        .send(listArr25.join(' | '));  

    data.slice(1761, 1818).forEach(data => {

        const datas = data.name
    
        listArr26.push(datas)
    });
    
    msg.channel
        .send(listArr26.join(' | '));  
}