import validacoes from "./error-module.js";

export default function calculaIdade() {}

function handleClick() {
  // Input
  const inputYear = document.querySelector("#year");
  const inputMonth = document.querySelector("#month");
  const inputDay = document.querySelector("#day");

  // Data
  const data = new Date();
  const anoAtual = data.getFullYear();
  const mesAtual = data.getMonth() + 1;
  const diaAtual = data.getDate();

  // Calculos prontos
  let anos = anoAtual - inputYear.value;
  let meses = mesAtual - inputMonth.value;
  let dias = diaAtual - inputDay.value;

  // quantos dias tem no mês digitado pelo usuario
  const diaMes = new Date(inputYear.value, inputMonth.value, 0).getDate();

  // Texto para alterar valor
  const textDay = document.querySelector(".date-day");
  const textMonth = document.querySelector(".date-month");
  const textYear = document.querySelector(".date-year");

  const inputs = [inputDay, inputMonth, inputYear];
  const texts = [textDay, textMonth, textYear];

    function verificaAno() {
      if (inputYear.value > anoAtual) {
        validacoes.addErro(inputYear, "Must be in the past");
      } else {
        validacoes.removeErro(inputYear);
        textYear.innerText = String(anos);
      }
    }

    function verificaDia() {
      // Se dia digitado for maior que dia total do mês ou for menor que 0, erro é executado
      if (inputDay.value <= diaMes && inputDay.value > 0) {
        if (dias < 0) {
          if (inputMonth.value === mesAtual + 1) {
            meses -= 1;
          }
          dias = diaMes - inputDay.value + diaAtual;
          textDay.innerText = String(dias);
          textMonth.innerText = String(meses);
        }
      } else if (inputDay.value === "") {
        validacoes.addErro(inputDay, "The field is required");
      } else if (inputDay.value > diaMes) {
        if (inputMonth.value < 12 && inputYear.value < anoAtual) {
          validacoes.validDate(inputs, texts, "Must be a valid date");
        } else {
          validacoes.addErro(inputDay, "Must be a valid day");
        }
      } else {
        validacoes.removeErro(inputDay);
        validacoes.removeValidDate(inputs);
        textDay.innerText = String(dias);
      }
    }

    function verificaAnoMes() {
      if (inputYear.value > anoAtual) {
        validacoes.addErro(inputYear, "Must be in the past");
      } else {
        anos -= 1;
        textYear.innerText = String(anos);
        validacoes.removeErro(inputYear);
      }
    }

    function verificaMes() {
      if (
        inputMonth.value <= 12 &&
        inputMonth.value > 0 &&
        inputMonth.value !== ""
      ) {
        validacoes.removeErro(inputMonth);
        if (meses < 0) {
          verificaAnoMes();
          meses += 12;
          textMonth.innerText = String(meses);
        } else {
          textMonth.innerText = String(meses);
        }
      }
    }
    verificaAno();
    verificaMes();
    verificaDia();
  }
  

const button = document.querySelector(".button");
button.addEventListener("click", handleClick);
