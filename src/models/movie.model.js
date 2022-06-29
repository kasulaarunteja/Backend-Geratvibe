

const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({

    movieName: {type: 'String', required:"true"},
    rating: {type: 'Number'},
    cast :{type: 'Array'},
    genre:{type:String},
    releaseDate: {type:Date},
},{
    versionkey: false,
    timestamps:true
})

module.exports = mongoose.model('movie', movieSchema)