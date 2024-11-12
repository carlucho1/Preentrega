Este proyecto lo emprendí con un esquema de múltiples páginas, en donde cada una tienen tres etiquetas semánticas comunes que son el header, el nav superior (debajo del header) y el footer. Todas las páginas también tienen un main como 
etiqueta semántica. Por ahora las páginas son:

index.html (enlace titulado 'Inicio' en la barra de navegación), 
quienes.html (enlace titulado 'Quiénes somos' en la barra de navegación), 
productos.html (enlace titulado 'Productos' en la barra de navegación), 
contacto.html (enlace titulado 'Contacto' en la barra de navegación), 

En la página principal, la sección de main está comprendida por una serie de cards que se ubican en un contenedor con flex con wrap habilitado (cuya estructura puede verse en el fichero card.html, ubicado en la carpeta html). El formulario lo construí en la página contactos.html, en donde también incorporé un iframe. En cuanto a la responsividad, hecha a través de media queries, por ahora es responsivo el footer. Se pensó en pantallas de celular con un ancho de 412 pixeles. 

Por último (si bien entiendo que me adelanté al tema) me pregunté cómo podría hacerse para no tener que repetir la tediosa tarea de copiar en las distintas páginas html las estructuras repetitivas como lo son en este caso el header, el nav y
el footer y encontré una solución muy interesante que usa 'fetch'. La idea es escribir en un fichero la parte que se repite (la prueba la hice para la sección del footer), y luego en cada página esa sección se inserta con un fetch dentro de
un div (Commit f64f860 y Commit 639222e).
