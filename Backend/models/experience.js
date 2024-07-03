const mongoose = require("mongoose");

const experienceSchema = new mongoose.Schema({
    time1:{
        type:String,
        require:true,
    },
    time2:{
        type:String,
        require:true,
    },
    time3:{
        type:String,
        require:true,
    },
    time4:{
        type:String,
        require:true,
    },
    discription1:{
        type:String,
        require:true,
    },
    discription2:{
        type:String,
        require:true,
    },
    discription3:{
        type:String,
        require:true,
    },
    discription4:{
        type:String,
        require:true,
    },
})

mongoose.model("experience", experienceSchema)