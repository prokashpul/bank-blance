// deposit button click and add deposit 

document.getElementById('deposit-btn').addEventListener('click', function () {
    // get user input
    const deposit = document.getElementById('deposit');
    const depositAmount = parseFloat(deposit.value);
    // add balance in deposit-blanch

    const depositBlanch = document.getElementById('deposit-blance');
    const currentBalance = parseFloat(depositBlanch.innerHTML);
    depositBlanch.innerHTML = currentBalance + depositAmount;
    deposit.value = '';
    // total blanch increase 

    const totalBlanch = document.getElementById('total-blanch');
    const previousTotal = parseFloat(totalBlanch.innerHTML);
    console.log(previousTotal)
    totalBlanch.innerHTML = previousTotal + depositAmount;

});

// withdraw-btn click event handel

document.getElementById('withdraw-btn').addEventListener('click', function () {
    // withdraw input value
    const withdrawInput = document.getElementById('withdrawinput');
    const withdrawInputBalance = parseFloat(withdrawInput.value);
    //withdraw  balance display
    const withdrawBalance = document.getElementById('withdraw-balance');
    const previousWithdraw = parseFloat(withdrawBalance.innerHTML);
    withdrawBalance.innerHTML = previousWithdraw + withdrawInputBalance;

    // total balance
    const totalBlanch = document.getElementById('total-blanch');
    const previousTotal = parseFloat(totalBlanch.innerHTML);

    totalBlanch.innerHTML = previousTotal - withdrawInputBalance;
    withdrawInput.value = '';


})