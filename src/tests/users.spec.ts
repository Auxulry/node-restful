import chai from 'chai';
import chaiHttp from 'chai-http';
import ApiController from '../controllers/api.controller';
import server from '../index';

const api = new ApiController();
const token = api.genTempToken('example@mail.com', 'password');

chai.should();
chai.use(chaiHttp);

const basePath = `/v1/users`;

describe('Run Users Service', () => {
  describe('Test GET route /users', () => {
    it('It should return list of users', (done) => {
      chai.request(server)
        .get(`${basePath}`)
        .set('Authorization', token)
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.a('object');
          res.body.data.should.be.a('array');
          done();
        });
    });
  });
});
