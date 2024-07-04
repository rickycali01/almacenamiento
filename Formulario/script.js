const formulario = document.getElementById('formulario-cliente');

formulario.addEventListener('submit', function(event) {
  event.preventDefault();

  const nombre = document.getElementById('nombre').value;
  const apellido = document.getElementById('apellido').value;
  const cedula = document.getElementById('cedula').value;
  const correoElectronico = document.getElementById('correo_electronico').value;
  const telefono = document.getElementById('telefono').value;

  // Validación de nombres y apellidos (solo letras)
  const regexLetras = /^[a-zA-Z]+$/;
  if (!regexLetras.test(nombre) || !regexLetras.test(apellido)) {
    alert('Los nombres y apellidos solo pueden contener letras.');
    return;
  }

  // Validación de cédula
  if (!/^[\d\+\-]+$/.test(cedula)) {
    alert('La cédula no es válida.');
    return;
  }

  // Validación restante (correo electrónico y teléfono)
  if (correoElectronico === '' || telefono === '') {
    alert('Por favor, complete todos los campos obligatorios.');
    return;
  }

  if (!/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(correoElectronico)) {
    alert('Correo electrónico no válido.');
    return;
  }

  if (!/^[\d\+\-]+$/.test(telefono)) {
    alert('Número de teléfono no válido.');
    return;
  }

  // Guardar datos en Local Storage
  const datosCliente = {
    nombre,
    apellido,
    cedula,
    correoElectronico,
    telefono
  };

  localStorage.setItem('datosCliente', JSON.stringify(datosCliente));

  // Mensaje de confirmación y registro de datos en consola
  alert('¡Datos enviados y guardados correctamente!');
  console.log('Datos del cliente guardados:', datosCliente);
});
