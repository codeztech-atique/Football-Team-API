import mongoose = require("mongoose");

const chalk = require('chalk');

require('../models/footballteamschema');
const footballteam = mongoose.model('footballteam');


// Fetch all the team data
export function getAllTheTeams(req: any, res: any) {
    console.log(chalk.bgYellowBright("---------------- Get All FootballTeam Info ----------------"));
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

// Fetch single team data
export function getSingleTheTeams(req: any, res: any) {
  console.log(chalk.bgYellowBright("---------------- Get Single FootballTeam Info ----------------"));
  const teamName = req.params.teamname;
  footballteam.find({name : teamName}, (err, listFootballTeam)=> {
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

// Create or Update the football team data
export function createTheFootballTeams(req: any, res: any) {
  console.log(chalk.bgYellowBright("---------------- Create / Update FootballTeam ----------------"));
  const teamName = req.body.name;
  footballteam.findOne({name : teamName}, (err: any, teamInfo:any) => {
    console.log(chalk.blue("---------------- Create FootballTeam ----------------"));
    if (teamInfo!==null) {
      teamInfo.img = req.body.img;
      teamInfo.updatedDate = new Date();
      var teamInfoSave = new footballteam(teamInfo);

      teamInfoSave.save().then(dataInfo => {
          res.send({
            message: 'Team flag updated! !!',
            status: 200,
            data: dataInfo
          })
        }).catch(err => {
          console.log('Err, User not found, Profile pic updated falied!');
          res.send({
            message: 'Team flag Updated failed!!!',
            status: 400,
            data: err
          })
      });
    } else {
      console.log(chalk.blue("---------------- Update FootballTeam ----------------"));
      var footTeamCreated = new footballteam(req.body);
      footTeamCreated.save().then(dataInfo => {
        res.send({
          message: 'Football Team Created !!',
          status: 200,
          data: dataInfo
        })
      }).catch(err => {
          res.send({
            message: 'Football team created failed!!',
            status: 400,
            err: err
          });
      })
    }
  });
}

