//#region Sección plegable
function miFuncion() {
  console.log("Esto es código que se puede minimizar");
}
//#endregion

//PARTE 2 - Traer info de archivo Json -- Datos almacenados en datosCard.json, para completar dinámicamente las cards 8 y 9

// Capturo los id de las cards donde se insertarán los datos - Hago la prueba sobre las cards 8 y 9 (las dos últimas mostradas en index.html)
const card8 = document.getElementById("card8");
const card9 = document.getElementById("card9");

// La función fetch conecta con una API o un archivo JSON local. Éste es el escenario actual que se va a verificar !!
fetch("datosCard.json")
  .then(response => response.json()) // Transformo la información recibida en formato JSON a formato de objeto javascript
  .then(data => {

    data.forEach(object => {
      
      card8.innerHTML = `
                <img id="top" src="${data[0].img1}"></img>
                <h2>${data[0].h2}</h2>
                <p>${data[0].p}</p>
                <img id="bottom" src="${data[0].img2}"></img>
                <h3 class="precio">${data[0].h3}</h3>
            `;
      card9.innerHTML = `
                <img id="top" src="${data[1].img1}"></img>
                <h2>${data[1].h2}</h2>
                <p>${data[1].p}</p>
                <img id="bottom" src="${data[1].img2}"></img>
                <h3 class="precio">${data[1].h3}</h3>
            `
    })
  })
