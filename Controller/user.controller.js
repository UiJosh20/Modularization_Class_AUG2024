const userModel = require("../Model/user.model")


const register = (req, res) => {
res.render("index")
}

const signup = (req, res)=>{
    const {firstName , lastName , email , password} = req.body
    
}






module.exports = {register, signup}