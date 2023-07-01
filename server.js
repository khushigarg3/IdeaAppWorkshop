// Create & Start a Server
const express = require('express');

const app = express();

app.listen(3353, ()=>{
    console.log("server started");
})