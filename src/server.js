"use strict";

const express = require("express");
const app = express();
app.use(express.json());


const notFoundHandler = require('./error-handler/404')
const errorHandler = require('./error-handler/500')
const stamper = require('./middleware/stamper');
const logger = require("./middleware/logger");
const validator = require("./middleware/validator")

app.use(logger);


// ---------------------------- route's ---------------------
app.get("/", homeHandler);
app.get("/data", stamper , dataHandler);

app.get("/person/:name", validator(), personHandler);

// ---------------------------- handler's ---------------------

function homeHandler(req, res) {
  res.status(200).send("welcome to home page");
}

function dataHandler (req,res) {
    res.send ({
        id:1,
        name: 'Mohammad',
        time: req.timeStamp,
        
    })
}


function personHandler(req, res) {
  res.send({
    name : req.name
  });
}

// ---------------------------- listen ---------------------

app.use('*',notFoundHandler);
app.use(errorHandler);

// ---------------------------- listen ---------------------

function start(port) {
  app.listen(port, () => {
    console.log(`listen to port ${port}`)
  });
}


module.exports = {
    start: start,
    app: app
}