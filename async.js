const promesaUno = async () => {
    return 'Función uno';
}

const promesaDos = async () => {
    return 'Función dos';
}

const promesaTres = async () => {
    return 'Función tres';
}

const ejecutando = async () => {
    console.log('Inicio');
    const mensajeUno = await promesaUno();
    console.log(mensajeUno);
    const mensajeDos = await promesaDos();
    console.log(mensajeDos);
    const mensajeTres = await promesaTres();
    console.log(mensajeTres);
    console.log('Final');
}

ejecutando();