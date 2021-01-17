import mongoose = require("mongoose");

import config from 'config';

const chalk = require('chalk');

// Mongodb ServerUrl
const connectUrl = config.get('serverMongodb.url')+''+ config.get('serverMongodb.username')+':'+config.get('serverMongodb.password')+'@'+ config.get('serverMongodb.serverUrl') +'/'+ config.get('serverMongodb.databaseName')+'?retryWrites=true&w=majority';

// Mongodb LocalUrl
// const connectUrl =  config.get('localMongodb.url')+''+ config.get('localMongodb.serverUrl')+':'+config.get('localMongodb.port')+'/'+ config.get('localMongodb.databaseName');

mongoose.connect(connectUrl,{ useNewUrlParser:true, useUnifiedTopology: true },(err) => {
    if(!err){
        console.log(chalk.green('MongoDB connected...'));
    } else
    {
        console.log(chalk.red('Error in DB connection: ' + JSON.stringify(err, undefined, 2)));
    }
})

module.exports = mongoose
