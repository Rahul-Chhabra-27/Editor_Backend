const mongoose = require('mongoose');

const testCaseSchema = mongoose.Schema({
    problem_id : {
        type:mongoose.Schema.Types.ObjectId,
        require:[true],
        ref:'Problems'
    },
    data:{
        type:Array,
        require:[true]
    },
    sequence: {
        type:Number,
        require : [true],
    }
}, { timestamp : true });

module.exports = mongoose.model('Testcases',testCaseSchema);