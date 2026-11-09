// ejercicio6.js — Estadísticas de ventas de un negocio (for)

let formulario = document.getElementById("formulario");
let mensaje = document.getElementById("mensaje");
let detalleDias = document.getElementById("detalleDias");
let totalVendidoTexto = document.getElementById("totalVendido");
let promedioTexto = document.getElementById("promedio");
let mejorDiaTexto = document.getElementById("mejorDia");
let diasAltosTexto = document.getElementById("diasAltos");

formulario.addEventListener("submit", procesarFormulario);

function procesarFormulario(evento) {
  evento.preventDefault();

  let total = 0;
  let diasAltos = 0;
  let mejorDia = 1;
  let mayorVenta = 0;
  let invalidos = 0;
  detalleDias.innerHTML = "";

  for (let dia = 1; dia <= 7; dia++) {
    let venta = parseFloat(document.getElementById("venta" + dia).value);
    let fila = document.createElement("li");

    if (Number.isNaN(venta) || venta < 0) {
      invalidos++;
      venta = 0;                 // una venta inválida cuenta como 0
      fila.textContent = "Día " + dia + ": dato inválido (se tomó como $0)";
    } else {
      fila.textContent = "Día " + dia + ": $" + venta.toLocaleString("es-CO");
    }
    detalleDias.appendChild(fila);

    total += venta;

    if (venta > 300000) {
      diasAltos++;
    }
    if (venta > mayorVenta) {
      mayorVenta = venta;
      mejorDia = dia;
    }
  }

  let promedio = total / 7;

  totalVendidoTexto.textContent = "$" + total.toLocaleString("es-CO");
  promedioTexto.textContent = "$" + promedio.toLocaleString("es-CO", { maximumFractionDigits: 0 });
  mejorDiaTexto.textContent = "Día " + mejorDia;
  diasAltosTexto.textContent = diasAltos;

  if (promedio > 400000) {
    mensaje.textContent = "Rendimiento excelente.";
  } else if (promedio >= 200000) {
    mensaje.textContent = "Rendimiento aceptable.";
  } else {
    mensaje.textContent = "Rendimiento bajo.";
  }

  if (invalidos > 0) {
    mensaje.textContent += " Hubo " + invalidos + " dato(s) inválido(s) tomados como $0.";
  }
}
