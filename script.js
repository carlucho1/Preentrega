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

// Manejo de los inputs type radio
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

// Ahora voy a capturar en un objeto todos los valores del formulario. Para ello es que están definidos los atributos de name, ya que ahí viajarán dichos (bajo la variable name), con los valores que se ingresen en los inputs y que serán las claves o los atributos del objeto a crear. Por ejemplo el campo nombre del formulario, el name se llama name, por lo tante el primer par clave(atributo)-valor del objeto que se genere será: name: Carlos (por ejemplo). Luego el campo Apellido, el name es lastname, por lo tanto este segundo atributo del objeto será el par clave-valor dado por lastname: López (por ejemplo). Lo importante es que siempre para que el valor se capture debe haber un atributo llamado "name" en el input, de lo contrario no se capturará dicho elemento.

let personas = []; //Preparo un array vacío donde vamos a almacenar los objetos

// const inputSubmit = document.getElementById("submit");
const formulario = document.getElementById("formulario");

// ******************USO DE FORMDATA**************************************************************************
// Funciona OK el input radius, pero en el checkbox (si hay más de uno seleccionado), siempre recuerda el de más a la derecha
formulario.addEventListener("submit", (evento) => {
  // Evitar el envío tradicional del formulario
  evento.preventDefault();

  // Crear un objeto para almacenar los valores
  const datosFormulario = {};

  // Usar FormData para extraer los valores

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
  console.log(nuevoContenedor);

  // Si el contenedor no existe, crearlo dinámicamente
  if (!nuevoContenedor) {
    nuevoContenedor = document.createElement("div");
    nuevoContenedor.id = "contenedor-resultados";
    nuevoContenedor.style.marginTop = "20px"; // Agrega estilo opcional
    document.body.appendChild(nuevoContenedor); // Lo agrega al final del <body>
  }

  // Limpiar el contenedor antes de agregar nuevos resultados
  nuevoContenedor.innerHTML = "";

  // Recorre los campos del objeto y los agrega al nuevo contenedor
  for (const clave in datosFormulario) {
    if (datosFormulario.hasOwnProperty(clave)) {
      const br = document.createElement("br"); //dejo un renglón entre cada par clave --> valor
      nuevoContenedor.appendChild(br);
      const parrafo = document.createElement("p");
      parrafo.textContent = `${clave}: ${datosFormulario[clave]}`;
      nuevoContenedor.appendChild(parrafo);
    }
  }

  // Agregar nuevos objetos al array
  personas.push(datosFormulario);
  console.log(personas);

  // Guardar el array actualizado en el localStorage
  localStorage.setItem("miArray", JSON.stringify(personas));

  // Verificar los datos almacenados
  console.log(
    "Datos almacenados:",
    JSON.parse(localStorage.getItem("miArray"))
  );
});