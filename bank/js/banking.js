// input function
function inputField(inputId) {
    const input = document.getElementById(inputId);
    const inputValue = parseFloat(input.value);
    input.value = '';
    return inputValue;
}

//deposit and withdraw 
function singleBalance(balance, amount) {
    const Balance = document.getElementById(balance);
    const BalanceInt = parseFloat(Balance.innerText);
    Balance.innerText = BalanceInt + amount;
}

//main balance 
function totalBalance(tBalance, amount, isTrue) {
    const AmountText = document.getElementById(tBalance);
    const totalAmount = parseFloat(AmountText.innerText);
    if (isTrue == true) {
        AmountText.innerHTML = totalAmount + amount;
    } else {
        if (totalAmount >= amount) {
            AmountText.innerHTML = totalAmount - amount;
        } else {
            alert('balance is big');
        }
    }
}


document.getElementById('deposit-btn').addEventListener('click', function () {
    // deposit input filed 
    const depositBalance = inputField('deposit')
    // deposit balance 
    if (depositBalance > 0) {
        singleBalance('deposit-blance', depositBalance);
        // empty input filed 
        totalBalance('total-blanch', depositBalance, true);
    } else {
        alert("You're input wrong")
    }
});

// withdraw balance 
document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawInputNumber = inputField('withdrawinput')
    // withdraw balance show display

    if (withdrawInputNumber > 0) {
        singleBalance('withdraw-balance', withdrawInputNumber);

        // main balance reduce 
        totalBalance('total-blanch', withdrawInputNumber, false);
        // empty input value
    } else {
        alert("You're input wrong")
    }

});