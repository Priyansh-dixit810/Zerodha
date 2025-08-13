require('dotenv').config();
const express = require("express");
const app = express();
const mongoose =require("mongoose");
const port =process.env.PORT || 8080;
const url =process.env.MONGO_URL;
const bodyParser = require('body-parser');
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());

const {holding} = require("./models/HoldingsModel");
const {positions} = require("./models/PositionsModel")
const {orders} = require("./models/OrderModel");


app.get('/allholdings',async (req,res)=>{
    let allholdings = await holding.find({});
    res.json(allholdings);
});
app.get('/allpositions',async (req,res)=>{
    let allpositions = await positions.find({});
    res.json(allpositions);
});

app.post("/newOrder", async (req, res) => {
  let newOrder = new orders({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  newOrder.save();

  res.send("Order saved!");
});

app.listen(port,()=>{
    console.log("Listening");
    mongoose.connect(url)
    console.log("Connected");
});