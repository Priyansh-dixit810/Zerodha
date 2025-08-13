const {model} = require("mongoose");

const {PositionsSchema} = require("../schemas/PositionsSchema");

const positions = new model("positions", PositionsSchema);

module.exports = {positions};