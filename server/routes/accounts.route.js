/* eslint-disable import/named */
import express from 'express';
import AccountControllers from '../controllers/account.controllers';
import Authentication from '../middlewares/authentication';
import trimInput from '../middlewares/validations/trimInputs';
import AccountValidation from '../middlewares/validations/account.validations';

const router = express.Router();

router.post('/', AccountValidation.checkCreateBankAccountBody, trimInput, Authentication.verifyToken,
  AccountControllers.createAccount);

router.patch('/:accountNumber', AccountValidation.checkPatchAccountBody, trimInput, Authentication.verifyToken,
  AccountControllers.patchAccount);

router.delete('/:accountNumber', Authentication.verifyToken, AccountControllers.deleteAccount);

export default router;
