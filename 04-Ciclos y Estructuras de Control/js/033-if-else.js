let a = 5;

if (a >= 10){
    console.log('A es mayor o igual a 10')
}else{
    console.log('A es menor a 10')
}


const hoy = new Date();
let dia = hoy.getDay();
console.log({ dia })

if ( dia === 0 ){
    console.log('Domingo')
}else if ( dia === 1 ){
    console.log('Lunes')
}else if ( dia === 2 ){
    console.log('Martes')
}


const diaLetras = {
    0: 'Domingo',
    1: 'Lunes',
    2: 'Martes',
    3: 'Miercoles',
    4: 'Jueves',
    5: 'Viernes',
    6: 'Sábado'
};
console.log( diaLetras[dia] || 'Día no definido')


const diaLetras2 = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'];
console.log( diaLetras2[dia] || 'Día no definido')