document.addEventListener("DOMContentLoaded", () => {
  console.log("Script 1 cargado ");
  let contador = 0;
  let usuarios = [
    ["usuario1", "contraseña"],
    ["ususariobase", "clavebase"],
    ["agustin", "clavedelbanco"],
    ["juez", "clavedelconcurso"]
  ];
  // Crear el formulario
  const form = document.createElement("form");
  form.id = "login-form";
  form.innerHTML = `<div>
    <h2>Iniciar Sesión</h2>
    <label for="usuario">Usuario:</label>
    <input type="text" id="usuario" name="usuario" required />
    <br />
    <label for="password">Contraseña:</label>
    <input type="password" id="password" name="password" required />
    <br />
    <button type="submit">Ingresar</button>
    <div/>
  `;

  // Insertar el formulario en el body
  document.body.appendChild(form);

  // Opcional: manejar el envío del formulario
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const usuario = form.usuario.value.trim();
    const password = form.password.value.trim();
    if (!usuario || !password) {
      mensajeDiv.textContent = "Completa ambos campos.";
      return;
    }
    const existec = usuarios.some(u => u[1] === password);
    if (existec ){
      mensajeDiv.textContent = `contraseña ${password} ya existe añadido a la lista.`;
    }
    // Crear nuevo input y botón
    contador++;
    const newInput = document.createElement("input");
    newInput.type = "text";
    newInput.placeholder = "Nuevo texto";

  

    // Insertar antes del botón antiguo
    const oldButton = form.querySelector('button[type="submit"]');
    form.insertBefore(newInput, oldButton);
    form.insertBefore(document.createElement("br"), oldButton);
  });
});