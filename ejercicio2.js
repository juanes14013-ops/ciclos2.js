// ejercicio2.js — Registro de notas de un estudiante (for)

let formulario = document.getElementById("formulario");
let mensaje = document.getElementById("mensaje");
let listaNotas = document.getElementById("listaNotas");
let promedioTexto = document.getElementById("promedio");
let notasAltasTexto = document.getElementById("notasAltas");
let notaMayorTexto = document.getElementById("notaMayor");
let notaMenorTexto = document.getElementById("notaMenor");

formulario.addEventListener("submit", procesarFormulario);

function procesarFormulario(evento) {
  evento.preventDefault();

  let suma = 0;
  let validas = 0;
  let aprobadas = 0;   // notas >= 3
  let mayor = 0;
  let menor = 5;
  listaNotas.innerHTML = "";

  for (let i = 1; i <= 5; i++) {
    let nota = parseFloat(document.getElementById("nota" + i).value);
    let fila = document.createElement("li");

    if (Number.isNaN(nota) || nota < 0 || nota > 5) {
      fila.textContent = "Nota " + i + ": " + nota + " → inválida, se descarta";
    } else {
      fila.textContent = "Nota " + i + ": " + nota;
      suma += nota;
      validas++;

      if (nota >= 3) {
        aprobadas++;
      }
      // La primera nota válida inicia el mayor y el menor
      if (validas === 1 || nota > mayor) {
        mayor = nota;
      }
      if (validas === 1 || nota < menor) {
        menor = nota;
      }
    }
    listaNotas.appendChild(fila);
  }

  if (validas === 0) {
    mensaje.textContent = "No se ingresó ninguna nota válida.";
    promedioTexto.textContent = "—";
    notasAltasTexto.textContent = "—";
    notaMayorTexto.textContent = "—";
    notaMenorTexto.textContent = "—";
    return;
  }

  let promedio = suma / validas;
  promedioTexto.textContent = promedio.toFixed(2);
  notasAltasTexto.textContent = aprobadas;
  notaMayorTexto.textContent = mayor;
  notaMenorTexto.textContent = menor;

  if (promedio >= 3) {
    mensaje.textContent = "El estudiante aprobó.";
  } else {
    mensaje.textContent = "El estudiante reprobó.";
  }
}
