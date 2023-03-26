const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  nom: {
    required: true,
    type: String,
  },
  prenom: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
  },
  age: {
    required: false,
    type: String,
  },
  job: {
    required: false,
    type: String,
  },
  localisation: {
    required: false,
    type: String,
  },
});

module.exports = mongoose.model("data", dataSchema);
