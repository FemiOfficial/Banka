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
    login: {
      email: 'email@gmail.com',
      password: 'password1234',
    },
    logInTrimInput400: {
      email: '      ',
      password: '      ',
    },
    login400: {
      password: '123',
    },
    login401: {
      email: 'denteal@gmail.com',
      password: 'password1234',
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

  describe('POST /auth/signin Bad Request', () => {
    it('should return a 400 error for incomplete payload', (done) => {
      chai.request(app)
        .post('/api/v1/auth/signin')
        .send(userData.login400)
        .end((err, res) => {
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('errors');
          expect(res).to.have.status(400);
          done();
        });
    });
  });

  describe('POST /auth/signin Invalid Credentials', () => {
    it('should return a 401 for invalid request payload (email and password)', (done) => {
      chai.request(app)
        .post('/api/v1/auth/signin')
        .send(userData.login401)
        .end((err, res) => {
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('error');
          expect(res).to.have.status(401);
          done();
        });
    });
  });

  describe('POST /auth/signin Success', () => {
    it('should log a user in successfully', (done) => {
      chai.request(app)
        .post('/api/v1/auth/signin')
        .send(userData.login)
        .end((err, res) => {
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('data');
          expect(res).to.have.status(200);
          done();
        });
    });
  });

  describe('POST /auth/signin Bad Request', () => {
    it('should give a 400 Bad Bad request error', (done) => {
      chai.request(app)
        .post('/api/v1/auth/signin')
        .send(userData.logInTrimInput400)
        .end((err, res) => {
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('errors');
          expect(res).to.have.status(400);
          done();
        });
    });
  });
});
