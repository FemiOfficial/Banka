/* eslint-disable prefer-destructuring */
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';

chai.use(chaiHttp);

let token = '';

describe('test for create account endpoint', () => {
  const AccountData = {
    login: {
      email: 'jamesdoe@gmail.com',
      password: '12345',
    },
    account: {
      type: 'Savings',
      balance: '120000.00',
      email: 'jamesdoe@gmail.com',
    },
    account_2: {
      type: 'Current',
      balance: '120000.00',
      email: 'jamesdoe@gmail.com',
    },
    account400: {
      type: 'Savings',
      balance: '120000.00',
    },
    accountTrimInput400: {
      type: '     ',
      balance: 'gdgdgd',
      email: 'jamesdoe@gmail.com',
    },
    accountTrimInput400_2: {
      type: '     ',
      balance: 'gdgdgd     ',
      email: 'jamesdoe@gmail.com',
    },
  };

  describe('POST /auth/signin Success', () => {
    it('should log a user in successfully', (done) => {
      chai.request(app)
        .post('/api/v1/auth/signin')
        .send(AccountData.login)
        .end((err, res) => {
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('data');
          expect(res).to.have.status(200);
          token = res.body.data.token;
          done();
        });
    });
  });


  describe('POST /accounts Success', () => {
    it('should create a bank account for a user', (done) => {
      chai.request(app)
        .post('/api/v1/accounts')
        .send(AccountData.account)
        .set('Authorization', token)
        .end((err, res) => {
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('data');
          expect(res).to.have.status(201);
          done();
        });
    });
  });

  describe('POST /accounts Email conflict', () => {
    it('should not create two bank account for a user', (done) => {
      chai.request(app)
        .post('/api/v1/accounts')
        .send(AccountData.account_2)
        .set('Authorization', token)
        .end((err, res) => {
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('errors');
          expect(res).to.have.status(409);
          done();
        });
    });

  });

  describe('POST /accounts Bad Request Incomplete Payload', () => {
    it('should not create a bank account', (done) => {
      chai.request(app)
        .post('/api/v1/accounts')
        .send(AccountData.account400)
        .set('Authorization', token)
        .end((err, res) => {
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('errors');
          expect(res).to.have.status(400);
          done();
        });
    });
  });

  describe('POST /accounts Bad Request wrong input', () => {
    it('should not create a bank account user', (done) => {
      chai.request(app)
        .post('/api/v1/accounts')
        .send(AccountData.accountTrimInput400)
        .set('Authorization', token)
        .end((err, res) => {
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('errors');
          expect(res).to.have.status(400);
          done();
        });
    });
  });

  describe('POST /accounts Bad Request wrong input but complete payload', () => {
    it('should not create a bank account', (done) => {
      chai.request(app)
        .post('/api/v1/accounts')
        .send(AccountData.accountTrimInput400_2)
        .set('Authorization', token)
        .end((err, res) => {
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('errors');
          expect(res).to.have.status(400);
          console.log(token);
          done();
        });
    });
  });
  
});
