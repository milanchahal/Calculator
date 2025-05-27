document.addEventListener('DOMContentLoaded', function () {
  // Listen for submit button
  const form = document.getElementById('loan-form');
  form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission and page refresh

    // Hide Results
    document.getElementById('results').style.display = 'none';
    // Show Loader
    document.getElementById('loading').style.display = 'block';

    // Call calculateResults after a 2-second delay
    setTimeout(calculateResults, 2000);
  });

  // Calculate Results function
  function calculateResults() {
    console.log('calculating...');
    // UI elements
    const ELamount = document.getElementById('amount');
    const ELinterest = document.getElementById('interest');
    const ELyears = document.getElementById('years');
    const ELMonthly_payment = document.getElementById('monthly-payment');
    const ELtotal_payment = document.getElementById('total-payment');
    const ELtotal_interest = document.getElementById('total-interest');

    // Get input values and validate
    const principal = parseFloat(ELamount.value);
    const interestRate = parseFloat(ELinterest.value);
    const years = parseFloat(ELyears.value);

    // Check for valid inputs
    if (isNaN(principal) || isNaN(interestRate) || isNaN(years) || principal <= 0 || interestRate <= 0 || years <= 0) {
      showError('Please enter valid numbers for all fields');
      return;
    }

    // Calculate monthly interest and total payments
    const calculatedInterest = interestRate / 100 / 12;
    const calculatedPayment = years * 12;

    // Calculate monthly payment using the loan amortization formula
    const x = Math.pow(1 + calculatedInterest, calculatedPayment);
    const monthly = (principal * x * calculatedInterest) / (x - 1);

    if (isFinite(monthly)) {
      // Update UI with results
      ELMonthly_payment.value = monthly.toFixed(2);
      ELtotal_payment.value = (monthly * calculatedPayment).toFixed(2);
      ELtotal_interest.value = (monthly * calculatedPayment - principal).toFixed(2);

      // Show Results
      document.getElementById('results').style.display = 'block';
      // Hide Loader
      document.getElementById('loading').style.display = 'none';
    } else {
      console.log('Invalid calculation result');
      showError('Please check your numbers');
    }
  }

  // Show error message
  function showError(error) {
    // Hide Results and Loader
    document.getElementById('results').style.display = 'none';
    document.getElementById('loading').style.display = 'none';

    // Create a div
    const errorDiv = document.createElement('div');
    // Get elements
    const ELcard = document.querySelector('.card');
    const ELheading = document.querySelector('.heading');
    // Add class
    errorDiv.className = 'alert alert-danger';
    // Create text node and append to div
    errorDiv.appendChild(document.createTextNode(error));
    // Insert error above heading
    ELcard.insertBefore(errorDiv, ELheading);
    // Clear error after 3 seconds
    setTimeout(clearError, 3000);
  }

  // Clear error message
  function clearError() {
    const errorAlert = document.querySelector('.alert');
    if (errorAlert) {
      errorAlert.remove();
    }
  }
// });// //Listen for submit button
// //document.getElementById('loan-form').addEventListener('submit',calculateResults);;
// //Listen for submit button
// const form = document.getElementById('loan-form');
// //form.addEventListener('submit',calculateResults);//Without loader
// form.addEventListener('submit',function(e){
// e.preventDefault();
// //Hide Results
// document.getElementById('results').style.display='none';
// //Show Loader
// document.getElementById('loading').style.display='block';
// setTimeout(calculateResults,2000);

// });
// //Calculate Results function
// function calculateResults(e){
// console.log('calculating...');
// //UI elements
// const ELamount = document.getElementById('amount');
// const ELinterest = document.getElementById('interest');
// const ELyears = document.getElementById('years');
// const ELMonthly_payment = document.getElementById('monthly-payment');
// const ELtotal_payment = document.getElementById('total-payment');
// const ELtotal_interest = document.getElementById('total-interest');
// const principal = parseFloat(ELamount.value);
// const calculatedInterest = parseFloat(ELinterest.value) /100 /12;
// const calculatedPayment = parseFloat(ELyears.value )*12;
// //Create monthly payment
// const x = Math.pow(1 + calculatedInterest, calculatedPayment);
// const monthly = (principal * x * calculatedInterest) / (x - 1);
// console.log(monthly);
// if(isFinite(monthly)){//check whether it is finite or not
// ELMonthly_payment.value = monthly.toFixed(2);
// ELtotal_payment.value = (monthly*calculatedPayment).toFixed(2);
// ELtotal_interest.value = ((monthly*calculatedPayment)-principal).toFixed(2);//fix to 2 deciman places
// //Show Results
// document.getElementById('results').style.display='block';
// //Hide Loader
// document.getElementById('loading').style.display='none';
// }else{
// console.log("Please check your numbers");
// //Display an error
// showError('Please check your numbers');
// }
// e.preventDefault();
// }
// function showError(error){
// //Show Results
// document.getElementById('results').style.display='none';
// //Hide Loader
// document.getElementById('loading').style.display='none';
// //--------------------------------------------------------------------
// //Create a div
// const errorDiv = document.createElement('div');
// //get elements
// const ELcard = document.querySelector ('.card');
// const ELheading = document.querySelector('.heading');
// //Add class
// errorDiv.className = 'alert alert-danger';
// //create text node and append to dic
// errorDiv.appendChild(document.createTextNode(error));
// //Insert error above heading
// ELcard.insertBefore(errorDiv, ELheading);
// //clear error after 3 seconds
// setTimeout(clearError, 3000);
// }
// function clearError(){
// document.querySelector('.alert').remove();
// }
