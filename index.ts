import cors from "cors";
import { eventContext } from 'aws-serverless-express/middleware';
import express from 'express';
const bodyParser = require('body-parser')
const mongoose = require('./db.ts');


export function configureApp() {
    const app = express();

    app.use(cors())
    app.use(eventContext());

    app.use(bodyParser.json({limit: '5mb', extended: true}))
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
    
    return app;
}

//exports = app;
// module.exports = app;