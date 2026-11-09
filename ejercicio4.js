// ejercicio4.js — Análisis de números ingresados (do...while)

let formulario = document.getElementById("formulario");
let mensaje = document.getElementById("mensaje");
let paresTexto = document.getElementById("pares");
let sumaParesTexto = document.getElementById("sumaPares");
let imparesTexto = document.getElementById("impares");
let sumaImparesTexto = document.getElementById("sumaImpares");
let multiplos3Texto = document.getElementById("multiplos3");
let mayorTexto = document.getElementById("mayor");

formulario.addEventListener("submit", procesarFormulario);

function procesarFormulario(evento) {
  evento.preventDefault();

  let lista = document.getElementById("numerosEntrada").value.split(",");
  let posicion = 0;
  let pares = 0;
  let sumaPares = 0;
  let impares = 0;
  let sumaImpares = 0;
  let multiplos3 = 0;
  let mayor = 0;
  let validos = 0;
  let rechazados = 0;
  let terminado = false;

  do {
    let texto = lista[posicion].trim();
    let numero = Number(texto);

    if (texto === "-1") {
      terminado = true;                       // el -1 solo cierra la lista
    } else if (texto === "" || !Number.isInteger(numero) || numero <= 0) {
      rechazados++;                           // decimales, negativos, 0 o texto
    } else {
      validos++;
      if (numero % 2 === 0) {
        pares++;
        sumaPares += numero;
      } else {
        impares++;
        sumaImpares += numero;
      }
      if (numero % 3 === 0) {
        multiplos3++;
      }
      if (numero > mayor) {
        mayor = numero;
      }
    }
    posicion++;
  } while (posicion < lista.length && terminado === false);

  if (validos === 0) {
    mensaje.textContent = "No se registró ningún número válido.";
    paresTexto.textContent = "—";
    sumaParesTexto.textContent = "—";
    imparesTexto.textContent = "—";
    sumaImparesTexto.textContent = "—";
    multiplos3Texto.textContent = "—";
    mayorTexto.textContent = "—";
    return;
  }

  paresTexto.textContent = pares;
  sumaParesTexto.textContent = sumaPares;
  imparesTexto.textContent = impares;
  sumaImparesTexto.textContent = sumaImpares;
  multiplos3Texto.textContent = multiplos3;
  mayorTexto.textContent = mayor;

  mensaje.textContent = "Análisis completado.";
  if (rechazados > 0) {
    mensaje.textContent += " Valores rechazados: " + rechazados + ".";
  }
}
