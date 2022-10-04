let textInput = document.querySelector("#input-text");
let oupInput = document.querySelector("#output");

function criptografar(){
 
    let texto = textInput.value;
    

    let resultCripto = texto.replace(/e/g,"enter").replace(/i/g,"rdq")
    .replace(/a/g,"nt").replace(/o/g,"mzh").replace(/u/g,"rdq");

    document.getElementById('output').innerHTML = '<textarea readonly id="input-text"></textarea>' + resultCripto +
    '</textarea>' + '<button class="ntn-copiar" id=copiar" onclick="copiar()">Copiar</button>'

}



function descriptografar(){

    var texto = textInput.value;

    var resultDescripto = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
  
    document.getElementById('output').innerHTML = '<textarea readonly id="input-texto">' + resultDescripto + 
    '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
}

function copiar() {
    var textoCop = document.getElementById('input-texto');
  
    textoCop.select();
    document.execCommand('copy');
    alert("Texto copiado.");
}  
