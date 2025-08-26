const validPin = 1234;
const agentPin = 5678;

// function for getting value number
function getValueNumber(id){
    return parseInt(document.getElementById(id).value);
}
// function for getting value
function getValue(id){
    return document.getElementById(id).value;
}

// function to fetch innertext
function getInnerText(id){
    return parseInt(document.getElementById(id).innerText);
}
// function to set innertext
function setInnerText(value){
    document.getElementById('available-balance').innerText = value;
}

// function for toggling feature
function handleToggle(id){
    const forms = document.getElementsByClassName('form');
        for(const form of forms){
            form.style.display='none';
        }
        document.getElementById(id).style.display='block';
}

// funtion for focusing on button
function focusButton(id){
    const formBtns = document.getElementsByClassName('form-btn');
            for(const btn of formBtns){
                btn.classList.remove('border-[#0874f2]', 'bg-[#0874f20d]', 'text-[#0874f2]')
            }
            document.getElementById(id).classList.remove('border-gray-300');
            document.getElementById(id).classList.add('border-[#0874f2]', 'bg-[#0874f20d]', 'text-[#0874f2]');
}

// add money feature
document.getElementById('add-money-btn').
    addEventListener('click', function(){
        const bank = getValue('bank');
        const accountNumber = getValue('account-number');
        const addAmmount = getValueNumber('add-ammount');
        const pinNumber = getValueNumber('add-pin');
        // console.log(bank, accountNumber, addAmmount, pinNumber);
        const availableBalance = getInnerText('available-balance');
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
        setInnerText(updatedBalance);
    });

    // cash out feature
    document.getElementById('withdraw-btn').
        addEventListener('click',function(){
            const agent = getValue('agent');
            const ammount = getValueNumber('withdraw-money');
            const pinNumber = getValueNumber('agent-pin');
            // console.log(agent,ammount,pinNumber);
            const availableBalance = getInnerText('available-balance');
            if (agent.length < 11){
                alert('Please provide valid Agent Number');
                return;
            }

            if(pinNumber !== agentPin){
                alert('Please provide valid Pin Number');
                return;
            }

            const updatedBalance = availableBalance - ammount;
            setInnerText(updatedBalance);

        });


    // toggling feature

    document.getElementById('add-btn').
        addEventListener('click', function(){
            handleToggle("add-money-container");
            focusButton('add-btn');
        });

    document.getElementById('cash-out-btn').
        addEventListener('click', function(){
            handleToggle('cash-out-container');
            focusButton('cash-out-btn');
        });