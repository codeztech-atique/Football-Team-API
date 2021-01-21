import * as chai from 'chai';

import request from "supertest";

const createServer = require('../index.ts');
const app = createServer;

let expect = chai.expect;

describe("Server checks", function () {
  it("Server instantiated, working fine !!!", function (done) {
     //request(app).get("/").expect(200, done);
     request(app).get("/").then((res) => {
        res.body.should.have.property('status');
        res.body.should.have.property('message');
        expect(res.body.status).to.equal(200);
        done();
     })
  });
  
  it('OK, Fetch All the Football teams data - Method GET - /teams', (done) => {
    try {
      request(app).get('/teams')
      .then((res) => {
        res.body.should.have.property('message');
        res.body.should.have.property('totalTeam');
        res.body.should.have.property('data');
        res.body.should.have.property('status');
        expect(res.body.status).to.equal(200);
        done();
      }).catch((err) => done(err));
    } catch(e) {
      console.log(e);
    }    
  }).timeout(10000);
  
  it('OK, Filter the teams data based on teams name - Method GET - /teams/{teamName}', (done) => {
    try {
      request(app).get('/teams/Liverpool')
      .then((res) => {
        res.body.should.have.property('message');
        res.body.should.have.property('totalTeam');
        res.body.should.have.property('data');
        res.body.should.have.property('status');
        expect(res.body.status).to.equal(200);
        done();
      }).catch((err) => done(err));
    } catch(e) {
      console.log(e);
    }    
  }).timeout(10000);

  it('Ok, Football Team Created | Updates, Method POST - /teams', (done) => {
    try {
      request(app).post('/teams')
      .send({ "name": "FC Barselona", "img": "https://s3.ap-south-1.amazonaws.com/yougov.interview/berselona.png" })
      .then((res) => {
        res.body.should.have.property('message');
        res.body.should.have.property('status');
        res.body.should.have.property('data');
        expect(res.body.status).to.equal(200);
        done();
      }).catch((err) => done(err));
    } catch(e) {
      console.log(e);
    }    
  }).timeout(10000);
});