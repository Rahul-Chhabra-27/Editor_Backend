const mongoose = require('mongoose');

const problemSchema = mongoose.Schema({
    statement : { 
        type:String,
        require:[true,'Please add problem statement...'],
     },
     difficulty : {
        type:String,
        require:[true,'Please add difficulty of a given problem statement...']
     },
     score : {
        type:Number,
        require:[true,'Please add score..']
     }
},{ timestamp : true })

module.exports = mongoose.model('Problems',problemSchema);