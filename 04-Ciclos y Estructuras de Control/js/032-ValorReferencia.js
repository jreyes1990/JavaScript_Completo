var separador = "###############";

console.log(`${separador} Operador spread, para romper la relacion`)

let juan = { nombre: 'Juan' };
let ana = { ...juan };
ana.nombre = 'Ana';

console.log({ juan, ana})


console.log(`${separador} Funcion`)
const cambiaNombre = ({ ...persona }) => {
    persona.nombre = 'Tony';
    return persona;
}

let peter = { nombre: 'Peter' };
let tony = cambiaNombre( peter );
console.log({ peter, tony})


console.log(`${separador} Arreglos`)
const frutas = ['Manzana','Pera','Piña'];
console.time('spread')
const otrasFrutas = [...frutas];
console.timeEnd('spread')

//const otrasFrutas = frutas.slice();

otrasFrutas.push('Mango');

console.log({ frutas, otrasFrutas })