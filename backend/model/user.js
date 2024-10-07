let mongoose=require("mongoose");
let userSchema= new mongoose.Schema({
    topic:{
        type:String
    },
    description:{
        type:String

    },
    date:{
        type:String

    }
})

let topicModel=new mongoose.model("topicModel",userSchema);
module.exports=topicModel;