const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PlaceSchema = new Schema({
  name: {
    type: String,
  },
  lat: {
    type: Number,
  },
  lng: {
    type: Number,
  },
  verified: {
    type: Boolean,
  },
   description: {
    type: String,
  },
});

module.exports = mongoose.models.Place || mongoose.model('Place', PlaceSchema);
