const {model} = require("mongoose");

const {OrderSchema} = require("../schemas/OrderSchema");

const orders = new model("orders", OrderSchema);

module.exports = {orders};