/*
 *
 * Model de 'Article'
 ******************************/

const mongoose = require('mongoose')

const ArticleSchema = new mongoose.Schema({
    author: {
        type: String
    },
    avatar: {
        type: String
    },
    title: {
        type: String
    },
    image: {
        type: String
    },
    content: {
        type: String
    },
    url: {
        type: String
    },
    dateCreate: {
        type: String
    },
    category: {
        type: String
    },
    cat: {
        type: String
    }

})

module.exports = mongoose.model('articles', ArticleSchema)