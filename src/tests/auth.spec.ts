import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import ApiController from '../controllers/api.controller';
import server from '../index';

const api = new ApiController();
const token = api.genTempToken('example@mail.com', 'password123');

// * Assertion
chai.should();
chai.use(chaiHttp);

const basePath = '/v1/auth';

const nullAssertion = null;

describe('Authentication Service', () => {
  describe('Test POST route /login', () => {
    it('It should return token', (done) => {
      const payload = {
        email: 'example@mail.com',
        password: 'password'
      };

      console.log(payload, 'chai payload 1');

      chai.request(server)
        .post(`${basePath}/login`)
        .send(payload)
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
        .set('Authorization', token)
        .end((err, res) => {
          res.should.have.status(200);
          expect(res.body.data).to.eq(nullAssertion);
          done();
        });
    });
  });
});