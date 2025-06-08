function isCardNumberValid(number) {
    return number === '1234123412341234';
  }
  
  function displayError(msg) {
    document.querySelector('.errorMsg').innerText = msg;
  }
  
  function submitHandler(event) {
    event.preventDefault();
    let errorMsg = '';
    const cardNum = this.cardNumber.value;
    const expMonth = parseInt(this.expMonth.value, 10);
    const expYear = parseInt(this.expYear.value, 10);
  
    displayError('');
  
    if (isNaN(cardNum)) {
      errorMsg += 'Card number is not a valid number.\n';
    } else if (!isCardNumberValid(cardNum)) {
      errorMsg += 'Card number is not valid.\n';
    }
  
    const now = new Date();
    const enteredDate = new Date(expYear, expMonth - 1);
    if (enteredDate <= now) {
      errorMsg += 'Expiration date must be in the future.\n';
    }

  //check date
    const currentDate = new Date()
    if ('20' + this.expYear.value < currentDate.getFullYear()) {
    errorMsg += 'Card is expired\n'
    } else if (this.expMonth.value < currentDate.getMonth()) {
    errorMsg += 'Card is expired\n'
    }
    
    if (errorMsg) {
      displayError(errorMsg);
      return false;
    }
  
    alert('Form submitted successfully!');
    return true;
  }
  
  document.querySelector('#credit-card').addEventListener('submit', submitHandler);
  