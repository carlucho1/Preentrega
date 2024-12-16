// Captura de los input del formulario de contacto
const inputName = document.getElementById("name"); //Capturo Nombre
const inputLastname = document.getElementById("lastname"); //Capturo Apellido
const inputEmail = document.getElementById("email"); //Capturo Email
const inputTelefono = document.getElementById("telefono"); //Capturo Teléfono
const inputDate = document.getElementById("date"); //Capturo fecha
const inputSelect = document.getElementById("select"); //Capturo opción del select(Masculino, Femenino, Binario, Prefiero no decirlo)

//Muestro en consola las capturas de los elemntos
console.log(inputName);
console.log(inputLastname);
console.log(inputEmail);
console.log(inputTelefono);
console.log(inputDate);
console.log(inputSelect);

// Manejo de los inputs type checkbox
const checkboxOpcion1 = document.getElementById("opcion1"); //DELL
const checkboxOpcion2 = document.getElementById("opcion2"); //HP
const checkboxOpcion3 = document.getElementById("opcion3"); //LENOVO
const checkboxOpcion4 = document.getElementById("opcion4"); //APPLE
const checkboxOpcion5 = document.getElementById("opcion5"); //ASUS

// Muestro en consola las capturas de los checkboxs
console.log(checkboxOpcion1);
console.log(checkboxOpcion2);
console.log(checkboxOpcion3);
console.log(checkboxOpcion4);
console.log(checkboxOpcion5);

//Manejo de los inputs type radius
const input4GB = document.getElementById("4GB");
const input8GB = document.getElementById("8GB");
const input16GB = document.getElementById("16GB");
const input32GB = document.getElementById("32GB");
const input64GB = document.getElementById("64GB");

// Muestro en consola las capturas de los radius
console.log(input4GB);
console.log(input8GB);
console.log(input16GB);
console.log(input32GB);
console.log(input64GB);

//Captura de text area
const textArea = document.getElementById("message");
console.log(textArea);

// function mostrarinput() {
//   console.log(inputName.value);
//   console.log(inputLastname.value);
//   console.log(inputEmail.value);
//   console.log(inputTelefono.value);
//   console.log(inputDate.value);
//   console.log(inputSelect.value);
//   if (checkboxOpcion1.checked) console.log(checkboxOpcion1.value); // "DELL"
//   if (checkboxOpcion2.checked) console.log(checkboxOpcion2.value); // "HP"
//   if (checkboxOpcion3.checked) console.log(checkboxOpcion3.value); // "LENOVO"
//   if (checkboxOpcion4.checked) console.log(checkboxOpcion4.value); // "APPLE"
//   if (checkboxOpcion5.checked) console.log(checkboxOpcion5.value); // "ASUS"
//   if (input4GB.checked) console.log(input4GB.value); // "4GB"
//   if (input8GB.checked) console.log(input8GB.value); // "8GB"
//   if (input16GB.checked) console.log(input16GB.value); // "16GB"
//   if (input32GB.checked) console.log(input32GB.value); // "32GB"
//   if (input64GB.checked) console.log(input64GB.value); // "64GB"
//   console.log(textArea.value);
// }

// Prueba usando addEvenListener. Notar que usamos una función anónima con el mismo contenido de mostrarinput()

// const inputSubmit = document.getElementById("submit")
// console.log(inputSubmit)
// console.log(inputSubmit.value)

// inputSubmit.addEventListener("click", function() {
//   console.log(inputName.value);
//   console.log(inputLastname.value);
//   console.log(inputEmail.value);
//   console.log(inputTelefono.value);
//   console.log(inputDate.value);
//   console.log(inputSelect.value);
//   if (checkboxOpcion1.checked) console.log(checkboxOpcion1.value); // "DELL"
//   if (checkboxOpcion2.checked) console.log(checkboxOpcion2.value); // "HP"
//   if (checkboxOpcion3.checked) console.log(checkboxOpcion3.value); // "LENOVO"
//   if (checkboxOpcion4.checked) console.log(checkboxOpcion4.value); // "APPLE"
//   if (checkboxOpcion5.checked) console.log(checkboxOpcion5.value); // "ASUS"
//   if (input4GB.checked) console.log(input4GB.value); // "4GB"
//   if (input8GB.checked) console.log(input8GB.value); // "8GB"
//   if (input16GB.checked) console.log(input16GB.value); // "16GB"
//   if (input32GB.checked) console.log(input32GB.value); // "32GB"
//   if (input64GB.checked) console.log(input64GB.value); // "64GB"
//   console.log(textArea.value);
// });

// Ahora voy a capturar en un objeto todos los valores del formulario. Para ello es que están definidos los atributois de name, ya que ahí viajarán los valores que se ingresan en los inputs y que serán las claves del objeto. Por ejemplo el campo nombre del formulario, el name se llama name, por lo tante el primer par clave-valor del objeto que se genere será: name: Carlos (por ejemplo). Luego el campo Apellido, el name es lastname, por lo tanto este segundo atributo del objeto será el par clave-valor dado por lastname: López (por ejemplo). Lo importante es que siempre para que el valor se capture debe haber un atributo llamado name en el input, de lo contrario no se capturará dicho elemento.

// const inputSubmit = document.getElementById("submit");
const formulario = document.getElementById("formulario1");
// formulario.addEventListener("submit", (evento) => {
//   evento.preventDefault();

//   const datosFormulario = {};
//     const elementos = formulario.elements; // Accede a todos los campos del formulario
//     // console.log(elementos)

//   for (let elemento of elementos) {
//     if (elemento.name) {
//       datosFormulario[elemento.name] = elemento.value;
//     }
//   }
//   console.log(datosFormulario);
//   // Voy a dar una respuesta al usuario con los datos que ingresó en el formulario usando el área del iframe
//   const iframe = document.getElementById("iframe"); //Capturo el elemento iframe
//   const salida = document.getElementById("salida");
//   salida.textContent = "LOS DATOS INGRESADOS EN EL FORMULARIO SON:";
//   iframe.classList.add("borroiframe"); //Le cambio la clase y lo borro con display: none
// });

// ******************USO DE FORMDATA**************************************************************************
// Funciona OK el input radius, pero en el checkbox (si hay más de uno seleccionado), siempre recuerda el de más a la derecha
formulario.addEventListener("submit", (evento) => {
  // Evitar el envío tradicional del formulario
  evento.preventDefault();

  // Crear un objeto para almacenar los valores
  const datosFormulario = {};

  // Usar FormData para extraer los valoresgit log

  const formData = new FormData(formulario);
  formData.forEach((valor, clave) => {
    datosFormulario[clave] = valor;
  });

  // Mostrar el objeto con los datos
  console.log(datosFormulario);
  // Voy a dar una respuesta al usuario con los datos que ingresó en el formulario usando el área del iframe
  const iframe = document.getElementById("iframe"); //Capturo el elemento iframe
  const salida = document.getElementById("salida"); //salida es la clase que le di al h2 del contenedor
  salida.textContent = "LOS DATOS INGRESADOS EN EL FORMULARIO SON:";
  iframe.classList.add("borroiframe"); //Le cambio la clase y lo borro con display: none

  // **************************Voy a imprimir los valores del objeto*************************************
  
  // Crear un nuevo contenedor para mostrar los resultados del objeto
  let nuevoContenedor = document.getElementById("resultados");
  console.log(nuevoContenedor)

  // Si el contenedor no existe, crearlo dinámicamente
  if (!nuevoContenedor) {
    nuevoContenedor = document.createElement("div");
    nuevoContenedor.id = "contenedor-resultados";
    nuevoContenedor.style.marginTop = "20px"; // Agrega estilo opcional
    document.body.appendChild(nuevoContenedor); // Lo agrega al final del <body>
  }

  // Limpiar el contenedor antes de agregar nuevos resultados
  nuevoContenedor.innerHTML = "";

  // Crear un título para los resultados
  // const titulo = document.createElement("h3");
  // titulo.textContent = "Resultados del formulario:";
  // nuevoContenedor.appendChild(titulo);

  // Recorre los campos del objeto y los agrega al nuevo contenedor
  for (const clave in datosFormulario) {
    if (datosFormulario.hasOwnProperty(clave)) {
      const parrafo = document.createElement("p");
      parrafo.textContent = `${clave}: ${datosFormulario[clave]}`;
      nuevoContenedor.appendChild(parrafo);
    }
  }
});