const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();  // create an express Application object

const port = 8080


app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));

app.use(express.json());
app.use(cookieParser()); 

// require all the route here/

const userRouter = require("../routes/userRouter.js")

// using all routes here/
app.use('/auth', userRouter);

module.exports = app







