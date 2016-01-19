/**
 * Created by Frank on 16/1/18.
 */
'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var taskSchema = new Schema({

    scoreAward: {       // 奖励积分数
        type: Number,
        default: 0
    },

    participants: {    // 参加此次任务的数量
        type: Number,
        default: 0
    },

    createdTime: {
        type: Date,
        default: Date.now
    },

    schoolId: {
        type: ObjectId,
        required: true
    }
});

taskSchema.index({schoolId: 1, state: 1});
mongoose.model('ScoreTask', taskSchema);
