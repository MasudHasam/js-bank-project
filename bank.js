////DEPOSITE AREA CALCULATION////
// connect to the deposit button
document.getElementById("DepositBtn").addEventListener("click", function () {
    //deposit balance calculation.
    // get the input value
    const inputBalanceDepoOld = document.getElementById("DepositInput");//get the value by getElement by id and make it number by parsflot
    const inputBalanceDepoPflot = parseFloat(inputBalanceDepoOld.value);
    const inputBalanceDepo = Math.abs(inputBalanceDepoPflot);
    inputBalanceDepoOld.value = "";

    //check the input is valid or not.
    if (isNaN(inputBalanceDepo)) {
        alert("Please provide a valid number!")
        return;
    }
    const currentBalanceDepoOld = document.getElementById("currentDepoBalance");
    const currentBalanceDepo = parseFloat(currentBalanceDepoOld.innerText);
    const updateBalanceDepo = currentBalanceDepo + inputBalanceDepo;
    currentBalanceDepoOld.innerText = updateBalanceDepo;

    //total balance calculation.
    const mainBalanceDepoOld = document.getElementById("mainBalance");
    const mainBalanceDepo = parseFloat(mainBalanceDepoOld.innerText);
    const updateMainBalanceDepo = mainBalanceDepo + inputBalanceDepo;
    mainBalanceDepoOld.innerText = updateMainBalanceDepo;
});




////WITHDROW AREA CALCULATION////
//connect to the withdrow are.
document.getElementById("WithdrowBtn").addEventListener("click", function () {
    //withdrow balance claculation.
    //get the input value.
    const inputBalanceWithdrowOld = document.getElementById("WithdrowInput");
    const inputBalanceWithdrowPflot = parseFloat(inputBalanceWithdrowOld.value);
    const inputBalanceWithdrow = Math.abs(inputBalanceWithdrowPflot);
    inputBalanceWithdrowOld.value = "";

    //check the input is valid or not.
    if (isNaN(inputBalanceWithdrow)) {
        alert("Please provide a valid number")
        return;
    }
    const currentBalanceWithdrowOld = document.getElementById("currentWithdrowBalance");
    const currentBalanceWithdrow = parseFloat(currentBalanceWithdrowOld.innerText);
    const updateBalanceWithdrow = currentBalanceWithdrow + inputBalanceWithdrow;
    currentBalanceWithdrowOld.innerText = updateBalanceWithdrow;

    //main balance calculation after withdrow.
    const mainBalanceWithdrowOld = document.getElementById("mainBalance");
    const mainBalanceWithdrow = parseFloat(mainBalanceWithdrowOld.innerText);
    const updateMainBalanceWithdrow = mainBalanceWithdrow - inputBalanceWithdrow;
    mainBalanceWithdrowOld.innerText = updateMainBalanceWithdrow;
})