let calculateBtn = document.querySelector('.container .calculate-btn');
let loanAmount = document.querySelector('.container  table .loan-amount');
let monthlyEmi = document.querySelector('.container  table .monthly-emi');
let interestPayable = document.querySelector('.container  table .interest-payable');
let totalPayable = document.querySelector('.container  table .total-payable');

let computeResults =()=>{
 let loan_amount_input = document.querySelector('.container .loan-amount-input').value;
 let loan_term_input = document.querySelector('.container .loan-term-input').value;
 let interest_rate_input = document.querySelector('.container .interest-rate-input').value;
 
const principal = parseFloat(loan_amount_input);
const calculateinterest = parseFloat(interest_rate_input) / 100 / 12;
const calculateyear = parseFloat(loan_term_input) * 12;

const x = Math.pow(1 + calculateinterest, calculateyear);
const monthly = (principal * x * calculateinterest) / (x - 1);
const monthlyPayment = monthly.toFixed();

const totalInterest = (monthly * calculateyear - principal).toFixed();
const totalPayment = (monthly * calculateyear).toFixed();

monthlyEmi.innerHTML = '₹' + monthlyPayment;
interestPayable.innerHTML = '₹' + totalInterest;
totalPayable.innerHTML = '₹' + totalPayment;
loanAmount.innerHTML = '₹' + loan_amount_input;
} 

computeResults();

calculateBtn.addEventListener('click',computeResults)
