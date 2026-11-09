// ejercicio7.js — Nómina de empleados (ciclos anidados)

let formulario = document.getElementById("formulario");
let mensaje = document.getElementById("mensaje");
let detalleEmpleados = document.getElementById("detalleEmpleados");
let cantidadEmpleadosTexto = document.getElementById("cantidadEmpleados");
let conExtrasTexto = document.getElementById("conExtras");
let totalNominaTexto = document.getElementById("totalNomina");

formulario.addEventListener("submit", procesarFormulario);

function procesarFormulario(evento) {
  evento.preventDefault();

  let lineas = document.getElementById("empleadosEntrada").value.trim().split("\n");
  let totalNomina = 0;
  let conExtras = 0;
  let registrados = 0;
  detalleEmpleados.innerHTML = "";

  // Ciclo externo: un empleado por línea
  for (let e = 0; e < lineas.length; e++) {
    let datos = lineas[e].split(",");
    let horas = 0;
    let valorHora = 0;
    let valido = true;

    // Ciclo interno: lee y valida los dos datos (horas y valor por hora)
    for (let campo = 0; campo < 2; campo++) {
      let valor = parseFloat(datos[campo]);
      if (Number.isNaN(valor) || valor <= 0) {
        valido = false;
      } else if (campo === 0) {
        horas = valor;
      } else {
        valorHora = valor;
      }
    }

    let fila = document.createElement("li");

    if (valido === false) {
      fila.textContent = "Empleado " + (e + 1) + ": datos inválidos, no se calculó el pago.";
    } else {
      let pago = 0;

      if (horas > 40) {
        let horasExtra = horas - 40;
        pago = (40 * valorHora) + (horasExtra * valorHora * 1.25);
        conExtras++;
      } else {
        pago = horas * valorHora;
      }

      totalNomina += pago;
      registrados++;
      fila.textContent = "Empleado " + (e + 1) + ": " + horas + " h → $" + pago.toLocaleString("es-CO");
    }
    detalleEmpleados.appendChild(fila);
  }

  cantidadEmpleadosTexto.textContent = registrados;
  conExtrasTexto.textContent = conExtras;
  totalNominaTexto.textContent = "$" + totalNomina.toLocaleString("es-CO");
  mensaje.textContent = "Nómina calculada. Los registros inválidos no se sumaron.";
}
