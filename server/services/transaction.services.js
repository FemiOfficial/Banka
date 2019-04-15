import getdate from '../utils/dateFormat';
import Accounts from '../utils/db/accounts.data';
import Transactions from '../utils/db/transactions.data';

/**
 *
 * @class TransactionServices
 *
 */
class TransactionServices {
  /**
   *
    * @static
    * @memberof TransactionServices
    * @returns {Boolean} debitTransaction
    *
    */

  static async makeDebitTransaction(id, transaction) {
    const transactionsLength = Transactions.length;

    const lastId = Transactions[transactionsLength - 1].id;

    transaction.id = lastId + 1;

    transaction.type = 'debit';

    transaction.accountNumber = id;

    transaction.createdOn = await getdate();

    const account = Accounts.find(acc => parseInt(acc.accountNumber, 10) === parseInt(id, 10));

    if (!account) {
      return false;
    }

    transaction.oldBalance = account.balance;

    account.balance -= transaction.amount;

    transaction.newBalance = account.balance;

    Transactions.push(transaction);

    return {
      transactionId: transaction.id,
      accountNumber: transaction.accountNumber,
      amount: transaction.amount,
      cashier: transaction.cashier,
      transactionType: 'debit',
      accountBalance: transaction.newBalance,
    };
  }
}

export default TransactionServices;
