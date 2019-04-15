import getdate from '../utils/dateFormat';
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
    * @memberof AccountService
    * @returns {Boolean} accountExist
    *
    */

  static async makeTransaction(transaction) {
    const transactionsLength = Transactions.length;

    const lastId = Transactions[transactionsLength - 1].id;

    transaction.id = lastId + 1;

    transaction.createdOn = await getdate();

    Transactions.push(transaction);

    return transaction;
  }
}

export default TransactionServices;
