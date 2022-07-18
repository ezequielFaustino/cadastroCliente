//id do elemento button
const btnEnviar = document.querySelector("#btn-enviar");
//pegar todos os campos
const inputsForm = document.querySelectorAll("input.contato-form");

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


//chamar funcao ao clicar em botao enviar
