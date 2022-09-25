var separador = "###############";

let juegos = ['Zelda','Mario','Metroid','Chrono'];
console.log(juegos)

let primero = juegos[2-2];
let ultimo = juegos[juegos.length-1]
console.log({primero,ultimo})

console.log(`${separador} Mostrando arreglo con forEach`)
juegos.forEach((elemento,indice,arr)=>{
    console.log({elemento,indice,arr})
});

console.log(`${separador} Agregando elemento al final del arreglo`)
let nuevaLonguitud = juegos.push('F-Zero');
console.log({nuevaLonguitud,juegos})

console.log(`${separador} Agregando elemento al inicio del arreglo`)
nuevaLonguitud = juegos.unshift('Fire Emblem');
console.log({nuevaLonguitud,juegos})

console.log(`${separador} eliminando elemento final del arreglo`)
let juegoBorrado = juegos.pop();
console.log({juegoBorrado,juegos})

console.log(`${separador} eliminando elemento especifico del arreglo`)
let pos = 1;
let juegosBorrados = juegos.splice(pos,2);
console.log({juegosBorrados,juegos})

console.log(`${separador} Ubicando posicion del arreglo`)
let metroIndex = juegos.indexOf('Metroid');
console.log(metroIndex)
