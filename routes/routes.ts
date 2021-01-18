import { createTheFootballTeams, getAllTheTeams, getSingleTheTeams } from '../controllers/footballTeamInfo';

import cors from "cors";
import express from 'express';
// Middleware
import { footBallTeam } from '../middleware/validatingAPI'

// rest of the code remains same
const app = express();


app.use(cors());


// Sample API testing
app.get('/', (req, res) => {
    res.status(200).send({
       status:200,
       message:'App is working fine!'
    });
});

app.get('/teams', (req, res) => {
    getAllTheTeams(req, res);
})

app.get('/teams/:teamname', (req, res) => {
    getSingleTheTeams(req, res)
})

app.post('/teams', footBallTeam, (req, res) => {
    createTheFootballTeams(req, res)
})

module.exports = app;   