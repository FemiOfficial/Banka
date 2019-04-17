"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _chai = _interopRequireWildcard(require("chai"));

var _chaiHttp = _interopRequireDefault(require("chai-http"));

var _index = _interopRequireDefault(require("../index"));

/* eslint-disable no-undef */
_chai["default"].use(_chaiHttp["default"]);

describe('test for authentication (sign up and sign in) endpoints', function () {
  var userData = {
    user: {
      firstName: 'test-firstname',
      lastName: 'test-lastname',
      password: 'password1234',
      email: 'email@gmail.com'
    },
    user_2: {
      firstName: 'test-2-firstname',
      lastName: 'test-2-lastname',
      password: 'password1234',
      email: 'email@gmail.com'
    },
    user400: {
      firstName: 'femi',
      lastName: 'james',
      email: 'email@gmail.com'
    },
    userEmail400: {
      firstName: 'femi',
      lastName: 'james',
      email: 'emailgmail.com'
    },
    userTrimInput400: {
      firstName: '     ',
      lastName: '     ',
      email: 'email@gmail.com',
      password: '      '
    },
    login: {
      email: 'email@gmail.com',
      password: 'password1234'
    },
    logInTrimInput400: {
      email: '      ',
      password: '      '
    },
    login400: {
      password: '123'
    },
    login401: {
      email: 'denteal@gmail.com',
      password: 'password1234'
    }
  };
  describe('POST /auth/signup Success', function () {
    it('should create a single user', function (done) {
      _chai["default"].request(_index["default"]).post('/api/v1/auth/signup').send(userData.user).end(function (err, res) {
        (0, _chai.expect)(res.body).to.be.an('object');
        (0, _chai.expect)(res.body).to.have.property('data');
        (0, _chai.expect)(res).to.have.status(201);
        done();
      });
    });
  });
  describe('POST /auth/signup Email Conflict', function () {
    it('should not create a user', function (done) {
      _chai["default"].request(_index["default"]).post('/api/v1/auth/signup').send(userData.user_2).end(function (err, res) {
        (0, _chai.expect)(res.body).to.be.an('object');
        (0, _chai.expect)(res.body).to.have.property('errors');
        (0, _chai.expect)(res).to.have.status(409);
        done();
      });
    });
  });
  describe('POST /auth/signup Bad Request Incomplete Payload', function () {
    it('should not create a user', function (done) {
      _chai["default"].request(_index["default"]).post('/api/v1/auth/signup').send(userData.user400).end(function (err, res) {
        (0, _chai.expect)(res.body).to.be.an('object');
        (0, _chai.expect)(res.body).to.have.property('errors');
        (0, _chai.expect)(res).to.have.status(400);
        done();
      });
    });
  });
  describe('POST /auth/signup Bad Request Invalid Email', function () {
    it('should not create a user', function (done) {
      _chai["default"].request(_index["default"]).post('/api/v1/auth/signup').send(userData.userEmail400).end(function (err, res) {
        (0, _chai.expect)(res.body).to.be.an('object');
        (0, _chai.expect)(res.body).to.have.property('errors');
        (0, _chai.expect)(res).to.have.status(400);
        done();
      });
    });
  });
  describe('POST /auth/signup Bad Request Invalid Input', function () {
    it('should create a single user', function (done) {
      _chai["default"].request(_index["default"]).post('/api/v1/auth/signup').send(userData.userTrimInput400).end(function (err, res) {
        (0, _chai.expect)(res.body).to.be.an('object');
        (0, _chai.expect)(res.body).to.have.property('errors');
        (0, _chai.expect)(res).to.have.status(400);
        done();
      });
    });
  });
  describe('POST /auth/signin Bad Request', function () {
    it('should return a 400 error for incomplete payload', function (done) {
      _chai["default"].request(_index["default"]).post('/api/v1/auth/signin').send(userData.login400).end(function (err, res) {
        (0, _chai.expect)(res.body).to.be.an('object');
        (0, _chai.expect)(res.body).to.have.property('errors');
        (0, _chai.expect)(res).to.have.status(400);
        done();
      });
    });
  });
  describe('POST /auth/signin Invalid Credentials', function () {
    it('should return a 401 for invalid request payload (email and password)', function (done) {
      _chai["default"].request(_index["default"]).post('/api/v1/auth/signin').send(userData.login401).end(function (err, res) {
        (0, _chai.expect)(res.body).to.be.an('object');
        (0, _chai.expect)(res.body).to.have.property('error');
        (0, _chai.expect)(res).to.have.status(401);
        done();
      });
    });
  });
  describe('POST /auth/signin Success', function () {
    it('should log a user in successfully', function (done) {
      _chai["default"].request(_index["default"]).post('/api/v1/auth/signin').send(userData.login).end(function (err, res) {
        (0, _chai.expect)(res.body).to.be.an('object');
        (0, _chai.expect)(res.body).to.have.property('data');
        (0, _chai.expect)(res).to.have.status(200);
        done();
      });
    });
  });
  describe('POST /auth/signin Bad Request', function () {
    it('should give a 400 Bad Bad request error', function (done) {
      _chai["default"].request(_index["default"]).post('/api/v1/auth/signin').send(userData.logInTrimInput400).end(function (err, res) {
        (0, _chai.expect)(res.body).to.be.an('object');
        (0, _chai.expect)(res.body).to.have.property('errors');
        (0, _chai.expect)(res).to.have.status(400);
        done();
      });
    });
  });
});
//# sourceMappingURL=auth_user_test.js.map