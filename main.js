
function insert(num) {
    var numero = document.getElementById('resultado').innerHTML; //seleciona apenas um numero e aparece na tela
    document.getElementById('resultado').innerHTML = numero + num;   //adiciona mais de um numero selecionado
}

function clean(){
    document.getElementById('resultado').innerHTML = "";  //função para limpar o numero da tela
}

function back(){
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1) //apaga um numero de cada vez
}

function calcular() {
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado) {
        document.getElementById('resultado').innerHTML = eval(resultado);
    } 
    else {
        document.getElementById('resultado').innerHTML = '...'
    }
}
