require('dotenv').config();

const express = require('express')
const mongoose = require('mongoose')
const app = express()
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const port = 3000

//routes
const userRoutes = require("./routes/user");

//DBConnections
const URI = process.env.DBCONNECTION;
mongoose.connect(URI,{
    useNewUrlParser : true,
    useUnifiedTopology : true,
    useCreateIndex : true
})

.then(()=>{
    console.log("DB CONNECTED");
});
//Middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//routes
app.use("/api", userRoutes);


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))