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
const primerTopping = document.querySelector('.topping');
primerTopping.classList.add('texto-verde');
console.log(primerTopping.classList);
