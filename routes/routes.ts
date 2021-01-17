import cors from "cors";
import express from 'express';
import { getAllTheTeams } from '../controllers/footballTeamInfo';
import { getSingleTheTeams } from '../controllers/footballTeamInfo';

// rest of the code remains same
const app = express();


app.use(cors());

// Middleware
// const middleware = require('../middleware/validatingApi');


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

module.exports = app;   