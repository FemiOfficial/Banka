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
    userEmail400: {
      firstName: 'femi',
      lastName: 'james',
      email: 'emailgmail.com',
    },
    userTrimInput400: {
      firstName: '     ',
      lastName: '     ',
      email: 'email@gmail.com',
      password: '      ',
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

  describe('POST /auth/signup Bad Request Incomplete Payload', () => {
    it('should not create a user', (done) => {
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

  describe('POST /auth/signup Bad Request Invalid Email', () => {
    it('should not create a user', (done) => {
      chai.request(app)
        .post('/api/v1/auth/signup')
        .send(userData.userEmail400)
        .end((err, res) => {
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('errors');
          expect(res).to.have.status(400);
          done();
        });
    });
  });

  describe('POST /auth/signup Bad Request Invalid Input', () => {
    it('should create a single user', (done) => {
      chai.request(app)
        .post('/api/v1/auth/signup')
        .send(userData.userTrimInput400)
        .end((err, res) => {
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('errors');
          expect(res).to.have.status(400);
          done();
        });
    });
  });
});
