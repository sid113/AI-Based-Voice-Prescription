const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
var nodemailer = require("nodemailer");
var moment = require('moment')

require("dotenv").config();


//set up express

const app = express();
app.use(bodyParser.json({ extended: true }));
app.use(cors());

//mongoose connection

mongoose.connect(process.env.MONGODB_CONNECTION_STRING,
    {
        useCreateIndex: true,
        useUnifiedTopology: true,
        useNewUrlParser: true
    },
    function (error) {
        if (error) {
            throw error;
        }
        console.log("MongoDB connection established....");
    });


//setup routes
app.post('/sendpdf',function(req,res){
  let { email, dirpath ,name} = req.body;
  var sender = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_ID,
        pass: process.env.PASSWORD
      }
    });
    var mail = {
      from: '"</Prescription.ai>" <hackmepy@gmail.com>',
      to: email,
      subject: "Your Voice Prescription from Prescription.ai",
      text: `Hello ${name}`,
html: "<p>Hello <b><span style='color: #0080ff'>"+name+"</span></b>,</p><br/><p>Here is your Prescription of date <b>"+moment().format('YYYY-MM-DD hh:mm:ss')+"</b>.</p><p>Get Well Soon!!! &#128512;</p><br/><p>Best wishes,</p><p>Prescription.ai Team</p>",
      attachments: [
          {
              filename: 'presecription.pdf',
              path: dirpath,
              cid: 'uniq-mailtrap.png'
          }
      ]
    };
    sender.sendMail(mail, function(error, info) {
      if (error) {
        // console.log(error);
         return res.status(500).json({msg:error.message});
      } else {
        // console.log("Email sent successfully: "+ info.response);
        return res.json("Email sent successfully:"+info.response);
      }
    });
     
});


app.use("/users", require("./routes/userRouter"));

//listing 
PORT = 5000

app.listen(PORT, function () {
    console.log("server has been started at " + PORT + " port no....");
});