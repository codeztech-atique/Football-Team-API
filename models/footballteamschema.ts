import mongoose = require("mongoose");

var Schema = mongoose.Schema;

var footballTeamSchema = new mongoose.Schema({
  name: {type: String, default: ''},
  img: {type: String, default: ''},
  createdAt: { type: Date, default: Date.now},
  updatedDate: {type: Date, default: Date.now},
});

var footballteam = mongoose.model('footballteam', footballTeamSchema);
module.exports = footballteam;
