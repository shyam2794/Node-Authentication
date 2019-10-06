// global imports
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

//local imports 
const authRouter = require("../src/routers/authRoute");

const PORT = process.env.PORT || 4000;
const app = express();

// middlewares
app.use(cookieParser());
app.use(cors());
app.use(bodyParser.json());
app.use(authRouter);

// start server 
app.listen(PORT,() => console.log("server has started"));