"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _chai = _interopRequireWildcard(require("chai"));

var _chaiHttp = _interopRequireDefault(require("chai-http"));

var _index = _interopRequireDefault(require("../index"));

/* eslint-disable prefer-destructuring */
_chai["default"].use(_chaiHttp["default"]);

var token = '';
describe('test for create account endpoint', function () {
  var AccountData = {
    login: {
      email: 'jamesdoe@gmail.com',
      password: '12345'
    },
    loginStaff: {
      email: 'donaldtrump@gmail.com',
      password: '12345'
    },
    accountPatch: {
      status: 'active'
    },
    accountPatch400: {
      status: 'act'
    },
    accountPatch400_2: {
      status: '  '
    },
    accountPatch400_3: {},
    account: {
      type: 'Savings',
      balance: '120000.00',
      email: 'jamesdoe@gmail.com'
    },
    account_2: {
      type: 'Current',
      balance: '120000.00',
      email: 'jamesdoe@gmail.com'
    },
    account400: {
      type: 'Savings',
      balance: '120000.00'
    },
    accountTrimInput400: {
      type: '     ',
      balance: 'gdgdgd',
      email: 'jamesdoe@gmail.com'
    },
    accountTrimInput400_2: {
      type: '     ',
      balance: 'gdgdgd     ',
      email: 'jamesdoe@gmail.com'
    }
  };
  describe('POST /auth/signin Success', function () {
    it('should log a user in successfully', function (done) {
      _chai["default"].request(_index["default"]).post('/api/v1/auth/signin').send(AccountData.login).end(function (err, res) {
        (0, _chai.expect)(res.body).to.be.an('object');
        (0, _chai.expect)(res.body).to.have.property('data');
        (0, _chai.expect)(res).to.have.status(200);
        token = res.body.data.token;
        done();
      });
    });
  });
  describe('POST /accounts Success', function () {
    it('should create a bank account for a user', function (done) {
      _chai["default"].request(_index["default"]).post('/api/v1/accounts').send(AccountData.account).set('Authorization', token).end(function (err, res) {
        (0, _chai.expect)(res.body).to.be.an('object');
        (0, _chai.expect)(res.body).to.have.property('data');
        (0, _chai.expect)(res).to.have.status(201);
        done();
      });
    });
  });
  describe('POST /accounts Email conflict', function () {
    it('should not create two bank account for a user', function (done) {
      _chai["default"].request(_index["default"]).post('/api/v1/accounts').send(AccountData.account_2).set('Authorization', token).end(function (err, res) {
        (0, _chai.expect)(res.body).to.be.an('object');
        (0, _chai.expect)(res.body).to.have.property('errors');
        (0, _chai.expect)(res).to.have.status(409);
        done();
      });
    });
  });
  describe('POST /accounts Bad Request Incomplete Payload', function () {
    it('should not create a bank account', function (done) {
      _chai["default"].request(_index["default"]).post('/api/v1/accounts').send(AccountData.account400).set('Authorization', token).end(function (err, res) {
        (0, _chai.expect)(res.body).to.be.an('object');
        (0, _chai.expect)(res.body).to.have.property('errors');
        (0, _chai.expect)(res).to.have.status(400);
        done();
      });
    });
  });
  describe('POST /accounts Bad Request wrong input', function () {
    it('should not create a bank account user', function (done) {
      _chai["default"].request(_index["default"]).post('/api/v1/accounts').send(AccountData.accountTrimInput400).set('Authorization', token).end(function (err, res) {
        (0, _chai.expect)(res.body).to.be.an('object');
        (0, _chai.expect)(res.body).to.have.property('errors');
        (0, _chai.expect)(res).to.have.status(400);
        done();
      });
    });
  });
  describe('POST /accounts Bad Request wrong input but complete payload', function () {
    it('should not create a bank account', function (done) {
      _chai["default"].request(_index["default"]).post('/api/v1/accounts').send(AccountData.accountTrimInput400_2).set('Authorization', token).end(function (err, res) {
        (0, _chai.expect)(res.body).to.be.an('object');
        (0, _chai.expect)(res.body).to.have.property('errors');
        (0, _chai.expect)(res).to.have.status(400);
        done();
      });
    });
  });
  describe('POST /auth/signin staff sign in', function () {
    it('should log a staff in', function (done) {
      _chai["default"].request(_index["default"]).post('/api/v1/auth/signin').send(AccountData.loginStaff).end(function (err, res) {
        (0, _chai.expect)(res.body).to.be.an('object');
        (0, _chai.expect)(res.body).to.have.property('data');
        (0, _chai.expect)(res).to.have.status(200);
        token = res.body.data.token;
        done();
      });
    });
  });
  describe('PATCH /accounts/<account-number> Bad Request wrong input but complete payload', function () {
    it('should not create a bank account', function (done) {
      _chai["default"].request(_index["default"]).patch('/api/v1/accounts/23432344').send(AccountData.accountPatch400).set('Authorization', token).end(function (err, res) {
        (0, _chai.expect)(res.body).to.be.an('object');
        (0, _chai.expect)(res.body).to.have.property('errors');
        (0, _chai.expect)(res).to.have.status(400);
        done();
      });
    });
  });
  describe('PATCH /accounts/<account-number> Bad Request wrong input but complete payload', function () {
    it('should not create a bank account', function (done) {
      _chai["default"].request(_index["default"]).patch('/api/v1/accounts/23432344').send(AccountData.accountPatch400_2).set('Authorization', token).end(function (err, res) {
        (0, _chai.expect)(res.body).to.be.an('object');
        (0, _chai.expect)(res.body).to.have.property('errors');
        (0, _chai.expect)(res).to.have.status(400);
        done();
      });
    });
  });
  describe('PATCH /accounts/<account-number> Bad Request wrong input but complete payload', function () {
    it('should not create a bank account', function (done) {
      _chai["default"].request(_index["default"]).patch('/api/v1/accounts/23432344').send(AccountData.accountPatch400_3).set('Authorization', token).end(function (err, res) {
        (0, _chai.expect)(res.body).to.be.an('object');
        (0, _chai.expect)(res.body).to.have.property('errors');
        (0, _chai.expect)(res).to.have.status(400);
        done();
      });
    });
  });
  describe('PATCH /accounts/<account-number> Bad Request wrong input but complete payload', function () {
    it('should not create a bank account', function (done) {
      _chai["default"].request(_index["default"]).patch('/api/v1/accounts/2343').send(AccountData.accountPatch).set('Authorization', token).end(function (err, res) {
        (0, _chai.expect)(res.body).to.be.an('object');
        (0, _chai.expect)(res.body).to.have.property('errors');
        (0, _chai.expect)(res).to.have.status(404);
        done();
      });
    });
  });
  describe('PATCH /accounts/<account-number> update an account successfully', function () {
    it('should create a bank account', function (done) {
      _chai["default"].request(_index["default"]).patch('/api/v1/accounts/23432344').send(AccountData.accountPatch).set('Authorization', token).end(function (err, res) {
        (0, _chai.expect)(res.body).to.be.an('object');
        (0, _chai.expect)(res.body).to.have.property('data');
        (0, _chai.expect)(res).to.have.status(200);
        done();
      });
    });
  });
  describe('DELETE /accounts/<account-number> not delete an account without token provided', function () {
    it('should not delete a bank account', function (done) {
      _chai["default"].request(_index["default"])["delete"]('/api/v1/accounts/23432344').end(function (err, res) {
        (0, _chai.expect)(res.body).to.be.an('object');
        (0, _chai.expect)(res.body).to.have.property('error');
        (0, _chai.expect)(res).to.have.status(401);
        done();
      });
    });
  });
  describe('DELETE /accounts/<account-number> not delete an account with invalid account number', function () {
    it('should not delete a bank account', function (done) {
      _chai["default"].request(_index["default"])["delete"]('/api/v1/accounts/2343').set('Authorization', token).end(function (err, res) {
        (0, _chai.expect)(res.body).to.be.an('object');
        (0, _chai.expect)(res.body).to.have.property('errors');
        (0, _chai.expect)(res).to.have.status(404);
        done();
      });
    });
  });
  describe('DELETE /accounts/<account-number> delete an account successfully', function () {
    it('should not delete a bank account', function (done) {
      _chai["default"].request(_index["default"])["delete"]('/api/v1/accounts/23432344').set('Authorization', token).end(function (err, res) {
        (0, _chai.expect)(res.body).to.be.an('object');
        (0, _chai.expect)(res.body).to.have.property('data');
        (0, _chai.expect)(res).to.have.status(200);
        done();
      });
    });
  });
});
//# sourceMappingURL=accounts_test.js.map