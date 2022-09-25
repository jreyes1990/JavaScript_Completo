var separador = "###############";

let personaje = {
    nombre: 'Tony Start',
    codeName: 'Iroman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I','Mark V','Hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu California'
    },
    'ultima-pelicula': 'Infinity War'
}

console.log(personaje)
console.log('Nombre: ',personaje.nombre)
console.log('Nombre: ',personaje['nombre'])
console.log('Edad: ',personaje.edad)

console.log('coords: ',personaje.coords)
console.log('Lat: ',personaje.coords.lat)

console.log('No. Trajes: ',personaje.trajes.length)

console.log('Ultimo traje',personaje.trajes[personaje.trajes.length - 1])

console.log(personaje["ultima-pelicula"])


console.log(`${separador} Más detalle de objetos literales`)
delete personaje.edad
console.log(personaje)

personaje.casado = true;

const entriesPares = Object.entries(personaje);
console.log(entriesPares)

Object.freeze(personaje);
personaje.direccion.ubicacion = 'Costa Rica'
console.log(personaje)

const propiedades = Object.getOwnPropertyNames(personaje);
const valores = Object.values(personaje);
console.log({propiedades, valores})