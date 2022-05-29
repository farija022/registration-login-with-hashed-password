const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const User = require('./userp')

mongoose.connect("mongodb+srv://farijaakter:01521226424faru@cluster0.x3pam.mongodb.net/webdev?retryWrites=true&w=majority", () => {
    console.log("mongodb connected");
},
    e => console.error(e)
)
const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('hello')
})
app.post('/register', async (req, res) => {

    try {


        let JSONData = req.body;
        console.log(JSONData)

        const user = new User({
            name: JSONData['name'],
            email: JSONData['email'],
            number: JSONData['number'],
            password: JSONData['password']

        })

        user.save()
        res.end("respond")

    } catch (e) {
        console.log(e)
    }

})



app.listen(8000, () => {
    console.log("Server is open..")
})