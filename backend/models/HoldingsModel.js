const {model} = require('mongoose');

const {HoldingsSchema} = require('../schemas/HoldingsSchema');

const holding = new model("holding", HoldingsSchema);

module.exports = {holding};