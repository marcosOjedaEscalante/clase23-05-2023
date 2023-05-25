const promesaUno = () => {
    return new Promise((resolve, reject) => {
        resolve('Función uno');
    });
}

const promesaDos = () => {
    return new Promise((resolve, reject) => {
        resolve('Función dos');
    });
}

const promesaTres = () => {
    return new Promise((resolve, reject) => {
        resolve('Función tres');
    });
}

const ejecutando = () => {
    console.log('Inicio');
    promesaUno().then((mensaje) => {
        console.log(mensaje);
        promesaDos().then((mensaje) => {
            console.log(mensaje);
            promesaTres().then((mensaje) => {
                console.log(mensaje);
            });
        });
    });
    console.log('Final');
}

const ejectuandoTresPromesas = () => {
    console.log('Inicio');
    Promise.all([promesaUno(), promesaDos(), promesaTres()])
        .then((response) => {
            console.log(response);
        });
    console.log('Final');
}

ejecutando();
ejectuandoTresPromesas();