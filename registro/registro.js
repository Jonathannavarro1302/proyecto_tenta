// Esperamos a que el DOM cargue antes de ejecutar el código
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form"); // seleccionamos el formulario

  // Cuando se envíe el formulario
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // evita que se recargue la página

    // Obtenemos los valores de los inputs
    const nombre = document.querySelector("#nombre")?.value.trim();
    const email = document.querySelector("#email")?.value.trim();
    const pass = document.querySelector("#password")?.value;
    const confirmPass = document.querySelector("#confirm_password")?.value;

    // Validación de campos vacíos
    if (!nombre || !email || !pass || !confirmPass) {
      alert("Todos los campos son obligatorios");
      return;
    }

    // Validación del formato de correo
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("El correo no es válido");
      return;
    }

    // Validación de contraseñas iguales
    if (pass !== confirmPass) {
      alert("Las contraseñas no coinciden");
      return;
    }

    // Si todo está bien
    alert("Registro exitoso 🎉");
    form.reset(); // limpia el formulario
  });
});
