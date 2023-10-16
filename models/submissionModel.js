const mongoose = require('mongoose');

const submissionSchema = mongoose.Schema({
    language: {
        type:String,
        require : [true,'Language is required to filter out different submissions...'],
    },
    code : {
        type:Buffer,
        require:[true],
    },
    timeSubmitted : {
      type:Date,
      require:[true],
    },
    memoryUsed : {
        type:Number,
        require:[true],
    },
    status:{
        type:String,
        required:[true]
    },
    failedTestCases : {
        type:Array,
        reuired:[true]
    },
    userId : {
        type:mongoose.Schema.Types.ObjectId,
        required:[true]
    },
    problemId: {
        type:mongoose.Schema.Types.ObjectId,
        required:[true]
    }
    //// Incomplete........
}, { timestamp : true })
module.exports = mongoose.model('Submissions',submissionSchema);

// 1.Submission_id.
// 2.Language.
// 3.Code
// 4.Time Submitted
// 5.Memory Used.
// 6.User_id.
// 7.Problem id.
// 8.status(Accepted/WR)
// 9.Failed Testcases