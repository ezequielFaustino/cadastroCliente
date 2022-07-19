//id do elemento button
const btnEnviar = document.querySelector("#btn-enviar");
//pegar todos os campos
const inputsForm = document.querySelectorAll("input.contato-form");
// text cpf valido ou invalido; label cpf
const labelCpf = document.querySelector("#label-cpf");
const paragrafo = document.querySelector("#texto-cpf");

// funcao mudar cor do botao
const changeColorOfButton = () =>{
    if((inputsForm[0].value !== "") && (inputsForm[1].value !== "") && (inputsForm[2].value !== "")){
        btnEnviar.style.background = "blue";
    }else{
        btnEnviar.style.background = "#777";
    }
}
//chamar funcao mudar cor do botao
inputsForm.forEach((input)=>{
    input.addEventListener("keyup", changeColorOfButton);
})

// mascaraCPF
inputsForm[0].addEventListener("keypress", () =>{
    let inputLength = inputsForm[0].value.length;
    // se cpf tiver 3 digitos --> ex.: 123 add '-'
    if(inputLength === 3 || inputLength === 7){
        inputsForm[0].value += '.';
    }else if(inputLength === 11){
        inputsForm[0].value += '-';
    }
})
// mascara telefone
inputsForm[2].addEventListener("keypress", () =>{
    let inputLength = inputsForm[2].value.length;
  //caso seja primeira posicao do value add '('; quarta posicao add ')'; decima posicao add '-'; 
  switch(inputLength){
    case 0:
      inputsForm[2].value+= '(';
      break;
    case 3:
      inputsForm[2].value+= ')';
      break;
    case 9:
      inputsForm[2].value+= '-';
      break;
    default:
      break;
  }
  //console.log(inputLength);
})

//calculo para validacao do Cpf
function validaPrimeiroDigito(cpf){
    let sum = 0;
    for (let i = 0; i < 9; i++) {
      sum += cpf[i] * (10 - i);
    }
    const resto = (sum * 10) % 11;
    if (resto < 10) {
      return cpf[9] == resto;
    }
    return cpf[9] == 0;
  }
  
  function validaSegundoDigito(cpf){
    let soma = 0;
    for(let i = 0; i < 10; i++){
      soma += cpf[i] * (11 - i);
    }
    const resto = (soma * 10) % 11;
    if(resto < 10){
      return cpf[10] == resto;
    }
    return cpf[10] == 0;
  }
  
  //retorna falso se cpf invalido, verdadeiro se cpf válido
  function validarCpf(cpf){
    if(!validaPrimeiroDigito(cpf)){
      labelCpf.style.color = "#EC615B";
      paragrafo.style.color = "#EC615B";
      paragrafo.innerText = "cpf inválido"
      return false;
    }
    if(!validaSegundoDigito(cpf)){
      labelCpf.style.color = "#EC615B";
      paragrafo.style.color = "#EC615B";
      paragrafo.innerText = "cpf inválido"
      return false;
    }
    labelCpf.style.color = "#1B1E24"; 
    paragrafo.style.color = "green"; 
    paragrafo.innerText = "cpf válido"
    return true;
  }
  
  function infoCpf(){
    //pegar value do campo cpf
    const cpf = inputsForm[0].value;
    //tirar '.' e '-'
    const cpfSoNumero = cpf.toString().replace('.', '').replace('.', '').replace('-', '');
    /*
    console.log(cpfSoNumero);
    console.log(typeof(cpfSoNumero));
    console.log(cpfSoNumero.length);
    */
    cpfSoNumero.split('').map((e) => parseInt(e));
    const cpfValido = validarCpf(cpfSoNumero);
    console.log(cpfValido);
  }
//chamar funcao ao clicar em botao enviar
btnEnviar.addEventListener("pointerdown", infoCpf);