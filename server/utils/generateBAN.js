/* eslint-disable no-plusplus */
import Accounts from './accounts.data';

const generateBAN = (length) => {
  let text = '';
  const numbers = '0123456789';

  for (let i = 0; i < length; i++) {
    text += numbers.charAt(Math.floor(Math.random() * numbers.length));
  }

  const banExists = Accounts.find(account => account.accountNumber === parseInt(text, 10));
  if (banExists) {
    generateBAN(length);
  }
  return text;
};
export default generateBAN;
