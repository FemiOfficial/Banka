import express from 'express';
import TransactionsControllers from '../controllers/transactions.controllers';
import Authentication from '../middlewares/authentication';
import trimInput from '../middlewares/validations/trimInputs';
import AccountValidation from '../middlewares/validations/account.validations';

const router = express.Router();

router.post('/:accountNumber/debit', Authentication.verifyToken, trimInput, TransactionsControllers.debitAccount);

export default router;
