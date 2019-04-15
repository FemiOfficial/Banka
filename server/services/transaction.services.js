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

  static async makeDebitTransaction(transaction) {
    const transactionsLength = Transactions.length;

    const lastId = Transactions[transactionsLength - 1].id;

    transaction.id = lastId + 1;

    transaction.createdOn = await getdate();

    const account = Accounts.find(acc => acc.accountNumber === transaction.accountNumber);

    if (!account) {
      return false;
    }

    transaction.oldBalance = account.balance;

    account.balance  -= transaction.amount;

    transaction.newBalance = account.balance;

    Transactions.push(transaction);

    return transaction;
  }
}

export default TransactionServices;
