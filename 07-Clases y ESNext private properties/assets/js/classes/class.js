class Persona {
    static _conteo = 0;

    static get conte(){
        return Persona._conteo + ' instancias';
    }

    nombre = '';
    codigo = '';
    frase = '';
    comida = '';

    constructor(nombre='Sin nombre', codigo='Sin codigo',frase='Sin frase'){ //Metodo que se ejecuta mediante una instancia
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;

        Persona._conteo++;
    }

    set setComidaFavorita(comida){
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita(){
        return `La comida favorita de ${this.nombre} es ${this.comida}`
    }

    quienSoy(){
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`)
    }

    miFrase(){
        this.quienSoy();
        console.log(`${this.codigo} dice: ${this.frase}`)
    }
}

const spiderman = new Persona('Peter Parker','Spiderman','Soy tu amable amigo Spiderman');
//const iroman = new Persona('Tony Stark','Iroman','Yo soy Iroman');


//console.log(iroman)
console.log(spiderman)

spiderman.setComidaFavorita = 'El pie de cereza de la tia May';

console.log(spiderman.getComidaFavorita)

console.log('Conteo Stático Persona(s): ',Persona._conteo)
console.log('Conteo Instancia Persona(s): ',Persona.conte)