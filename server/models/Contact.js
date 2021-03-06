let mongoose = require("mongoose");

// can put schema here
// better organization to split if going to re-use schema for multiple models
// just use let schema = require("../schemas/Person");

const schema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    occupation: {
        type: String
    },
    avatar: {
        type: String
    }
});

module.exports = mongoose.model("Contact", schema);
