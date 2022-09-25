/*
*   Dias de la semana agrimos a las 11
*   Pero los fines de semana
*/

const dia = 1;
const horaActual = 10;

let horaApertura;
let mensaje; //Esta abierto, cerrado, hoy abrimos a las XX

/*
if ( dia === 0 || dia === 6){
    console.log('Fin de Semana')
    horaApertura = 9;
}else{
    console.log('Día de semana')
    horaApertura = 11;
}

if ( horaActual >= horaApertura ){
    mensaje = 'Esta Abierto';
}else{
    mensaje = `Esta cerrado, hoy abrimos a las ${horaApertura}`;
}
*/


horaApertura = ( [0,6].includes( dia ) ) ? 9 : 11;

mensaje = ( horaActual >= horaApertura ) ? 'Esta Abierto' : `Esta cerrado, hoy abrimos a las ${horaApertura}`;


console.log({ horaApertura, mensaje })