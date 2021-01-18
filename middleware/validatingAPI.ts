const chalk = require('chalk');

// Fetch all the team data

export function footBallTeam(req: any, res: any, next:any) {
    console.log(chalk.bgYellowBright("---------------- FootballTeam Data Validation ----------------"));
    var errText = '';
    if(req.body === undefined) {
        res.status(400).send({
            status: 400,  
            message: 'Team Name and Url is Required!!'
        });
    } else {
        if(req.body.name === undefined || req.body.name === '') {
            errText += 'Team Name, ';
         } if(req.body.img === undefined || req.body.img === '') {
            errText += 'Team Logo URl, ';
         }
     
         if(errText !== '') {
             errText += ' is required !!!'
             res.status(400).send({
                 status: 400,  
                 message: errText
             });
         } else {
            var validateUrl = /(http[s]?:\/+\/)|(?:.*(jpg|png|JPG|PNG|jpeg|JPEG)+$)/;
            console.log(validateUrl.test(req.body.img));
            if(validateUrl.test(req.body.img)) {
               next();
            } else {
                 res.status(200).send({
                     status: 200,  
                     message: 'Team Logo URL is Invalid, supports jpg,png,JPG,PNG,jpeg,JPEG !!!'
                 });
            }
         }
    }
};