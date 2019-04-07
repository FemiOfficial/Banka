let statementDate = document.getElementById("statement_date");

const getDate = () => {
    let date = Date();
    return date;
}

statementDate.innerHTML = `Date: ${getDate()}`;