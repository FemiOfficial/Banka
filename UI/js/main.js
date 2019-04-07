let mainNav = document.getElementById("menu"),
    navBarToggle = document.getElementById("navbar-toggle");

navBarToggle.addEventListener("click", function() {
mainNav.classList.toggle("active");
});


const debitAccount = () => {
    let accountNumber = document.getElementById('acct-number').value,
        accountName = document.getElementById('acct-name').value,
        amount = document.getElementById('amount').value;
    
    alert(`${amount} was successfully debited from Account Name: ${accountName} , Account Number: ${accountNumber}`);
}

const creditAccount = () => {
    let accountNumber = document.getElementById('acct-number').value,
        accountName = document.getElementById('acct-name').value,
        amount = document.getElementById('amount').value;
    
    alert(`${amount} was successfully credited to Account Name: ${accountName} , Account Number: ${accountNumber}`);
}

let admin_bank_records = document.getElementById("admin-bank-records"),
       admin_user_manage = document.getElementById("admin-user-management"),
       user_manage_nav = document.getElementById("user-manage"),
        bank_acct_nav = document.getElementById("bank-acct");
        

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



