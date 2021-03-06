import config from 'config';

const chalk = require('chalk');
const app = require('./index');
const port = process.env.PORT || config.get('server.port');

// Server
app.listen(port, () => {
  console.log(chalk.blueBright("Server is listening port number:", port));
})
