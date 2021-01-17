import cors from "cors";
import express from 'express';

const mongoose = require('./db.ts');

const app = express();


app.use(cors())

const apiRoutes = require('./routes/routes');

app.use('', apiRoutes);

//Capture All 404 errors
app.use(function (req,res,next){
	res.status(404).send('Error - Unable to find the requested resource!');
});

app.use((req, res, next) => {
  req.socket.on('error', () => {});
  next();
});


module.exports = app;