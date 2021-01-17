import mongoose = require("mongoose");

import config from 'config';

const chalk = require('chalk');

require('../models/footballteamschema');
const footballteam = mongoose.model('footballteam');


// Fetch all the team data
export function getAllTheTeams(req: any, res: any) {
    console.log(chalk.bgYellowBright("---------------- Get List of FootballTeam Player ----------------"));
    footballteam.find({}, (err, listFootballTeam)=> {
      if (err)
        res.status(400).send({
           err: err,
           message: 'Falied !!',
           status: 400
        })
      else {
        res.status(200).send({
            message: 'Success !!',
            totalTeam: listFootballTeam.length,
            data: listFootballTeam,
            status: 200
        })
      }
    });
}

// module.exports.getAllTheTeams = (req, res, next) => {
  
// };