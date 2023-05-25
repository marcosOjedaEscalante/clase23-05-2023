/* Generar un código que permita solicitar la información de todos los nombres de usuario
   que se ingresen en la caja del index.html */

const btnConsultar = document.querySelector('#btnConsultar');
btnConsultar.addEventListener('click', () => {
    const txtNombreUsuario = document.querySelector('#txtNombreUsuario');
    const arregloNuevo = txtNombreUsuario.value.split(',').map(cadena => cadena.trim());
    const arregloPromesas = [];
    arregloNuevo.forEach((cadena) => {
        arregloPromesas.push(fetch(`https://jsonplaceholder.typicode.com/users?username=${cadena}`));
    });
    Promise.all(arregloPromesas)
        .then((response) => Promise.all(response.map((respuesta) => respuesta.json())))
        .then((json) => json.forEach((usuario) => console.log(usuario)));
});

/* Promise.all(arregloPromesas)
        .then((response) => {
            console.log(response);
            return Promise.all(response.map((respuesta) => {
                return respuesta.json();
            }));
        })
        .then((json) => {
            json.forEach((usuario) => {
                console.log(usuario);
            });
        }); */