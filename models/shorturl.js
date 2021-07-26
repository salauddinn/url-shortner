const mangoose= require('mongoose');
const shortid= require('shortid')
const shortUrl= new mangoose.Schema({
    full:{
        type: String,
        required: true
    },
    short:{
        type: String,
        required: true,
        default: shortid.generate
    },
    clicks:{
        type: Number,
        required: true,
        default:0
    }
    
})
module.exports = mangoose.model('shortUrl',shortUrl);