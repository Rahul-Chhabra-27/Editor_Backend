const mongoose = require('mongoose');

const userProblemSchema = mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        required:[true],
    },
    problemId:{
        type:mongoose.Schema.Types.ObjectId,
        required:[true],      
    },
    codeLanguage:{
        type:String,
        required:[true],
    },
    latestCode  :{
        type:Buffer,
        required:true,
    }
},{ timestamp : true })
module.exports = mongoose.model("UserProblem",userProblemSchema);
