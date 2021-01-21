#API_Documentation

https://documenter.getpostman.com/view/2063706/TVza8D8j

#EntryPoint

node local.ts

Note -

No need to run the application - Use this Endpoint from Postman - In order to check the API response

https://49b15o38rg.execute-api.ap-south-1.amazonaws.com/production

Please visit the API documentation in order to see the API details

#TestCase - 

All the test case written inside the test folder. To run this go to the test folder - 

npm test

--> It will run 4 test cases -

1) Check the App working fine or not !!!

2) Get All the football Team Data Expect result check GET /teams

3) Filter the FootBall team based on the team name. GET /teams/{teamName}

4) Create or update the team flag if the team exists. POST /teams

