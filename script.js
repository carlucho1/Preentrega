// Captura de los input del formulario de contacto
const inputName = document.getElementById("name");
const inputLastname = document.getElementById("lastname");
const inputEmail = document.getElementById("email");
const inputTelefono = document.getElementById("telefono");
const inputDate = document.getElementById("date");
const inputSelect = document.getElementById("select");

// Muestro en consola las capturas de los elementos de una forma más abreviada!
console.log(inputName, inputLastname, inputEmail, inputTelefono, inputDate, inputSelect);

// Manejo de los inputs tipo readio
const opcion1 = document.getElementById("opcion1");
const opcion2 = document.getElementById("opcion2");
const opcion3 = document.getElementById("opcion3");
const opcion4 = document.getElementById("opcion4");
const opcion5 = document.getElementById("opcion5");

// Muestro en consola las capturas de los checkboxes
console.log(opcion1, opcion2, opcion3, opcion4, opcion5);

// Manejo de los inputs tipo radio
const input4GB = document.getElementById("4GB");
const input8GB = document.getElementById("8GB");
const input16GB = document.getElementById("16GB");
const input32GB = document.getElementById("32GB");
const input64GB = document.getElementById("64GB");

// Muestro en consola las capturas de los radios
console.log(input4GB, input8GB, input16GB, input32GB, input64GB);

// Captura del text area
const textArea = document.getElementById("message");
console.log(textArea);

// Inicializa el array con datos del localStorage
let personas = JSON.parse(localStorage.getItem("arrayPersonas")) || [];

// Captura del formulario
const formulario = document.getElementById("formulario");

// Manejo del evento submit
formulario.addEventListener("submit", (evento) => {
  console.log("El objeto evento es: ", evento);
  // Evitar el envío tradicional del formulario
  evento.preventDefault();

  // Creo un objeto para almacenar los valores y lo inicializo vacío
  const datosFormulario = {};

  // Uso FormData para extraer los valores del formulario
  const formData = new FormData(formulario);
  console.log(formData); // Este objeto tiene el método forEach que uso en la siguiente línea
  formData.forEach((valor, clave) => {
    datosFormulario[clave] = valor || "No especificado"; // Agrego un valor predeterminado ("No especificado") si algún campo está vacío.
  });

  console.log("Los datos del formulario son: ", datosFormulario);

  // Mostrar los datos ingresados al usuari, pero en el HTML. El div elegido es donde inicialmente está el iframe, por lo tanto lo primero que debemos hacer es borrarlo, y apara ello le alteramos una de las clases.
  const iframe = document.getElementById("iframe");
  const salida = document.getElementById("salida"); // Capturo el h2 que inicialmente dice "ENCUÉNTRANOS EN ESTA DIRECCIÓN"
  salida.textContent = "LOS DATOS INGRESADOS EN EL FORMULARIO SON:"; // Le cambio el texto, cuando se presiona submit (botón Enviar)
  iframe.classList.add("borroiframe"); // Le altero la clase borrando el iframe con display: none, para en ese lugar mostrar los datos del formulario!

  // Creamos un contenedor para mostrar los resultados con los datos que el usuario ingresó en el formulario
  let nuevoContenedor = document.getElementById("resultados");
  if (!nuevoContenedor) {
    nuevoContenedor = document.createElement("div"); // Creo el nuevo contenedor
    nuevoContenedor.id = "resultados"; // A este nuevo contenedor que creo le asigno el id resultados, si es que no existe !!
    document.body.appendChild(nuevoContenedor);
  }

  // Limpiamos el contenedor antes de agregar nuevos resultados
  nuevoContenedor.innerHTML = "";

  // Agregamos los valores del objeto con los datos del formulario capturados a este nuevo contenedor
  for (const clave in datosFormulario) {
    if (datosFormulario.hasOwnProperty(clave)) {
      const br = document.createElement("br")
      nuevoContenedor.appendChild(br)// Agrego un renglón entre cada campo del formulario
      const parrafo = document.createElement("p");
      parrafo.textContent = `${clave}: ${datosFormulario[clave]}`;
      nuevoContenedor.appendChild(parrafo);
    }
  }

  // Agregamos el objeto al array personas y guardamos los datos en el localStorage
  personas.push(datosFormulario);
  localStorage.setItem("arrayPersonas", JSON.stringify(personas));

  // Mostrar en consola los datos almacenados
  console.log(
    "Datos almacenados:",
    JSON.parse(localStorage.getItem("arrayPersonas"))
  );
});
