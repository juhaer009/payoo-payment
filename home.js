const validPin = 1234;
document.getElementById('add-money-btn').
    addEventListener('click', function(){
        const bank = document.getElementById('bank').value;
        const accountNumber = document.getElementById('account-number').value;
        const addAmmount = parseInt(document.getElementById('add-ammount').value);
        const pinNumber = parseInt(document.getElementById('add-pin').value);
        // console.log(bank, accountNumber, addAmmount, pinNumber);
        const availableBalance = parseInt(document.getElementById('available-balance').innerText);
        // console.log(availableBalance);
        if (accountNumber.length < 11){
            alert('Please provide valid Account Number');
            return;
        }

        if(pinNumber !== validPin){
            alert('Please provide valid Pin Number');
            return;
        }

        const updatedBalance = addAmmount + availableBalance;
        document.getElementById('available-balance').innerText = updatedBalance;
    });

    // toggling feature

    document.getElementById('add-btn').
        addEventListener('click', function(){
            document.getElementById('cash-out-container').style.display = 'none';
            document.getElementById('add-money-container').style.display = 'block';
        });

    document.getElementById('cash-out-btn').
        addEventListener('click', function(){
            document.getElementById('add-money-container').style.display = 'none';
            document.getElementById('cash-out-container').style.display = 'block';
            
        });