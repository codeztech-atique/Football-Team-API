//This file is AWS Lambda entry point
import { Context, Handler } from 'aws-lambda';
import { createServer, proxy } from 'aws-serverless-express';

import { configureApp } from './index';

// const app = require('./index.ts')

const app = configureApp();
const server = createServer(app);


// export function handler(event: any, context: any) {
//     proxy(server, event, context)
// }
export const http = (event: any, context: Context) =>
  proxy(server, event, context);

