const express = require("express");
const app = express();
const PORT = 3000;
const userRouter = require("./Routes/user.route");
const PresidentRoute = require("./Routes/admin.route");




app.use("/user", userRouter)
app.use("/admin", PresidentRoute)



app.listen(PORT, ()=>{console.log(`localhost:${PORT}`)})