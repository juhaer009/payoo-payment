document.getElementById('login').
    addEventListener('click', function (event){
        const mobileNumber = 1896217218;
        const pinNumber = 1234;

        const mobileNumberValue = parseInt(document.getElementById('mobile-number').value);
        const pinNumberValue = parseInt(document.getElementById('pin-number').value); 

        // console.log(mobileNumberValue, pinNumberValue);

        if (mobileNumber===mobileNumberValue && pinNumber===pinNumberValue){
            window.location.href = './home.html';
        }
        else {
            alert('Invalid Credential');
        }
    });