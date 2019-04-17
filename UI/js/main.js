const mainNav = document.getElementById('menu');
const navBarToggle = document.getElementById('navbar-toggle');

navBarToggle.addEventListener('click', () => {
  mainNav.classList.toggle('active');
});


const debitAccount = () => {
  const accountNumber = document.getElementById('acct-number').value;
  const accountName = document.getElementById('acct-name').value;
  const amount = document.getElementById('amount').value;

  alert(`${amount} was successfully debited from Account Name: ${accountName} , Account Number: ${accountNumber}`);
};

const creditAccount = () => {
  const accountNumber = document.getElementById('acct-number').value;
  const accountName = document.getElementById('acct-name').value;
  const amount = document.getElementById('amount').value;

  alert(`${amount} was successfully credited to Account Name: ${accountName} , Account Number: ${accountNumber}`);
};

const admin_bank_records = document.getElementById('admin-bank-records');
const admin_user_manage = document.getElementById('admin-user-management');
const user_manage_nav = document.getElementById('user-manage');
const bank_acct_nav = document.getElementById('bank-acct');


bank_acct_nav.addEventListener('click', () => {
  admin_bank_records.style.display = 'block';
  admin_user_manage.style.display = 'none';
  user_manage_nav.classList.remove('active');
  bank_acct_nav.classList.add('active');
});

user_manage_nav.addEventListener('click', () => {
  admin_bank_records.style.display = 'none';
  admin_user_manage.style.display = 'block';
  user_manage_nav.classList.add('active');
  bank_acct_nav.classList.remove('active');
});



