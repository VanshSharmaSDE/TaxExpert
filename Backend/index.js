const express = require("express");
const app = express();
const router = express.Router();
const port = 5001;
var cors = require('cors')
const mongoose = require("mongoose");
const mongoUrl = require("./keys")
const jwt = require('jsonwebtoken')


// Mongo Db Database Connection 
mongoose.connect(mongoUrl)

app.use(express.json())
app.use(cors())

// Imorting Admin Model 
require("./models/admin")
require("./models/home")
require("./models/about")
require("./models/experience")

const ADMIN = mongoose.model("admin");
const homemodel = mongoose.model("home");
const aboutmodel = mongoose.model("about");
const experiencemodel = mongoose.model("experience");


mongoose.connection.on("connected", () => {
  console.log("successfully connected to mongo")
})

mongoose.connection.on("error", () => {
  console.log("not connected to mongodb")
})

app.get('/', (req, res) => {
  res.send("Admin Backend")
})

app.get('/get-data', async (req, res) => {
  try {

    const home = await homemodel.find();
    const about = await aboutmodel.find();
    const experience = await experiencemodel.find();

    res.status(200).send({
      home: home[0],
      about: about[0],
      experience: experience[0],
    })

  } catch (error) {
    res.send("Error")
  }
})

app.post('/update-home', async (req, res) => {
  try {
    const home = await homemodel.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    )
    res.status(200).send({
      data: home,
      success: true,
      message: "Home Updated successfully"
    });
  } catch (error) {
    res.status(500).send(error);
  }
})

app.post('/update-about', async (req, res) => {
  try {
    const about = await aboutmodel.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    )
    res.status(200).send({
      data: about,
      success: true,
      message: "About Updated successfully"
    });
  } catch (error) {
    res.status(500).send(error);
  }
})

app.post('/update-experience', async (req, res) => {
  try {
    const about = await experiencemodel.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    )
    res.status(200).send({
      data: about,
      success: true,
      message: "Experience Updated successfully"
    });
  } catch (error) {
    res.status(500).send(error);
  }
})

app.post("/admin-login", async (req, res) => {
  try {
    const admin = await ADMIN.findOne({
      username: req.body.username,
      password: req.body.password,
    })
    if (admin) {
      const token = jwt.sign({ _id: admin._id }, "wfdvyvyevfygvged")
      res.status(200).send({
        data: admin,
        success: true,
        message: "Login Succesfully",
        token: token,
      })
    }
    else {
      res.status(500).send({
        data: admin,
        success: false,
        message: "Invalid Username or Password",
      })
    }
  } catch (error) {
    res.status(500).send(error);
  }
})


app.listen(process.env.PORT || port, () => {
  console.log("server is running on port" + " " + port)

})