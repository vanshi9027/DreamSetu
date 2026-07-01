const express = require("express");

const app = express();  // create an express Application object

const port = 8080

app.use(express.json());

// require all the route here/

const userRouter = require("../routes/userRouter.js")

// using all routes here/
app.use('/auth', userRouter);

module.exports = app







