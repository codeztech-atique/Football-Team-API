import * as bodyParser from 'body-parser';

import cors from "cors";
import express from 'express';

const mongoose = require('./db.ts');


  const app = express();

  app.use(cors())
  // app.use(eventContext());

  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({limit: '5mb', extended: true}))

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
  
  export = app;
// module.exports = app;