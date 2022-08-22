function inicio(){

    var texto = document.querySelector("#texto").value;
    var resposta = document.querySelector('#resposta');

    if(texto == "1"){
        resposta.textContent = "Mudar senha!";
    }
    else if(texto == "2"){
        resposta.textContent = "Criar conta!";
    }
    else if(texto == "3"){
        resposta.textContent = "1234-5678";
    }
}

function deletarResposta(){
    texto.value = "";
    resposta.textContent = "";
}