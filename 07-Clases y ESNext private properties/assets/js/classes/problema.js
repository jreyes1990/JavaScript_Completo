// Compatilidad de JavaScript : https://caniuse.com/

// Esto se debe de crear con la palabra new
function Persona(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;

    this.imprimir = function(){
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`)
    }
};

const maria = new Persona('Maria',28);
const carmne = new Persona('Carmen',29);

maria.imprimir();
carmne.imprimir();