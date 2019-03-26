const mongoose = require('mongoose')
const schema = mongoose.Schema

const photoModel = new schema({
    id: { type: Number} ,
    albumId: { type: Number} ,
    title: { type: String},
    url: { type: String},
    thumbnailUrl: { type: String }
})

module.exports = mongoose.model('photos', photoModel)