const express = require("express");
const connectDB = require("./config/db.js");
const dotenv = require("dotenv")
const userRoutes = require("./routes/customerRoutes.js")

dotenv.config();

//? ----------- DB Connection -------------------
connectDB();

const app = express();

// middlewares
app.use(express.json());


//? --------------- APIs ------------------
app.use("/api", userRoutes)


app.listen(process.env.PORT, () => {
    console.log(`Server is started at : ${process.env.PORT}`)
})
