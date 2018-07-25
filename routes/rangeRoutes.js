const mongoose = require("mongoose");
// const Range = require("../models/Range");
const Range = mongoose.model('Range');

var express = require('express')
var app = express()

module.exports = app => {
app.post("/rate", async (req, res) =>{
    const value = req.body;
    console.log(value.range);

    const ranges = new Range({
        range: value.range
      });

      try {
        await ranges.save();
        res.send(ranges);
      } catch (err) {
        res.send(400, err);
      }
});

app.get("/ratings", async (req,res)=>{
  const rating = await Range.find({})

  res.send(rating);
 

})

}