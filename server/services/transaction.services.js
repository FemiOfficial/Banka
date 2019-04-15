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

    transaction.id = parseInt(lastId + 1, 10);

    transaction.type = 'debit';

    transaction.accountNumber = parseInt(id, 10);

    transaction.createdOn = await getdate();

    const account = Accounts.find(acc => acc.accountNumber === parseInt(id, 10));

    if (!account) {
      return false;
    }

    transaction.oldBalance = parseFloat(account.balance, 10);

    account.balance -= transaction.amount;

    transaction.newBalance = parseFloat(account.balance, 10);

    Transactions.push(transaction);

    return {
      transactionId: transaction.id,
      accountNumber: transaction.accountNumber,
      amount: parseFloat(transaction.amount, 10),
      cashier: parseInt(transaction.cashier, 10),
      transactionType: 'debit',
      accountBalance: transaction.newBalance,
    };
  }
}

export default TransactionServices;
