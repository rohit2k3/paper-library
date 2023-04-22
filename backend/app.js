const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors")

//config
const dotenv = require("dotenv");
dotenv.config({path:"backend/config/config.env"});

app.use(cors({ 
    origin: process.env.FRONTEND_URL,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    optionsSuccessStatus: 200,
  }));
app.use(express.json());
const errorMiddleware = require('./middleware/error')
app.use(cookieParser());


//route
const paperRoute = require("./routes/PaperRoute");
const userRoute = require("./routes/userRoute");
const allDataRoute = require("./routes/allDataRoute");
const contactRoute = require("./routes/contactRoute");


app.use('/api',paperRoute);
app.use("/api",userRoute);
app.use("/api",allDataRoute);
app.use("/api",contactRoute);


// middleware for error
app.use(errorMiddleware);


module.exports = app;