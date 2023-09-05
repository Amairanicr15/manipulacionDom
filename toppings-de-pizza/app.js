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
//.querySelectorAll() nos permite seleccionar todos los elementos que cumplan con ese criterio  

// const primerToppinNaranja = document.querySelector('.topping.fondo-naranja');
// console.log(typeof primerToppinNaranja);


// usando la etiqueta ul
// const primerToppinNaranja = document.querySelector('.ul li.fondo-naranja');
// console.log(primerToppinNaranja);

//seleccionar el primer topping que no tenga el fondo marraon
const primerToppingNoMarron = document.querySelector('ul li:not(.fondo-marron)');
console.log(primerToppingNoMarron);