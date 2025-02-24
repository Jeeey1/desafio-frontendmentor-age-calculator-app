function addErro(input, msg) {
  const parentInput = input.parentElement;
  const paragrafo = parentInput.querySelector("p");

  paragrafo.innerText = msg;
  parentInput.setAttribute("data-erro", "");
}

function removeErro(input) {
  const parentInput = input.parentElement;
  const paragrafo = parentInput.querySelector("p");

  paragrafo.innerText = "";
  parentInput.removeAttribute("data-erro", "");
}

function validDate(inputs, texts, msg) {
  const paragrafo = inputs[0].parentElement.querySelector("p");
  paragrafo.innerText = msg;

  for(let i = 0; i < inputs.length; i++){
    inputs[i].parentElement.setAttribute('data-erro', '');
    texts[i].innerText = '--'
  }
}

function removeValidDate(inputs) {
  const paragrafo = inputs[0].parentElement.querySelector("p");
  paragrafo.innerText = '';
  
  for(let i = 0; i < inputs.length; i++){
    inputs[i].parentElement.removeAttribute('data-erro', '');
  }
}

const validacoes = {
  addErro,
  removeErro,
  validDate,
  removeValidDate
}

export default validacoes;