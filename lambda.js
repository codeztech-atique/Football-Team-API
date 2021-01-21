
//'use strict'
//This file is AWS Lambda entry point
//'use strict'

//import awsServerlessExpress from 'aws-serverless-express';
const awsServerlessExpress = require('aws-serverless-express')

const app = require('./index.ts')
const server = awsServerlessExpress.createServer(app);

exports.handler = (event, context) => {
    awsServerlessExpress.proxy(server, event, context)
}

