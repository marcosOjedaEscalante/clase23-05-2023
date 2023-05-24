const solicitudPromesa = (url) => {
    let recurso;
    const promise = new Promise((resolve, reject) => {
        const http = new XMLHttpRequest();
        http.open("GET", url, false);
        http.onreadystatechange = () => {
            if(http.readyState==4&&http.status==200){
                recurso = JSON.parse(http.responseText);
            }
        }
        http.send();
        if(recurso.length >= 1){
            resolve(recurso);
        }
        reject(`El recurso no existe`);
    });
    return promise;
}

const btnConsultar = document.querySelector('#btnConsultar');
btnConsultar.addEventListener('click', () => {
    const txtNombreUsuario = document.querySelector('#txtNombreUsuario');
    const url = `https://jsonplaceholder.typicode.com/users?username=${txtNombreUsuario.value}`
    solicitudPromesa(url)
        .then((usuario) => {
            const url = `https://jsonplaceholder.typicode.com/posts?userId=${usuario[0].id}`;
            solicitudPromesa(url)
                .then((posteos) => console.log(posteos))
                .catch((error) => console.log(error));
        })
        .catch((error) => console.log(error));
});

