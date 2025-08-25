const validPin = 1234;
const agentPin = 5678;
// add money feature
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

    // cash out feature
    document.getElementById('withdraw-btn').
        addEventListener('click',function(){
            const agent = document.getElementById('agent').value;
            const ammount = parseInt(document.getElementById('withdraw-money').value);
            const pinNumber = parseInt(document.getElementById('agent-pin').value);
            // console.log(agent,ammount,pinNumber);
            const availableBalance = parseInt(document.getElementById('available-balance').innerText);
            if (agent.length < 11){
                alert('Please provide valid Agent Number');
                return;
            }

            if(pinNumber !== agentPin){
                alert('Please provide valid Pin Number');
                return;
            }

            const updatedBalance = availableBalance - ammount;
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