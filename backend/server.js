const express = require("express");
const app = express();
const cors = require("cors");
const body_parser = require("body-parser");
const AuthRouter = require("./routes/AuthRouter");

require("dotenv").config();
require("./models/db");

app.use(cors()); //to allow connection of server with the client
app.use(body_parser.json());


app.get("/", (req, res)=>{
    res.send("Hello Server !")
})

app.use("/auth", AuthRouter)

const PORT = 8080 || process.env.PORT;

app.listen(PORT , ()=>{
    console.log(`Server running at ${PORT}`);
})