const mongoose = require("mongoose")
const dotenv = require("dotenv")
const bcrypt = require("bcryptjs")
dotenv.config()
const connectionString = process.env.DB_URI


mongoose.connect(connectionString)
.then(()=>{
    console.log("connected to database")
})
.catch((err)=>{
    console.log(err)
})


const userSchema = new mongoose.Schema({
    // firstName: {
    //     type: String,
    //     required: true
    // },
    // lastName: {
    //     type: String,
    //     required:true,
    // },
    email:{
            type:String,
            required:true,
            unique:true
    },
    password: {
       type: String,
        required:true
    }

})


userSchema.pre("save", function(next){
    bcrypt.hash(this.password,  10, (err, hash)=>{
        this.password = hash;
        next()
    })
})

let userModel = mongoose.model("user", userSchema)

module.exports = userModel