function* ejemploFuncionGeneradora (){
    yield 'Valor Uno';
    yield 'Valor Dos';
    yield 'Valor Tres';
    yield 'Valor Cuatro';
    yield 'Valor Cinco';
    yield 'Valor Seis';
    yield 'Valor Siete';
    yield 'Valor Ocho';
    yield 'Valor Nueve';
    yield 'Valor Diez';
    return 'No hay más valores'
}

const ejecucionFuncionesGeneradora = ejemploFuncionGeneradora();

console.log(ejecucionFuncionesGeneradora.next());
console.log(ejecucionFuncionesGeneradora.next());
console.log(ejecucionFuncionesGeneradora.next());
console.log(ejecucionFuncionesGeneradora.next());
console.log(ejecucionFuncionesGeneradora.next());
console.log(ejecucionFuncionesGeneradora.next());
console.log(ejecucionFuncionesGeneradora.next());
console.log(ejecucionFuncionesGeneradora.next());
console.log(ejecucionFuncionesGeneradora.next());
console.log(ejecucionFuncionesGeneradora.next());
console.log(ejecucionFuncionesGeneradora.next());
console.log(ejecucionFuncionesGeneradora.next());
console.log(ejecucionFuncionesGeneradora.next());
console.log(ejecucionFuncionesGeneradora.next());


function* generadorID(){
    let id = 0;
    while(true){
        yield id++;
    }
}

const idGenerador = generadorID();
console.log(idGenerador.next());
console.log(idGenerador.next());
console.log(idGenerador.next());
console.log(idGenerador.next());
console.log(idGenerador.next());
console.log(idGenerador.next());
console.log(idGenerador.next());
console.log(idGenerador.next());
console.log(idGenerador.next());
console.log(idGenerador.next());
console.log(idGenerador.next());
console.log(idGenerador.next());
console.log(idGenerador.next());
console.log(idGenerador.next());
console.log(idGenerador.next());
console.log(idGenerador.next());
console.log(idGenerador.next());
console.log(idGenerador.next());
console.log(idGenerador.next());
console.log(idGenerador.next());
console.log(idGenerador.next());
console.log(idGenerador.next());
console.log(idGenerador.next());
console.log(idGenerador.next());
console.log(idGenerador.next());
console.log(idGenerador.next());
