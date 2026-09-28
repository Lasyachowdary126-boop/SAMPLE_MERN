import { ObjectId, Timestamp } from 'mongodb';

let mongoose=require('mongoose');
let taskScheme=mongoose.Schema({
    taskname:{
        type:String,required:true

    },
    taskdesc:{
        type:String,required:true
    },
    assignedTo:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users',required:true
    },
    assignedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users',required:true
    },
    dueDate:{
        type:Date,require:true
    },
    status:{
        type:String, enum:["pending","in-progress","completed"],
        default:"pending"
    }
},{
    Timestamps:true
});

const tasks=mongoose.model('tasks',taskSchema);
module.exports={tasks}
