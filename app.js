//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const ttl = require('mongoose-ttl');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("---------------API-------------------------------", {useNewUrlParser: true,useUnifiedTopology: true});
mongoose.set("useCreateIndex", true);

const userSchema = new mongoose.Schema ({
  name:String,
  description: String,
  creator: String,
  duration: String,
  createdAt: { type: Date, expires: "2d", default: Date.now }
});
const User = new mongoose.model("User", userSchema);


app.get("/list",function(req,res){
  User.find(function (err, data) {
    if (err){
        console.log(err) ;
    }
    else{
      res.send(data);
    }
  });
});


app.post("/add",function(req,res){
  const data= new User({
name:req.body.name,
description: req.body.description,
creator: req.body.creator,
duration: req.body.duration,

});

userSchema.index({createdAt: 1},{expireAfterSeconds: req.body.duration});


data.save(function(err,data){
  if(err){
    res.send(err);
  }else{
    res.send("Added Succesfully");
  }
  });
});
app.listen(process.env.PORT||3000,function(){
  console.log("server is started on port 3000");
});
