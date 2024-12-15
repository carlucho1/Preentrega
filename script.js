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
const input4GB = document.getElementById("4GB")
const input8GB = document.getElementById("8GB");
const input16GB = document.getElementById("16GB");
const input32GB = document.getElementById("32GB");
const input64GB = document.getElementById("64GB");

// Muestro en consola las capturas de los radius
console.log(input4GB)
console.log(input8GB);
console.log(input16GB);
console.log(input32GB);
console.log(input64GB);

function mostrarinput() {
  console.log(inputName.value);
  console.log(inputLastname.value);
  console.log(inputEmail.value);
  console.log(inputTelefono.value);
  console.log(inputDate.value);
  console.log(inputSelect.value);
  if (checkboxOpcion1.checked) console.log(checkboxOpcion1.value); // "DELL"
  if (checkboxOpcion2.checked) console.log(checkboxOpcion2.value); // "HP"
  if (checkboxOpcion3.checked) console.log(checkboxOpcion3.value); // "LENOVO"
  if (checkboxOpcion4.checked) console.log(checkboxOpcion4.value); // "APPLE"
  if (checkboxOpcion5.checked) console.log(checkboxOpcion5.value); // "ASUS"
  if (input4GB.checked) console.log(input4GB.value); // "4GB"
  if (input8GB.checked) console.log(input8GB.value); // "8GB"
  if (input16GB.checked) console.log(input16GB.value); // "16GB"
  if (input32GB.checked) console.log(input32GB.value); // "32GB"
  if (input64GB.checked) console.log(input64GB.value); // "64GB"
}