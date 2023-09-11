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




