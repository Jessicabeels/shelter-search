const mongoose = require("mongoose")
const Schema = mongoose.Schema

//This is the blueprint for what
// the shelter data should look like
const shelterListSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        street: String,
        city: String,
        state: String
    },
    phone: {
        type: String,
        required: true
    }, 
    description: String,
    website: {
        type: String,
    },
    photo: String,
    state: String
})

//Collection = shelter v
module.exports = mongoose.model("Shelter", shelterListSchema)