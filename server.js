/////////////////////////////////////////////
// Import Our Dependencies
/////////////////////////////////////////////
require("dotenv").config();
const express = require("express");
const path = require('path');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");

/////////////////////////////////////////////////
// Create our Express Application Object
/////////////////////////////////////////////////
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

/////////////////////////////////////////////////////
// Middleware
/////////////////////////////////////////////////////
// app.use(morgan('tiny')); // logging
app.use(methodOverride("_method")); // override for put and delete requests from forms
app.use(express.urlencoded({ extended: true })); // parses data sent in the body to make it usable in our app
app.use(express.static("public")); // serves files from public statically

////////////////////////////////////////////
// Routes
////////////////////////////////////////////
app.get('/logs/new', (req, res) => {
    res.render('New');
  });

  app.post('/logs', (req, res) => {
    // Process the submitted form data
    const title = req.body.title;
    const entry = req.body.entry;
    const shipIsBroken = req.body.shipIsBroken === 'on'; // Checkbox value will be 'on' if checked
  

// Log
const logsRoutes = require("./controllers/logs");
app.use("/logs", logsRoutes);

//////////////////////////////////////////////
// Server Listener
//////////////////////////////////////////////
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
