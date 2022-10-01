//Singleton: Instancia unica de la clase

class Singleton{
    static instancia;
    nombre = '';

    constructor(nombre=''){
        if( !!Singleton.instancia ){
            return Singleton.instancia
        }

        Singleton.instancia= this;
        this.nombre = nombre;
    }
}

const instancia1 = new Singleton('Iroman');
const instancia2 = new Singleton('Spiderman');
const instancia3 = new Singleton('BlackPanther');

console.log('Nombre en la instancia 1: ',instancia1.nombre)
console.log('Nombre en la instancia 2: ',instancia2.nombre)
console.log('Nombre en la instancia 3: ',instancia3.nombre)