# Banka-app
[![Build Status](https://travis-ci.org/FemiOfficial/Banka-app.svg?branch=develop)](https://travis-ci.org/FemiOfficial/Banka-app)

[![Coverage Status](https://coveralls.io/repos/github/FemiOfficial/Banka-app/badge.svg?branch=develop)](https://coveralls.io/github/FemiOfficial/Banka-app?branch=develop)

Banka is a light-weight core banking application that powers banking operations like account creation, customer deposit and withdrawals. This app is meant to support a single bank, where users can signup and create bank accounts online, but must visit the branch to withdraw or deposit money

### Frontend - https://femiofficial.github.io/Banka-app/UI

### Rest Api - https://banka-app-api.herokuapp.com/api/v1/

## Features of UI Templates

- No authentication on any form in the ui template (Click submit button on every form to gain access to the dashboards)

- Landing Page : Gives an overview of what Banka is all about

- Login Pages (Users, Staffs and Admin)

- Registration Page (Users)

- Users Dashboard, gives access to:
  - Create a bank account.
  - View bank account profile (dashboard).
  - View account transaction history.
  
 - Staff Dashboard, gives access to:
    - Credit a user account.
    - Debit a user account.
    - View list of all bank accounts.
    - View a specific bank account record/statement.
    - Delete a specific account.
  
  - Admin Dashboard, gives access to:
    - Activate or deactivate user account.
    - Create admin or staff user account
    - View list of all bank accounts.
    - View a specific bank account record/statement.
    - Delete a specific account.
  

## Completed Endpoints on the Api

#### POST /auth/signup
```
Response Format

{
'status'​:​ ​Integer​ ,    ​ 
'data'​: {
  'token':​ '45erkjherht45495783'
  'id'​:​ Integer​,// id of newly created user
  'firstName'​: String,
  'lastName':​ String​,
  'email': String​,
  }
} 

```
#### POST /auth/signin
```
Response Format

{
'status'​:​ ​Integer​ ,    ​ 
'data'​: {
  'token':​ '45erkjherht45495783'
  'id'​:​ Integer​,// id of newly created user
  'firstName'​: String,
  'lastName':​ String​,
  'email': String​,
  }
} 

```
#### POST /accounts
```
Response Format

{
'status'​:​ ​Integer​ ,    ​ 
'data'​: {
  'accountNumber':​ Number
  'firstName'​: String,
  'lastName':​ String​,
  'email': String​,
  'type': String​,
  'openingBalance': Float,


  }
} 

```
#### PATCH /accounts/<account-number>
```
Response Format
{
'status'​:​ ​Integer​ ,    ​ 
'data'​: {
  'accountNumber':​ Number
  'status'​: String,
  }
} 

```
#### DELETE /accounts/<account-number>
```
Response Format

{
'status'​:​ ​Integer​ ,    ​ 
'message': 'Account successfully deleted'
} 

```
#### POST /transactions/<account-number>/debit
```
Response Format
{
'status'​:​ ​Integer​ ,    ​ 
'data'​: {
  'transactionId':​ Number
  'accountNumber'​: String,
  'amount'​: Float,
  'cashier'​: Integer,
  'transactionType'​: String,
  'accountBalance'​: String,
  }
} 

```

#### POST /transactions/<account-number>/credit
```
Response Format
{
'status'​:​ ​Integer​ ,    ​ 
'data'​: {
  'transactionId':​ Number
  'accountNumber'​: String,
  'amount'​: Float,
  'cashier'​: Integer,
  'transactionType'​: String,
  'accountBalance'​: String,
  }
} 

```