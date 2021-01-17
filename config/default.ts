export = {
    server: {
      port: 4000,
    },
    serverMongodb: {
       url: "mongodb+srv://",
       username: "atique",
       password: "atique",
       serverUrl: "cluster0-ak0lq.mongodb.net",
       port: "27017",
       databaseName:"Yougov"
    },
    localMongodb: {
       url: "mongodb://",
       username: "",
       password: "",
       serverUrl: "localhost",
       port: "27017",
       databaseName: "Yougov"
    },
    AwsUrl: {
      footBallTeamdetails: "https://s3.ap-south-1.amazonaws.com/yougov.interview/football.json"
    },
};