// ejercicio1.js — Sistema de compras en una tienda (while)

let formulario = document.getElementById("formulario");
let mensaje = document.getElementById("mensaje");
let cantidadTexto = document.getElementById("cantidad");
let subtotalTexto = document.getElementById("subtotal");
let descuentoTexto = document.getElementById("descuento");
let totalTexto = document.getElementById("total");

formulario.addEventListener("submit", procesarFormulario);

function procesarFormulario(evento) {
  evento.preventDefault();

  let lista = document.getElementById("precios").value.split(",");
  let posicion = 0;
  let subtotal = 0;
  let cantidad = 0;
  let rechazados = 0;
  let terminado = false;

  // Se recorre la lista hasta encontrar el 0 o hasta que se acabe
  while (posicion < lista.length && terminado === false) {
    let precio = parseFloat(lista[posicion]);

    if (precio === 0) {
      terminado = true;
    } else if (Number.isNaN(precio) || precio < 0) {
      rechazados++;
    } else {
      subtotal += precio;
      cantidad++;
    }
    posicion++;
  }

  let descuento = 0;
  if (subtotal > 200000) {
    descuento = subtotal * 0.10;
  }
  let total = subtotal - descuento;

  cantidadTexto.textContent = cantidad;
  subtotalTexto.textContent = "$" + subtotal.toLocaleString("es-CO");
  descuentoTexto.textContent = "$" + descuento.toLocaleString("es-CO");
  totalTexto.textContent = "$" + total.toLocaleString("es-CO");

  if (cantidad === 0) {
    mensaje.textContent = "No se registró ningún producto.";
  } else if (descuento > 0) {
    mensaje.textContent = "Compra superior a $200.000: se aplicó el 10 % de descuento.";
  } else {
    mensaje.textContent = "Compra calculada sin descuento.";
  }

  if (rechazados > 0) {
    mensaje.textContent += " Precios rechazados (negativos o inválidos): " + rechazados + ".";
  }
}
