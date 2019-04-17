"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _chai = _interopRequireWildcard(require("chai"));

var _chaiHttp = _interopRequireDefault(require("chai-http"));

var _index = _interopRequireDefault(require("../index"));

/* eslint-disable prefer-destructuring */
_chai["default"].use(_chaiHttp["default"]);

var token = '';
describe('test for transaction endpoints', function () {
  var TransactionData = {
    loginStaff: {
      email: 'donaldtrump@gmail.com',
      password: '12345'
    },
    accountNumber: {
      acc: 23432344
    },
    transaction: {
      cashier: 3,
      amount: 2345
    },
    transaction400_1: {
      cashier: '3'
    },
    transaction400_2: {
      cashier: 'gdgfgdgf',
      amount: '     '
    },
    transaction400_3: {
      cashier: ' gdgdggg5556',
      amount: '4000'
    }
  };
  describe('POST /auth/signin Success', function () {
    it('should log a user in successfully', function (done) {
      _chai["default"].request(_index["default"]).post('/api/v1/auth/signin').send(TransactionData.loginStaff).end(function (err, res) {
        (0, _chai.expect)(res.body).to.be.an('object');
        (0, _chai.expect)(res.body).to.have.property('data');
        (0, _chai.expect)(res).to.have.status(200);
        token = res.body.data.token;
        done();
      });
    });
  });
  describe('POST /transactions/<:account-number>/debit Success', function () {
    it('should not debit an account successfully', function (done) {
      _chai["default"].request(_index["default"]).post("/api/v1/transactions/".concat(TransactionData.accountNumber.acc, "/debit")).send(TransactionData.transaction).set('Authorization', token).end(function (err, res) {
        (0, _chai.expect)(res.body).to.be.an('object');
        (0, _chai.expect)(res.body).to.have.property('errors');
        (0, _chai.expect)(res).to.have.status(404);
        done();
      });
    });
  });
  describe('POST /transactions/<:account-number>/debit Unauthorized Access', function () {
    it('should debit an account successfully', function (done) {
      _chai["default"].request(_index["default"]).post('/api/v1/transactions/23432344/debit').send(TransactionData.transaction).end(function (err, res) {
        (0, _chai.expect)(res.body).to.be.an('object');
        (0, _chai.expect)(res.body).to.have.property('error');
        (0, _chai.expect)(res).to.have.status(401);
        done();
      });
    });
  });
  describe('POST /transactions/<:account-number>/debit Invalid Account Number', function () {
    it('should not debit an account successfully', function (done) {
      _chai["default"].request(_index["default"]).post('/api/v1/transactions/23432/debit').send(TransactionData.transaction).set('Authorization', token).end(function (err, res) {
        (0, _chai.expect)(res.body).to.be.an('object');
        (0, _chai.expect)(res.body).to.have.property('errors');
        (0, _chai.expect)(res).to.have.status(404);
        done();
      });
    });
  });
  describe('POST /transactions/<:account-number>/debit Bad Request', function () {
    it('should not debit an account successfully', function (done) {
      _chai["default"].request(_index["default"]).post('/api/v1/transactions/23432/debit').send(TransactionData.transaction400_1).set('Authorization', token).end(function (err, res) {
        (0, _chai.expect)(res.body).to.be.an('object');
        (0, _chai.expect)(res.body).to.have.property('errors');
        (0, _chai.expect)(res).to.have.status(400);
        done();
      });
    });
  });
  describe('POST /transactions/<:account-number>/debit Bad Request', function () {
    it('should not debit an account successfully', function (done) {
      _chai["default"].request(_index["default"]).post('/api/v1/transactions/23432/debit').send(TransactionData.transaction400_3).set('Authorization', token).end(function (err, res) {
        (0, _chai.expect)(res.body).to.be.an('object');
        (0, _chai.expect)(res.body).to.have.property('errors');
        (0, _chai.expect)(res).to.have.status(400);
        done();
      });
    });
  });
  describe('POST /transactions/<:account-number>/debit Bad Request', function () {
    it('should not debit an account successfully', function (done) {
      _chai["default"].request(_index["default"]).post('/api/v1/transactions/23432/debit').send(TransactionData.transaction400_2).set('Authorization', token).end(function (err, res) {
        (0, _chai.expect)(res.body).to.be.an('object');
        (0, _chai.expect)(res.body).to.have.property('errors');
        (0, _chai.expect)(res).to.have.status(400);
        done();
      });
    });
  });
  describe('POST /transactions/<:account-number>/credit Success', function () {
    it('should not credit an account successfully', function (done) {
      _chai["default"].request(_index["default"]).post("/api/v1/transactions/".concat(TransactionData.accountNumber.acc, "/credit")).send(TransactionData.transaction).set('Authorization', token).end(function (err, res) {
        (0, _chai.expect)(res.body).to.be.an('object');
        (0, _chai.expect)(res.body).to.have.property('errors');
        (0, _chai.expect)(res).to.have.status(404);
        done();
      });
    });
  });
  describe('POST /transactions/<:account-number>/credit Unauthorized Access', function () {
    it('should credit an account successfully', function (done) {
      _chai["default"].request(_index["default"]).post('/api/v1/transactions/23432344/credit').send(TransactionData.transaction).end(function (err, res) {
        (0, _chai.expect)(res.body).to.be.an('object');
        (0, _chai.expect)(res.body).to.have.property('error');
        (0, _chai.expect)(res).to.have.status(401);
        done();
      });
    });
  });
  describe('POST /transactions/<:account-number>/credit Invalid Account Number', function () {
    it('should not credit an account successfully', function (done) {
      _chai["default"].request(_index["default"]).post('/api/v1/transactions/23432/credit').send(TransactionData.transaction).set('Authorization', token).end(function (err, res) {
        (0, _chai.expect)(res.body).to.be.an('object');
        (0, _chai.expect)(res.body).to.have.property('errors');
        (0, _chai.expect)(res).to.have.status(404);
        done();
      });
    });
  });
  describe('POST /transactions/<:account-number>/credit Bad Request', function () {
    it('should not credit an account successfully', function (done) {
      _chai["default"].request(_index["default"]).post('/api/v1/transactions/23432/credit').send(TransactionData.transaction400_1).set('Authorization', token).end(function (err, res) {
        (0, _chai.expect)(res.body).to.be.an('object');
        (0, _chai.expect)(res.body).to.have.property('errors');
        (0, _chai.expect)(res).to.have.status(400);
        done();
      });
    });
  });
  describe('POST /transactions/<:account-number>/credit Bad Request', function () {
    it('should not credit an account successfully', function (done) {
      _chai["default"].request(_index["default"]).post('/api/v1/transactions/23432/credit').send(TransactionData.transaction400_3).set('Authorization', token).end(function (err, res) {
        (0, _chai.expect)(res.body).to.be.an('object');
        (0, _chai.expect)(res.body).to.have.property('errors');
        (0, _chai.expect)(res).to.have.status(400);
        done();
      });
    });
  });
  describe('POST /transactions/<:account-number>/credit Bad Request', function () {
    it('should not credit an account successfully', function (done) {
      _chai["default"].request(_index["default"]).post('/api/v1/transactions/23432/credit').send(TransactionData.transaction400_2).set('Authorization', token).end(function (err, res) {
        (0, _chai.expect)(res.body).to.be.an('object');
        (0, _chai.expect)(res.body).to.have.property('errors');
        (0, _chai.expect)(res).to.have.status(400);
        done();
      });
    });
  });
});
//# sourceMappingURL=transactions_test.js.map