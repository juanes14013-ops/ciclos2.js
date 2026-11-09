// ejercicio3.js — Control de gastos mensuales (while)

let formulario = document.getElementById("formulario");
let mensaje = document.getElementById("mensaje");
let presupuestoTexto = document.getElementById("presupuesto");
let totalGastadoTexto = document.getElementById("totalGastado");
let restanteTexto = document.getElementById("restante");
let gastosAltosTexto = document.getElementById("gastosAltos");

formulario.addEventListener("submit", procesarFormulario);

function procesarFormulario(evento) {
  evento.preventDefault();

  let presupuesto = parseFloat(document.getElementById("presupuestoEntrada").value);
  let lista = document.getElementById("gastosEntrada").value.split(",");
  let posicion = 0;
  let totalGastado = 0;
  let gastosAltos = 0;
  let rechazados = 0;
  let terminado = false;

  if (Number.isNaN(presupuesto) || presupuesto < 0) {
    mensaje.textContent = "El presupuesto debe ser un número mayor o igual a cero.";
    return;
  }

  while (posicion < lista.length && terminado === false) {
    let gasto = parseFloat(lista[posicion]);

    if (gasto === 0) {
      terminado = true;
    } else if (Number.isNaN(gasto) || gasto < 0) {
      rechazados++;
    } else {
      totalGastado += gasto;
      if (gasto > 50000) {
        gastosAltos++;
      }
    }
    posicion++;
  }

  let restante = presupuesto - totalGastado;

  presupuestoTexto.textContent = "$" + presupuesto.toLocaleString("es-CO");
  totalGastadoTexto.textContent = "$" + totalGastado.toLocaleString("es-CO");
  if (restante < 0) {
    restanteTexto.textContent = "-$" + Math.abs(restante).toLocaleString("es-CO");
  } else {
    restanteTexto.textContent = "$" + restante.toLocaleString("es-CO");
  }
  gastosAltosTexto.textContent = gastosAltos;

  if (restante < 0) {
    mensaje.textContent = "Excediste el presupuesto. Te faltaron $" + Math.abs(restante).toLocaleString("es-CO") + ".";
  } else {
    mensaje.textContent = "Te mantuviste dentro del presupuesto.";
  }

  if (rechazados > 0) {
    mensaje.textContent += " Gastos rechazados (negativos o inválidos): " + rechazados + ".";
  }
}
