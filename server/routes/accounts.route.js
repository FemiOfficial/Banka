/* eslint-disable import/named */
import express from 'express';
import AccountControllers from '../controllers/account.controllers';
import { verifyToken, isClient } from '../middlewares/authentication';
import trimInput from '../middlewares/validations/trimInputs';
import CreateAccountValidation from '../middlewares/validations/create.account';

const router = express.Router();

router.post('/accounts', CreateAccountValidation.checkCreateBankAccountBody, trimInput, verifyToken, isClient, AccountControllers.createAccount);


export default router;
