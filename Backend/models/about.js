const mongoose = require("mongoose");

const aboutSchema = new mongoose.Schema({
    discription1:{
        type:String,
        require:true,
    },
    discription2:{
        type:String,
        require:true,
    },
    image1:{
        type:String,
        require:true,
    },
    image2:{
        type:String,
        require:true,
    }
})

mongoose.model("about", aboutSchema)