document.addEventListener('DOMContentLoaded', function () {
    const formCrearProyecto = document.getElementById('form-crear-proyecto');
    const listaProyectos = document.getElementById('lista-proyectos');

    formCrearProyecto.addEventListener('submit', function (event) {
        event.preventDefault();
        
        // Obtener el nombre del proyecto ingresado por el usuario
        const nombreProyecto = document.getElementById('nombre-proyecto').value;

        // Crear un nuevo elemento de lista para mostrar el proyecto
        const nuevoProyecto = document.createElement('li');
        nuevoProyecto.textContent = nombreProyecto;

        // Agregar el nuevo proyecto a la lista de proyectos
        listaProyectos.appendChild(nuevoProyecto);

        // Limpiar el campo de entrada después de agregar el proyecto
        document.getElementById('nombre-proyecto').value = '';
    });
});
