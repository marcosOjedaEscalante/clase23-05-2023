/* En base a un username ingresado mostrar todos los posteos de dicho usuario */
/* Endpoint para usuario por username */
/* https://jsonplaceholder.typicode.com/users?username=Bret */
/* Endpoint para posteos por userId */
/* https://jsonplaceholder.typicode.com/posts?userId=1 */

const btnConsultar = document.querySelector('#btnConsultar');
btnConsultar.addEventListener('click', () => {
    const txtNombreUsuario = document.querySelector('#txtNombreUsuario');
    const http1 = new XMLHttpRequest();
    const url1 = `https://jsonplaceholder.typicode.com/users?username=${txtNombreUsuario.value}`;
    http1.open("GET", url1);
    http1.onreadystatechange = () => {
        if (http1.readyState === 4 && http1.status == 200) {
            /* console.log(JSON.parse(http1.responseText)[0].id); */
            const id = JSON.parse(http1.responseText)[0].id;
            const http2 = new XMLHttpRequest();
            const url2 = `https://jsonplaceholder.typicode.com/posts?userId=${id}`;
            http2.open("GET", url2);
            http2.onreadystatechange = () => {
                if (http2.readyState === 4 && http2.status == 200) {
                    console.log(JSON.parse(http2.responseText));
                }
            }
            http2.send()
        }
    };
    http1.send();
});

