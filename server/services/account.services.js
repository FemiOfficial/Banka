import UserServices from './user.services';
import Users from '../utils/users.data';
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
    * @returns {Boolean} accountExist
    *
    */
  static async getAccount(id) {
    try {
      const accountExist = await Accounts.find(account => account.owner === id) ? true : false;
      return accountExist;
    } catch (e) {
      const err = { error: 'An error while trying get account' };
      throw err;
    }
  }
  /**
   *
    * @static
    * @memberof AccountService
    * @returns {Object} createdAccount
    *
    */

  static async createAccount(accountDetails) {
    try {
      const loggedInUser = await UserServices.getUser(accountDetails.email);
      if (!loggedInUser) {
        return false;
      }
      const accountExist = await this.getAccount(loggedInUser.id);
      if (accountExist) {
        return false;
      }
      const accountNumber = await generateBAN(8);

      const newAccount = {
        owner: loggedInUser.id,
        createdOn: await getdate(),
        type: accountDetails.type,
        status: 'Active',
        balance: accountDetails.balance,
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
