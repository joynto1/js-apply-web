document.getElementById('deposite-button').addEventListener('click', function () {
    const depositeIput = document.getElementById('deposite-input');
    const depositeText = depositeIput.value;
    const newDepositAmount = parseFloat(depositeText);
    const depositeTotal = document.getElementById('deposite-add');
    const previousdeposite = depositeTotal.innerText;
    const previousdepositeAmount = parseFloat(previousdeposite);
    const NewCurrentDeposite = previousdepositeAmount + newDepositAmount;
    depositeTotal.innerText = NewCurrentDeposite;



    const Balanceadd = document.getElementById('Balance-add');
    const balanceTotal = Balanceadd.innerText;
    const previousbalance = parseFloat(balanceTotal);
    const TotalBalanceupdate = previousbalance + NewCurrentDeposite;
    Balanceadd.innerText = TotalBalanceupdate;


    depositeIput.value = '';
})
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawText = withdrawInput.value;
    const newWithdrawTotal = parseFloat(withdrawText);
    const withdrAmount = document.getElementById('Withdraw-add');
    const withdrawtext = withdrAmount.innerText;
    const previouswithdraw = parseFloat(withdrawtext);
    const CurrentWithdrawAmount = previouswithdraw + newWithdrawTotal;
    withdrAmount.innerText = CurrentWithdrawAmount;


    const Balanceadd = document.getElementById('Balance-add');
    const balanceTotal = Balanceadd.innerText;
    const previousbalance = parseFloat(balanceTotal);
    const TotalBalanceupdate = previousbalance - CurrentWithdrawAmount;
    Balanceadd.innerText = TotalBalanceupdate;



    withdrawInput.value = '';
})