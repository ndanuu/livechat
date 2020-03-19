//import required packages
const express = require("express");


//initialize express app
const app = express();
// Ensble CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "POST, GET, OPTIONS, DELETE, PUT,PATCH"
  );
  next();
});
const bodyParser = require("body-parser");

//Link bodyparser for url reading
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

//import routes
const { customer } = require("./routes");

//initialize the router
app.use("/customer", customer);

//make app available to other files
module.exports = app;
