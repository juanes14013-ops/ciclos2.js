// ejercicio5.js — Sistema de inicio de sesión (while, sin arreglos)

let formulario = document.getElementById("formulario");
let mensaje = document.getElementById("mensaje");
let intentosTexto = document.getElementById("intentos");
let registro = document.getElementById("registro");

formulario.addEventListener("submit", procesarFormulario);

function procesarFormulario(evento) {
  evento.preventDefault();

  let contrasenaCorrecta = "Sena2026";
  let maximoIntentos = 3;
  let intentos = 0;
  let accesoConcedido = false;
  let sinMasDatos = false;
  registro.innerHTML = "";

  while (intentos < maximoIntentos && accesoConcedido === false && sinMasDatos === false) {
    let ingresada = document.getElementById("contrasena" + (intentos + 1)).value;

    if (ingresada === "") {
      sinMasDatos = true;      // campo vacío: no se usó ese intento
    } else {
      intentos++;
      let fila = document.createElement("li");

      if (ingresada === contrasenaCorrecta) {
        accesoConcedido = true;
        fila.textContent = "Intento " + intentos + ": contraseña correcta.";
      } else {
        fila.textContent = "Intento " + intentos + ": contraseña incorrecta.";
      }
      registro.appendChild(fila);
    }
  }

  intentosTexto.textContent = intentos;

  if (accesoConcedido) {
    mensaje.textContent = "¡Bienvenido! Ingresaste en " + intentos + " intento(s).";
  } else if (intentos === maximoIntentos) {
    mensaje.textContent = "Acceso bloqueado: se agotaron los " + maximoIntentos + " intentos.";
  } else {
    mensaje.textContent = "Acceso no concedido: no ingresaste más contraseñas.";
  }
}
