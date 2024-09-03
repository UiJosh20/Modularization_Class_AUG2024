const express = require("express");
const app = express();
const PORT = 3000;
const userRouter = require("./Routes/user.route");
const PresidentRoute = require("./Routes/admin.route");
const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use("/user", userRouter)
app.use("/admin", PresidentRoute)



app.listen(PORT, ()=>{console.log(`localhost:${PORT}`)})