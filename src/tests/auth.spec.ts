import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';

import server from '../index';

// Assertion
chai.should();
chai.use(chaiHttp);

const basePath = '/v1/auth';

const nullAssertion = null;

describe('Authentication Service', () => {
  describe('Test POST route /login', () => {
    it('It should return token', (done) => {
      chai.request(server)
        .post(`${basePath}/login`)
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.a('object');
          res.body.should.be.a('object');
          res.body.data.should.have.property('token');
          res.body.data.token.should.be.a('string');
          done();
        });
    });
  });

  describe('Test POST route /logout', () => {
    it('It should return null', (done) => {
      chai.request(server)
        .post(`${basePath}/logout`)
        .end((err, res) => {
          res.should.have.status(200);
          expect(res.body.data).to.eq(nullAssertion);
          done();
        });
    });
  });
});