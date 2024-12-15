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
const formulario = document.getElementById("formulario");
formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const datosFormulario = {};
  const elementos = formulario.elements; // Accede a todos los campos del formulario

  for (let elemento of elementos) {
    if (elemento.name) {
      datosFormulario[elemento.name] = elemento.value;
    }
  }

  console.log(datosFormulario);
});
