const input = document.getElementById('ingresar-tarea');
const boton = document.querySelector('button');
const listaDeTarea = document.getElementById('lista-de-tareas');

function agregarTarea() {
    if (input.value) {
        //Crear tarea
        let tareaNueva = document.createElement('div');
        tareaNueva.classList.add('tarea');

        //Texto ingresado por el usuario
        let texto = document.createElement('p');
        texto.innerText = input.value;
        tareaNueva.appendChild(texto);

        //Crear y agregar contenedor de iconos
        let iconos = document.createElement('div');
        iconos.classList.add('iconos');
        tareaNueva.appendChild(iconos);

        //Iconos
        let completar = document.createElement('i');
        completar.classList('bi', 'bi-check-circle-fill', 'icono-completar');

        let eliminar = document.createElement('i');
        eliminar.classList.add('bi', 'bi-trash3-fill', 'icono-eliminar');

        iconos.append(completar, eliminar);

        //Agregar tarea a la lista 
        listaDeTarea.appendChild(tareaNueva);
    } else {
        alert('Por favor ingresa una tarea');
    } 
}

boton.addEventListener('click', agregarTarea);