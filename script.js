var numero = "";
var numMuestra = "";
var numero1 = 0;
var numero2 = 0;
var resultado = 0;
var operador = "";
function Sumar() {
    numero1 = Number(numero);
    operador = "+";
    numero = "";
    Escribir('+');
}
function Restar() {
    var numero1 = Number(num1.value);
    var numero2 = Number(num2.value);
    var resultado = numero1 - numero2;
    alert("El resultado es = " + resultado);
}
function Multiplicar() {
    var numero1 = Number(num1.value);
    var numero2 = Number(num2.value);
    var resultado = numero1 * numero2;
    alert("El resultado es = " + resultado);
}
function Dividir() {
    var numero1 = Number(num1.value);
    var numero2 = Number(num2.value);
    var resultado = numero1 / numero2;
    alert("El resultado es = " + resultado);
}
function Escribir(P_Numero) {
    if (P_Numero == "+") {
        //num1.value = num1.value + "+";
    } else {
        numero = numero + P_Numero;
    }
    
    numMuestra = numMuestra + P_Numero;
    num1.value = numMuestra;
}

function Resultado() {
    numero2 = Number(numero);
    if (operador == "+") {
        resultado = numero1 + numero2;
        num1.value = resultado;
    }
}