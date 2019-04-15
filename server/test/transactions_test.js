/* eslint-disable prefer-destructuring */
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';

chai.use(chaiHttp);

let token = '';

describe('test for transaction endpoints', () => {
  const TransactionData = {
    loginStaff: {
      email: 'donaldtrump@gmail.com',
      password: '12345',
    },
    accountNumber: {
      acc: 23432344,
    },
    transaction: {
      cashier: 3,
      amount: 2345,
    },
    transaction400_1: {
      cashier: '3',
    },
    transaction400_2: {
      cashier: 'gdgfgdgf',
      amount: '     ',
    },
    transaction400_3: {
      cashier: ' gdgdggg5556',
      amount: '4000',
    },

  };

  describe('POST /auth/signin Success', () => {
    it('should log a user in successfully', (done) => {
      chai.request(app)
        .post('/api/v1/auth/signin')
        .send(TransactionData.loginStaff)
        .end((err, res) => {
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('data');
          expect(res).to.have.status(200);
          token = res.body.data.token;
          done();
        });
    });
  });

  describe('POST /transactions/<:account-number>/debit Success', () => {
    it('should not debit an account successfully', (done) => {
      chai.request(app)
        .post(`/api/v1/transactions/${TransactionData.accountNumber.acc}/debit`)
        .send(TransactionData.transaction)
        .set('Authorization', token)
        .end((err, res) => {
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('errors');
          expect(res).to.have.status(404);
          done();
        });
    });
  });

  describe('POST /transactions/<:account-number>/debit Unauthorized Access', () => {
    it('should debit an account successfully', (done) => {
      chai.request(app)
        .post('/api/v1/transactions/23432344/debit')
        .send(TransactionData.transaction)
        .end((err, res) => {
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('error');
          expect(res).to.have.status(401);
          done();
        });
    });
  });

  describe('POST /transactions/<:account-number>/debit Invalid Account Number', () => {
    it('should not debit an account successfully', (done) => {
      chai.request(app)
        .post('/api/v1/transactions/23432/debit')
        .send(TransactionData.transaction)
        .set('Authorization', token)
        .end((err, res) => {
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('errors');
          expect(res).to.have.status(404);
          done();
        });
    });
  });

  describe('POST /transactions/<:account-number>/debit Bad Request', () => {
    it('should not debit an account successfully', (done) => {
      chai.request(app)
        .post('/api/v1/transactions/23432/debit')
        .send(TransactionData.transaction400_1)
        .set('Authorization', token)
        .end((err, res) => {
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('errors');
          expect(res).to.have.status(400);
          done();
        });
    });
  });

  describe('POST /transactions/<:account-number>/debit Bad Request', () => {
    it('should not debit an account successfully', (done) => {
      chai.request(app)
        .post('/api/v1/transactions/23432/debit')
        .send(TransactionData.transaction400_3)
        .set('Authorization', token)
        .end((err, res) => {
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('errors');
          expect(res).to.have.status(400);
          done();
        });
    });
  });

  describe('POST /transactions/<:account-number>/debit Bad Request', () => {
    it('should not debit an account successfully', (done) => {
      chai.request(app)
        .post('/api/v1/transactions/23432/debit')
        .send(TransactionData.transaction400_2)
        .set('Authorization', token)
        .end((err, res) => {
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('errors');
          expect(res).to.have.status(400);
          done();
        });
    });
  });
});
