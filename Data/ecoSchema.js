const {model, Schema} = require("moongoose");

let ecoSchema = new Schema({
    Guild: String,
    User: String,
    Bank: Number,
    Wallet: Number
})

module.exports = model("ecoSchema", ecoSchema);