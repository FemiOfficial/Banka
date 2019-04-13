import UserServices from './user.services';
import Accounts from '../utils/accounts.data';
import generateBAN from '../utils/generateBAN';
import getdate from '../utils/dateFormat';
/**
 *
 * @class AccountService
 *
 */

class AccountService {
  /**
   *
    * @static
    * @memberof AccountService
    * @returns {Object} createdAccount
    *
    */

  static async createAccount(id, accountDetails) {
    try {
      const loggedInUser = await UserServices.getUser(id);
      if (!loggedInUser) {
        return false;
      }
      const accountNumber = await generateBAN(8);

      const newAccount = {
        owner: id,
        createdOn: await getdate(),
        type: accountDetails.type,
        status: 'Active',
        balance: accountDetails.openingBalance,
        accountNumber,
      };

      Accounts.push(newAccount);

      const response = {
        accountNumber,
        firstName: loggedInUser.firstName,
        lastName: loggedInUser.lastName,
        email: loggedInUser.email,
        type: newAccount.type,
        openingBalance: newAccount.balance,
      };

      return response;
    } catch (e) {
      const err = { error: 'An error while trying create account user' };
      throw err;
    }
  }
}

export default AccountService;
