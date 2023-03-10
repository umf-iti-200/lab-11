const express = require("express");
const app = express();
const Pool = require('pg').Pool

app.use(express.static('public'))

const pool = new Pool({
    host: 'localhost',
    database: 'postgres',
    user: 'postgres',
    password: 'postgres',
    port: 5432,
})

// Add here your routes

app.listen(3000, function(){
    console.log("The app is running at port 3000")
})