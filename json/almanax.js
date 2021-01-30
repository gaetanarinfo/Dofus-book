const cheerio = require('cheerio'),
    axios = require('axios'),
    url = 'http://www.krosmoz.com/fr/almanax?game=dofus',
    Discord = require('discord.js'),
    fs = require('fs'),
    { discord } = require('../bot');

module.exports = almanax => {
    axios.get(url)
        .then(res => {
            const html = res.data;
            const $ = cheerio.load(html);
            let items = $("#almanax_boss")
            let listArr = [];

            items.each(function() {
                const obj = {
                    title: $(this).find('.title').text(),
                    img: $('#almanax_boss_image').find('img').attr('src'),
                    content: $(this).text().substring(45, 2000),
                    content2: $('.more-infos-content').find('p').text().substring(16, 100),
                    img2: $('.more-infos-content').find('img').attr('src')
                }
                listArr.push(obj)
            });

            // Json parse text
            const valueArray = JSON.stringify(listArr, null, 2)

            String.prototype.escapeSpecialChars = function() {
                return this.replace(/\\n/g, "\\n")
                    .replace(/\\'/g, "\\'")
                    .replace(/\\"/g, '\\"')
                    .replace(/\\&/g, "\\&")
                    .replace(/\\r/g, "\\r")
                    .replace(/\\t/g, "\\t")
                    .replace(/\\b/g, "\\b")
                    .replace(/\\f/g, "\\f")
                    .replace(/\\n/g, "\\n")
            };

            JSON.stringify(valueArray);

            valueArray.escapeSpecialChars()

            // Ecrire fichier json
            fs.writeFile("./json/almanax.json", valueArray, () => {})
        })

    .catch(err => {
        console.log(err);
    })
}