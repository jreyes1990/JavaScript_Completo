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

class Heroe extends Persona{
    clan = 'Sin Clan';

    constructor(nombre, codigo, frase){
        super(nombre, codigo, frase);
        this.clan = 'Los Avengers';
    }
}

//const spiderman = new Persona('Peter Parker','Spiderman','Soy tu amable amigo Spiderman');
const spiderman = new Heroe('Peter Parker','Spiderman','Soy tu amable amigo Spi');
console.log(spiderman)