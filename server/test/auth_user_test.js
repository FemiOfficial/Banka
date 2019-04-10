/* eslint-disable no-undef */
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';

chai.use(chaiHttp);


describe('test for sign up endpoint', () => {
  const userData = {
    user: {
      firstName: 'test-firstname',
      lastName: 'test-lastname',
      password: 'password1234',
      email: 'email@gmail.com',
    },
    user400: {
      firstName: 'femi',
      lastName: 'james',
      email: 'email@gmail.com',
    },

  };
  describe('POST /auth/signup Success', () => {
    it('should create a single user', (done) => {
      chai.request(app)
        .post('/api/v1/auth/signup')
        .send(userData.user)
        .end((err, res) => {
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('data');
          expect(res).to.have.status(201);
          done();
        });
    });
  });

  describe('POST /auth/signup Bad Request', () => {
    it('should create a single user', (done) => {
      chai.request(app)
        .post('/api/v1/auth/signup')
        .send(userData.user400)
        .end((err, res) => {
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('errors');
          expect(res).to.have.status(400);
          done();
        });
    });
  });

});
