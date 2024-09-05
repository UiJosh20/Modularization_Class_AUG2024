const userModel = require("../Model/user.model")


const register = (req, res) => {
res.render("index")
}

const signup = (req, res)=>{
    const {email, password} = req.body

    const userInfo = new userModel({
        email:email, 
        password:password
    })

    userInfo.save()
    .then((data)=>{
        res.send({message:"user registered successfully"})
    })

    
}






module.exports = {register, signup}