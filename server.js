const express = require("express");
const mongoose = require("mongoose");
const path = require('path')
const app = express();
const cors = require('cors')
let uri = 'mongodb+srv://AliMusa:Ab471kak@cluster0.kd8ol.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT ||8000;


const User = require("./models/User"); //user is a model
mongoose.connect(uri); //lets node server connect to (mongod server which is on the same device with db) and saving info to userData db

// "mongodb://localhost/serialData"


app.use(express.static(path.join(__dirname, "public")));

app.get('/',(req,res,next)=>{
  res.sendFile(path.join(__dirname, "index.html"));

})

app.listen(PORT, () => {
  console.log(`server is listening on port:8000`);
});




 app.use(cors({origin: '*'}));

app.put('/checkSerial/',(req,res,next)=>{
  res.json({
    success: false,
    message: 'notAllowed'
  })
});

app.put('/checkSerial/:theSerial',(req, res,next) => {
  
  User.findOneAndUpdate(
    { serial: req.params.theSerial },
    { date: new Date().toDateString() },
    {
      new: false
    },
    (err, data) => {
      if (err) {
        res.json({
          //converts objects to send them as json
          success: false,
          message: err,
        });
      } else if (!data) {
        setTimeout(() => {
          res.json({
            //converts objects to send them as json
            success: false,
            message: "Not Found",
          });
        }, 2000);;
      } else {
        setTimeout(() => {
          res.json({
            success: true,
            data: data, // data will be the old object in the db because of the new:false config
          });
        }, 2000);;
      }
    }
  );
});