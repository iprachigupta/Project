const express = require("express");
const app = express();
const cors = require("cors");
const body_parser = require("body-parser");
const AuthRouter = require("./routes/AuthRouter");
const cookieParser = require("cookie-parser");

const corsOptions = {
  origin: 'http://localhost:5173',  // Allow your frontend's origin
  credentials: true,  // Allow cookies and credentials to be sent
};

//models
require("dotenv").config();
require("./models/db");

//middlewares
app.use(cors(corsOptions)); //to allow connection of server with the client
app.use(body_parser.json()); //can use app.use(express.json()) instead of body parser
app.use(cookieParser());


app.use("/auth", AuthRouter)


//path
app.get("/", (req, res)=>{
    res.send("Hello Server !")
})


//port
const PORT = 8080 || process.env.PORT;

app.listen(PORT , ()=>{
    console.log(`Server running at ${PORT}`);
})