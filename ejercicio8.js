// ejercicio8.js — Juego de adivinar el número (while)

let formulario = document.getElementById("formulario");
let mensaje = document.getElementById("mensaje");
let intentosTexto = document.getElementById("intentos");
let puntosTexto = document.getElementById("puntos");
let registro = document.getElementById("registro");

formulario.addEventListener("submit", procesarFormulario);

function procesarFormulario(evento) {
  evento.preventDefault();

  // Fijo para poder comprobar los casos de prueba.
  // Para jugar de verdad: let secreto = Math.floor(Math.random() * 100) + 1;
  let secreto = 42;
  let maximoIntentos = 7;
  let lista = document.getElementById("intentosEntrada").value.split(",");
  let posicion = 0;
  let intentos = 0;
  let puntos = 100;
  let adivino = false;
  registro.innerHTML = "";

  while (intentos < maximoIntentos && posicion < lista.length && adivino === false) {
    let texto = lista[posicion].trim();
    let numero = Number(texto);
    let fila = document.createElement("li");

    if (texto === "" || !Number.isInteger(numero) || numero < 1 || numero > 100) {
      fila.textContent = "\"" + texto + "\": inválido (debe ser un entero entre 1 y 100), no cuenta como intento.";
    } else {
      intentos++;

      if (numero === secreto) {
        adivino = true;
        fila.textContent = "Intento " + intentos + " (" + numero + "): ¡correcto!";
      } else {
        puntos -= 10;
        if (secreto > numero) {
          fila.textContent = "Intento " + intentos + " (" + numero + "): el número secreto es mayor.";
        } else {
          fila.textContent = "Intento " + intentos + " (" + numero + "): el número secreto es menor.";
        }
      }
    }
    registro.appendChild(fila);
    posicion++;
  }

  intentosTexto.textContent = intentos;
  puntosTexto.textContent = puntos;

  if (adivino) {
    mensaje.textContent = "¡Ganaste! Adivinaste el número en " + intentos + " intento(s).";
  } else {
    mensaje.textContent = "Perdiste. El número secreto era " + secreto + ".";
  }
}
