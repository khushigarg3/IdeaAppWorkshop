// Create & Start a Server
const express = require('express');
const serverConfig = require('./configs/server.config');
const mongoose = require('mongoose')
const dbConfig = require('./configs/db.config')

const app = express();

/**
 * Logic to connect to MongoDB and create an ADMIN user
 * Need to have the mingodb up and running in your local machine
 */
mongoose.connect("dbConfig.DB_URL");
const db = mongoose.connection;

db.on("error",()=>{
    console.log("Error while connecting to db ")

})

db.once("open",()=>{
    console.log("DB is connected")
})

app.listen(serverConfig.PORT, ()=>{
    console.log("server started on port number ${serverConfig.PORT}");
})