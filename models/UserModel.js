const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName:{
        type:String,
        required:[true],
    },
    lastName:{
        type:String,
        required:[true]
    },
    profession: {
        type:String,
    },
    prefferedCodingLanguage:{
        type:String,
    },
    totalProblemSolved : {
        type:Number,
        required:[true],
    },
    accuracy:{
        type:Number,
        required:[true],
    }
},{ timestamp : true })

module.exports = mongoose.model("User",userSchema);