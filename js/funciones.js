// let crea indica la variable
// numero es el nombre de la variable
// = resultado indica los valores a tomar
// 10 es el valor que toma; NOTA GENERAL DE LA DECLARACION DE VARIABLES
// let = crear numero= nombre de la variable "="= Asigna el valor 10 = valor a tomar

// decaclar los valores de la operacion
console.log("Este es mi javascript");
// funcion inicial desde body 
function init() { 
//variables
  let resultado = document.getElementById("resultado");
  let reset = document.getElementById("reset");
  let suma = document.getElementById("suma");
  let resta = document.getElementById("resta");
  let multiplicacion = document.getElementById("multiplicacion");
  let division = document.getElementById("division");
  let igual = document.getElementById("igual");
  let uno = document.getElementById("uno");
  let dos = document.getElementById("dos");
  let tres = document.getElementById("tres");
  let cuatro = document.getElementById("cuatro");
  let cinco = document.getElementById("cinco");
  let seis = document.getElementById("seis");
  let siete = document.getElementById("siete");
  let ocho = document.getElementById("ocho");
  let nueve = document.getElementById("nueve");
  let cero = document.getElementById("cero");
  let nViejo;
  let nNuevo;
  let operacion;

  let historial = document.getElementById("historial");

console.log(resultado);
  
  uno.onclick = function (e) {
    resultado.textContent = resultado.textContent + "1";
    console.log(resultado.textContent);
  };
  dos.onclick = function (e) {
    resultado.textContent = resultado.textContent + "2";
  };
  tres.onclick = function (e) {
    resultado.textContent = resultado.textContent + "3";
  };
  cuatro.onclick = function (e) {
    resultado.textContent = resultado.textContent + "4";
  };
  cinco.onclick = function (e) {
    resultado.textContent = resultado.textContent + "5";
  };
  seis.onclick = function (e) {
    resultado.textContent = resultado.textContent + "6";
  };
  siete.onclick = function (e) {
    resultado.textContent = resultado.textContent + "7";
  };
  ocho.onclick = function (e) {
    resultado.textContent = resultado.textContent + "8";
  };
  nueve.onclick = function (e) {
    resultado.textContent = resultado.textContent + "9";
  };
  cero.onclick = function (e) {
    resultado.textContent = resultado.textContent + "0";
  };
  reset.onclick = function (e) {
    resetear();
  };
  suma.onclick = function (e) {
    console.log(resultado.textContent);
    nViejo = resultado.textContent;
    console.log(historial);
    operacion = "+";
    limpiar();
  };
  resta.onclick = function (e) {
    nViejo = resultado.textContent;
    operacion = "-";
    limpiar();
  };
  multiplicacion.onclick = function (e) {
    nViejo = resultado.textContent;
    operacion = "*";
    limpiar();
  };
  division.onclick = function (e) {
    nViejo = resultado.textContent;
    operacion = "/";
    limpiar();
  };
  igual.onclick = function (e) {  
    nNuevo = resultado.textContent;
    resolver();
  };
  function limpiar(){
    resultado.textContent = "";
  }
  function resetear(){
    resultado.textContent = "";
    nViejo = 0;
    nNuevo = 0;
    operacion = "";
  }
  function resolver(){
    let res = 0;
    let history = 0
    switch(operacion){
      case "+":
        res = parseFloat(nViejo) + parseFloat(nNuevo);
        history = nViejo + "+" + nNuevo + "=" + res;
        console.log(history);
        break;
      case "-":
          res = parseFloat(nViejo) - parseFloat(nNuevo);
          break;
      case "*":
        res = parseFloat(nViejo) * parseFloat(nNuevo);
        break;
      case "/":
        res = parseFloat(nViejo) / parseFloat(nNuevo);
        break;
    }
    resetear();
    historial.textContent = history;
    resultado.textContent = res;
  } 
}