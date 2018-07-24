const express = require("express");
const  bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");
// const routes = require("./routes");

require('./models/Range');


const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/portfolio";
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);
// app.use(routes);

const PORT = process.env.PORT || 8080;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({
    extended: false
  }));

  require('./routes/rangeRoutes')(app);

  app.listen(PORT, function(){
    console.log( "App running on Port " + PORT );
})




