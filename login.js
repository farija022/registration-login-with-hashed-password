const express = require("express");
const app = express();
const mongoose = require('mongoose');
const bodyParser = require("body-parser");

const User = require('./userp')
app.use(bodyParser.json());

mongoose.connect("mongodb+srv://farijaakter:01521226424faru@cluster0.x3pam.mongodb.net/webdev?retryWrites=true&w=majority", () => {
    console.log("mongodb connected");
},
    e => console.error(e)
)
app.post('/login', (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    User.findOne({ email: email, password: password }, (err, user) => {
        if (err) {
            res.end("error")
        }
        else if (!user) {
            res.end("email or pass wrong or user not Found")
        }
        else {
            return (res.end("Logged In"))
        }
    })
})
app.listen('8000', () => {
    console.log("listening From Login")
})