// const titulo = document.getElementById('titulo');
// console.log(titulo);

// const toppings = document.getElementsByClassName('topping');
// console.log(toppings[3]);

//seleccionar todos los elementos que tenga etiqueta especifica html. Acceder a todos los elementos li de mi elemento ul 

// const misToppings = document.getElementsByTagName('li');
// console.log(misToppings);

// const toppingsFondoMarron = document.getElementsByClassNam('fondo-marron');
// console.log(toppingsFondoMarron);

//Seleccionar elementos en base a elementos que cumplen un selector css especifico   
//.querySelector() nos permite seleccionar el primer criterio que cumpla 


// const primerToppinNaranja = document.querySelector('.topping.fondo-naranja');
// console.log(typeof primerToppinNaranja);


// usando la etiqueta ul
// const primerToppinNaranja = document.querySelector('.ul li.fondo-naranja');
// console.log(primerToppinNaranja);

//seleccionar el primer topping que no tenga el fondo marraon
// const primerToppingNoMarron = document.querySelector('ul li:not(.fondo-marron)');
// console.log(primerToppingNoMarron);



// const toppingsNaranja = document.querySelectorAll('.topping.fondo-naraja');
// console.log(toppingsNaranja);


//
//Es muy útil si quiero cambiar el estilo o el valor de una propiedad en css 
// const primerTopping = document.querySelector('.topping');
// console.log(primerTopping)

// primerTopping.style.backgroundColor = 'blue';
// primerTopping.style.color = '#6dff00';
// primerTopping.style.textTransform = 'uppercase';

// console.log(primerTopping.style);


//Siempre en cualquier operación relacionada con el DOM debemos tener ese elemento 

// const listaDeToppings = document.getElementById('lista-toppings');
// console.log(listaDeToppings);

// const listaDeToppings = document.getElementById('lista-toppings');

// console.log('> innerText');
// console.log(listaDeToppings.innerText);

//aqui incluye los espacios que tiene en el archivo html 
// console.log('> textContent');
// console.log(listaDeToppings.textContent);

//va a retornar la estructura html interna de ese elemento como una cadena de caracteres 
// console.log('> innerHTML');
// console.log(listaDeToppings.innerHTML);


//También podemos modificarlo 
// const titulo = document.getElementById('titulo');
// console.log(titulo.innerText);

//PARA QUITAR EL EMOJI Y CAMBIAR EL NOMBRE DE TOPPINGS DE PIZZA 
const titulo = document.getElementById('titulo');

//si eliminamos esta linea se vera la que esta en el html
titulo.innerText = 'Mis Toppings Favoritos';





// ------------ATRIBUTOS
//Como modificar los atributos de un elemento 
const enlaces = document.getElementsByTagName('a');
console.log(enlaces[0].setAttribute('href', 'https://www.freecodecamp.org'));

//Para modificar se utiliza setAttribute
//Para obtenerlo se utiliza el getAttribute
//Para eliminar se utiliza el remove:
//console.log(enlaces[0].removeAttribute('href'));






// ------------CLASES
// const primerTopping = document.querySelector('.topping');
// console.log(primerTopping.classList);

//Agregar un clase a un elemento
// const primerTopping = document.querySelector('.topping');
// primerTopping.classList.add('texto-verde');
// console.log(primerTopping.classList);





// ------------Verificar si una clase existe 
//Saber si un elemento posee una clase o no, eso se puede saber con el método contains - este nos permite verificar si una clase existe en esa lista de clases 
// const primerTopping = document.querySelector('.topping');
// console.log(primerTopping.classList.contains('fondo-marron'));
//-- false console.log(primerTopping.classList.contains('fondo-azul'));
// console.log(primerTopping.classList);





// ------------Eliminar una clase 
//Eliminar una clase de un elemento 

// const primerTopping = document.querySelector('.topping');
// primerTopping.classList.remove('topping');
// console.log(primerTopping.classList);





// ------------Crear un elemento desde cero
// Crear un elemento desde cero con JavaScript y luego agregar ese elemento al DOM de forma dinámica. Eso es muy útil cuando lo recibes información de un servidor o de una app 

// const listaDeToppings = document.getElementById('lista-toppings'); 

// const toppingNuevo = document.createElement('li');
// toppingNuevo.classList.add('topping', 'fondo-marron');
// toppingNuevo.innerText = 'Queso Extra';

//listaDeToppings.appendChild(toppingNuevo);

//listaDeToppings.append('Hola mundo');

//con esto se elimina los elementos 
// toppingNuevo.remove();


//------------------Recorrer el DOM
// JavaScript nos permite aprovechar esta jerarquia con padres, hijos, los hermanos nos va a permitir recorrer el DOM con el código  en caso de necesitarlo.
//Si quiero hacer una operación con su elemento o nodo padre, puedo selecionar una de dos opciones parentElement o parentNode 


//Node es más amplio, incluye texto o comentarios
//Element solo incluye los elementos HTML 
const listaDeToppings = document.getElementById('lista-toppings');

// console.log(listaDeToppings.parentElement);
// console.log(listaDeToppings.parentNode);
// console.log(listaDeToppings.parentElement.parentElement);
//console.log(listaDeToppings.children);

//primer hijo
//console.log(listaDeToppings.firstChild);

//acceso al primer hijo directo
//console.log(listaDeToppings.children[0]);

//este usa nodos, tendremos texto también 
//console.log(listaDeToppings.lastChild);

//para obtener elementos HTML 
//console.log(listaDeToppings.firstElementChild);

//equivalente para el proximo elemento 
//console.log(listaDeToppings.lastElementChild);

//que no incluya el texto ni los comentarios 
//console.log(listaDeToppings.lastChild);

//Obtener los hermanos de toppings - obtener el hermano anterior 
console.log(listaDeToppings.previousElementSibling);

//Obtener el proximo elemento 
console.log(listaDeToppings.nextElementSibling);

//para trabajar con nodos, si omitimos la palabra element 
console.log(listaDeToppings.nextSibling);

//también nos retorna texto
console.log(listaDeToppings.previousSibling);

//viajar a traves del DOM o recorrerlo con notación de punto, con estas propiedades: parentElement y parentNode, children para todos los hijos, firstChild y firstElementChild, lastChild y lastElementChild  y nextSibling y nextElementSibling y previousSibling y previousElementSibling para padres, hijos y hermanos 





//-------EVENTOS DEL DOM 
//Evento: "algo" que ocurre en el sitio web como resultado de interacción con el usuario o por otra causa como cambios en el estado del dispositivo o de la ventana.
// El más común es el evento del click, cuando estamos usando un mouse  para interactuar con los elementos si hacemos un click sobre algo (botón, formulario, imagen) cada uno de estos clicks se van a registrar como un evento en el navegador, y el navegador va a saber sobre cual de esos elementos se hizo el click y en caso de que ocurra el click que se hara en el código, como manejar ese evento. 
//Otro evento es presionar una tecla, se puede lograr que ciertos elementos que nos interesan en el DOM sepan cuando ocurre uno de esos eventos, cual de esos elementos fue afectado y de reaccionar en base a ese evento y también cual de esas teclas fue presionada 
// cambios tamaño de la ventana, navegador, rastrar, touch, 



//----------CONCEPTOS IMPORTANTES
//Cuando hablamos sobre eventos en el DOM y al momento de trabajarlo con JavaScript 
// Elemeneto target (blanco) elemento que va a recibir el evento --> Si hacemos click en una página web sobre alguno de esos elementos (imagen, botón), algo que tenga una capacidad interactiva, ese elemento en el cual se va a generar ese evento, porque el usuario quizo interactuar con ese elemento asi que hay que reaccionar a esa interaccion y maneajarla adecuadamente. El elemento blanco va a decirle al navegador (hey! aquí ocurrio algo) ocurrio un evento, cómo lo manejo?, qué vamos hacer? 

// Trigger - desencadenante ----> es la acción que va a desencadenar un evento, por ejemplo hacer click (esa acción de hacer click va a desencadenar el elemento de click  que luego se va a poder manejar a traves del DOM y JavaScript )

// Event Handler -----> Función que se ejecuta cuando ocurre un evento. Se trabaja con eventos y también con librerías y frameworks más avanzados como por ejemplo React. Handler -- manejar: es una función que va a manejar un evento cuando ocurra pero no  podemos saber cuando ocurra ese evento, asi que va a estar ahí viendo si ocurre ese evento en el DOM en el navegador para estar lista y ejecutarse en el evento. Asociar un tipo de evento con una función para decirle al navegador que cuando ocurra un evento especifico en un elemento especifico vamos a llamar una función especifica. 

// Event Listener  ------> Esta asociación que hay entre un evento especifico en un elemento y la función que lo va a manejar es lo que denominamos. Listen - escuchar. Escuchador de eventos. Es esa conexión que vamos a crear en nuestro código, tenemos que crearla explicitamente en JavaScript para asociar un evento  en un elemento con una función especifica que va a manejar ese evento en ese elemento. Cuando en ese elemento especifico ocurra un evento se va a llamar a esa función. Esta asociación la tenemos que crear nosotros mismos en el programa. Cuando creamos un evento listener estamos escuchando ese evento (estamos diciendole al elemento: hey! cuando ocurra este evento ya sabes lo que vas hacer, llamas a esta función y ejecutas el código) pero como el DOM o el navegador no sabe cuando va a ocurrir ese evento, tiene que estar pendiente a que ocurra. 



//------- EVENTOS EN HTML
// EventListener y como ejecutar codigo cuando ocurra un evento en algun elemento del DOM



//addEventListener en el DOM 

//-------PROYECTO COLORES ALEATORIOS 
//Codigo extradecimal para un color para representar un color en css (hexadecimal o rgb)
//hexadecimal: tiene 16 opciones para cada caracter y en total el color tiene 6 colores de 0 a 9 o de a a f 
//rgb:
