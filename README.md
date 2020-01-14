## **Ejercicio de evaluación final: realizar un proyecto con REACT**

El ejercicio consiste en desarrollar una página web con un listado de personajes de Rick and Morty, que podemos filtrar por el nombre del personaje. En el listado podemos acceder, pinchando en el personaje que queramos, a la información del mismo.

**Las distintas partes del ejercicio son:**
 - *Listado de personajes*
En primer lugar, se realiza una web con el listado de personajes de Rick and Morty. Para eso, se  utiliza el servicio de https://rickandmortyapi.com/documentation/#get-all-characters que devuelve información sobre los primeros 20 personajes de la serie. Sobre cada uno se pinta:
	 - Foto
	 - Nombre
	 - Especie
 
 - *Filtrado de personajes*
Cuando el listado de personajes ya aparece en pantalla, la segunda parte consiste en poder buscarlos por su nombre. Para eso, se añade un input a la interfaz, de forma que al ir escribiendo un nombre queden en la interfaz solo los personajes cuyo nombre contiene las letras escritas. Además, se tiene en cuenta si las letras se introducen en mayúsculas o minúsculas.

 - *Componentes del listado de personajes*
El listado debe tener los siguientes componentes como mínimo:
	 - Componente para los filtros 
	 - Componente para el listado 
	 - Componente para la tarjeta de cada personaje del listado
	 - Componente para el detalle de cada personaje

 - Detalle de personajes
También se implementa una nueva funcionalidad: al hacer clic sobre la tarjeta de un personaje, su información aparecerá a pantalla completa. Para hacer esto se usan rutas y React router. En la pantalla de detalle aparecerá además de la foto, nombre y especie, el planeta de origen, el número de episodios en los que aparece y si está vivo o muerto.

**BONUS: Mejoras visuales**
Para terminar, se realizan algunas mejoras visuales del ejercicio, como:

- Mostrar la especie y si un personajes está muerto mediante un icono.
- Usar flexbox para pintar el listado de personajes.
- Que tenga un diseño responsive.

**BONUS: URL compartible**
La URL del detalle de personaje es compartible, es decir, que si se visita esa URL directamente en el navegador se ve el detalle del personaje elegido.