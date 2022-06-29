

const express = require('express');
const connect = require('./configs/db');

const app = express();
const cors = require('cors');
require('dotenv').config()
const moviecontroller = require('./controllers/movie.controller');
const { register, login } = require('./controllers/auth.controller');



app.use(cors());
app.use(express.json());
require("dotenv").config();
app.use("/", moviecontroller)
app.post("/", register)
app.use("/",  login)



const PORT = process.env.PORT || 8000;


app.listen(PORT, async () => {
    try {
        await connect()

    } catch (err) {
        console.log("err")
    }
    console.log(`listing ${PORT}`)
});

