/* Poke API */
/* Realizar una consulta de todos los pokemones con respecto a sus url */
/* Realizaremos las 1000 y fracción consultas que aplican a obtener toda la información de cada pokemón */
const solicitud = async (url) => {
    const respuestaUno = await fetch(url);
    const respuestaDos = await respuestaUno.json();
    return respuestaDos;
}

/* Primera solicitud */
/* https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0 */
const solicitudPokemones = async () => {
    const listadoPokemones = await solicitud('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0');
    return listadoPokemones;
}

const solicitudDatosPokemones = async () => {
    const arregloPokemones = await solicitudPokemones();
    const arregloPromesas = arregloPokemones.results.map((pokemonURL) => {
        return solicitud(pokemonURL.url);
    });
    const resultadoPokemones = await Promise.all(arregloPromesas);
    console.log(resultadoPokemones);
    return resultadoPokemones;
}

solicitudDatosPokemones();