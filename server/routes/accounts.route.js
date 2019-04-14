/* eslint-disable import/named */
import express from 'express';
import AccountControllers from '../controllers/account.controllers';
import Authentication from '../middlewares/authentication';
import trimInput from '../middlewares/validations/trimInputs';
import CreateAccountValidation from '../middlewares/validations/account.validations';

const router = express.Router();

router.post('/accounts', CreateAccountValidation.checkCreateBankAccountBody, trimInput, Authentication.verifyToken,
  AccountControllers.createAccount);


export default router;
