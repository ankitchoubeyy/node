const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db.js")
const cors = require("cors")
const productRoutes = require("./routes/productRoutes.js")

dotenv.config();

const app = express();

//? -------------- Connect to DB ---------------
connectDB();

//? -------------- Middlewares ---------------
app.use(express.json())
app.use(cors());


// Routes
app.use("/api", productRoutes)

app.listen(process.env.PORT, ()=>{
    console.log(`Server started at : ${process.env.PORT}`);
})