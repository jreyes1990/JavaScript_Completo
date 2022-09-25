function saludar(nombre){
    console.log(arguments)
    console.log('Hola '+ nombre)
}

const saludar2 = function(nombre){
    console.log(arguments)
    console.log('Hola '+ nombre)
}

const saludarFlecha = (nombre) => {
    
    console.log('Hola '+ nombre)
}


saludar('Jolberth',32,true,'Guatemala');
saludar2('Alberto',31,true,'El Salvador');
saludarFlecha('Sherly',9,false,'Guatemala');


function sumar(a, b){
    var resultado = a + b;
    return resultado;
}

const sumar2 = (a, b) => {
    var resultado = a + b;
    return resultado;
}

function getAleatorio(){
    var resultado = Math.random();
    return resultado;
}

const getAleatorio2 = () => Math.random();

console.log(sumar(sumar(sumar(2,5),10),35))
console.log(sumar2(15,35))
console.log(getAleatorio())
console.log(getAleatorio2())