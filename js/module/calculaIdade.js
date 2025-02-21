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

  // Texto para alterar valor
  const textDay = document.querySelector(".date-day");
  const textMonth = document.querySelector(".date-month");
  const textYear = document.querySelector(".date-year");

  function verificaAno(){
    if(inputYear.value > anoAtual){
      console.log('erro ano')
    } else {
      textYear.innerText = String(anos);
    }
  }

  function verificaAnoMes(){
    if(inputYear.value > anoAtual){
      console.log('erro ano')
    } else {
      anos -= 1;
      textYear.innerText = String(anos);
    }
  }


  function verificaDia() {
    const diaMes = new Date(inputYear.value, inputMonth.value, 0).getDate();

    // Se dia digitado for maior que dia total do mês ou for menor que 0, erro é executado
    if (inputDay.value <= diaMes && inputDay.value > 0) {
      if (dias < 0) {
        let novoMes = new Date(inputYear.value, inputMonth.value, 0).getDate();
        meses -= 1;
        dias = novoMes - inputDay.value + diaAtual;
        textDay.innerText = String(dias);
        textMonth.innerText = String(meses);
      } else {
        textDay.innerText = String(dias);
      }
    } else {
      console.log("erro dia");
    }
  }

  function verificaMes() {
    if (inputMonth.value <= 12 && inputMonth.value > 0) {
      if (meses < 0) {
        verificaAnoMes();
        meses += 12;
        textMonth.innerText = String(meses);
      } else {
        textMonth.innerText = String(meses);
      }
    } else {
      console.log("erro mes");
    }
  }
  verificaDia();
  verificaMes();
  verificaAno();
}

const button = document.querySelector(".button");
button.addEventListener("click", handleClick);
