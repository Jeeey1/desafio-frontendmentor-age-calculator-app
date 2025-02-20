const data = new Date();

const diaAtual = data.getDate();
const mesAtual = data.getMonth() + 1;
const anoAtual = data.getFullYear();
const buttonCall = document.querySelector(".ref-button button");

const inputDay = document.querySelector("#day");
const inputMonth = document.querySelector("#month");
const inputYear = document.querySelector("#year");

const textYear = document.querySelector('.date-year');
const textMonth = document.querySelector('.date-month');
const textDay = document.querySelector('.date-day');

const ageCalculation = {
  handleEvent(){
    year();
    month();
    day();
  }
}

function year() {
  const yearValue = inputYear.value;
  textYear.innerText = String(anoAtual - yearValue);
}

function month(){
  const monthValue = inputMonth.value;
  textMonth.innerText = String(12 - monthValue);
}

function day(){
  const dayValue = inputDay.value;

  textDay.innerText = String(diaAtual - dayValue)
}

buttonCall.addEventListener("click", ageCalculation);