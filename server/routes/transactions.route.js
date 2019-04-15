import express from 'express';
import TransactionsControllers from '../controllers/transactions.controllers';
import Authentication from '../middlewares/authentication';
import trimInput from '../middlewares/validations/trimInputs';
import TransactionsValidations from '../middlewares/validations/transactions.validations';

const router = express.Router();

router.post('/:accountNumber/debit', Authentication.verifyToken, trimInput, TransactionsValidations.checkTransactionsBody,
  TransactionsControllers.debitAccount);

export default router;
