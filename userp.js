const mongoose = require('mongoose');
const bcrypt = require('bcrypt')


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 8,
        required: true,
    },
    email: {
        type: String,
        minlength: 10,
        required: true,
        lowercase: true,
        unique: true,
    },
    number: {
        type: String,
        required: true,

    },
    password: {
        type: String,
        required: true,
    },
})

userSchema.pre('save', async function (next) {
    try {
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(this.password, salt)
        this.password = hashPassword
        next()

        // console.log(this.email, this.password)
        //console.log("Called before saving a user")
    } catch (err) {
        next(err)
    }
})
userSchema.post('save', async function (next) {
    try {
        console.log("Called after saving a user")
    } catch (err) {
        next(err)
    }
})




module.exports = mongoose.model('User', userSchema)