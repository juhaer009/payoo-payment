document.getElementById('add-money-btn').
    addEventListener('click', function(){
        const bank = document.getElementById('bank').value;
        const accountNumber = document.getElementById('account-number').value;
        const addAmmount = parseInt(document.getElementById('add-ammount').value);
        const pinNumber = document.getElementById('add pin').value;
        // console.log(bank, accountNumber, addAmmount, pinNumber);
        const availableBalance = parseInt(document.getElementById('available-balance').innerText);
        // console.log(availableBalance);
        const updatedBalance = addAmmount + availableBalance;
        document.getElementById('available-balance').innerText = updatedBalance;
    });