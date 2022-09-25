function crearPersona(nombre, apellido){
    return {
        nombre: nombre,
        apellido: apellido
    }
}


const crearPersona2 = (nombre, apellido) => ({nombre, apellido});


const persona = crearPersona('Jolberth','Reyes');
const persona2 = crearPersona2('Alberto','Lopez');

console.log(persona)
console.log(persona2)


function imprimeArgumentos(){
    console.log(arguments)
}


const imprimeArgumentos2 = (edad, ...arguments) => {
    //console.log({edad, arguments})
    return arguments
}

imprimeArgumentos(10,true,false,'Jolberth','Lopez');
imprimeArgumentos2(70,false,true,'Alberto','Reyes');

const [casado, vivo, nombre, saludo] = imprimeArgumentos2(10,true,false,'Jolberth','Lopez');
console.log({casado, vivo, nombre, saludo})

const {apellido: nuevoApellido} = crearPersona('Jolberth','Reyes');
console.log({nuevoApellido})


let tony = {
    nombre: 'Tony Start',
    codeName: 'Iroman',
    vivo: false,
    edad: 40,
    trajes: ['Mark I','Mark V','Hulkbuster']
}

const imprimePropiedades = ({nombre, codeName, vivo, edad=15, trajes}) => {
    console.log({nombre})
    console.log({codeName})
    console.log({vivo})
    console.log({edad})
    console.log({trajes})
}

imprimePropiedades( tony );