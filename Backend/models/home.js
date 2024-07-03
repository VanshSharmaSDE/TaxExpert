const mongoose = require("mongoose");

const homeSchema = new mongoose.Schema({
    discription:{
        type:String,
        require:true,
    },
    image:{
        type:String,
        require:true,
    }
})

mongoose.model("home", homeSchema)