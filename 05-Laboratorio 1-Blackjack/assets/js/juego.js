(() => { //Patron modulo, es importante implementar el 'use strict' para este patron de modulo
    'use strict' //Restricciones

/*
*  2C = Two of Clubs
*  2D = Two of Diamonds
*  2H = Two of Hearts
*  2S = Two of Spades
*  
*  http://underscorejs.org/
*/


    let deck = [], 
        tipos = ['C','D','H','S'],
        especiales = ['A','J','Q','K'];

    // Referencial del HTML
    // Botones
    const btnPedir = document.querySelector("#btnPedir"),
          btnDetener = document.querySelector("#btnDetener"),
          btnNuevo = document.querySelector("#btnNuevo");

    // Divs
    const divCartasJugadores = document.querySelectorAll('.divCartas');

    // Small (puntos)
    const puntosHTML = document.querySelectorAll('small');
    // Declarando variables de puntos
    let puntosJugadores = [];
    //let puntosJugador = 0, puntosComputadora = 0;

    // Esta funcion inicializa el juego
    const inicializarJuego = ( numJugadores = 2) => {
        deck = crearDeck();

        for(let i=0; i<numJugadores; i++){
            puntosJugadores.push(0);
        }
        console.log({puntosJugadores})
    };

    const crearDeck = () => {
        deck = [];

        for(let i=2; i<=10; i++ ){
            for(let tipo of tipos){
                deck.push(i + tipo);
            }
        }

        for(let tipo of tipos){
            for(let esp of especiales){
                deck.push(esp + tipo);
            }
        }

        return _.shuffle(deck);
    };

    // Esta funcion me permite tomar una carta
    const pedirCarta = () => {
        if (deck.length === 0){
            throw 'No hay cartas en el deck'
        }

        return deck.pop();
    };

    //pedirCarta();

    const valorCarta = ( carta ) => {
        const valor = carta.substring(0, carta.length - 1);
        
        return ( isNaN(valor) ) ? (valor === 'A') ? 11 : 10 : valor * 1;
    };

    // Acumular puntos, Turno: 0= primer jugador y el ultimo sera la computadora
    const acumularPuntos = ( carta, turno ) => {
        puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
        puntosHTML[turno].innerText = puntosJugadores[turno];

        return puntosJugadores[turno];
    };

    const crearCarta = (carta, turno) => {
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`;
        imgCarta.classList.add('carta');
        divCartasJugadores[turno].append(imgCarta);
    }

    //Turno de la computadora
    const turnoComputadora = (puntosMinimos) => {
        let puntosComputadora = 0;
        do{
            const carta = pedirCarta();

            puntosComputadora = acumularPuntos(carta, puntosJugadores.length-1);
            crearCarta(carta, puntosJugadores.length-1);

            if( puntosMinimos > 21){
                break;
            }

        }while( (puntosComputadora < puntosMinimos) && (puntosMinimos <= 21) );

        setTimeout(() => {
        if(puntosComputadora === puntosMinimos){
            alert('Nadie gana :(');
        }else if(puntosMinimos > 21){
            alert('Computadora Gana :|');
        }else if(puntosComputadora > 21){
            alert('Jugador Gana :)');
        }else{
            alert('Computadora Gana :|');
        } 
        }, 30 );
    };

    // Eventos
    btnPedir.addEventListener('click',() => {
        const carta = pedirCarta();

        const puntosJugador = acumularPuntos(carta, 0);

        crearCarta(carta, 0);

        if(puntosJugador > 21){
            btnDetener.disabled = true;
            console.warn('Lo siento mucho, perdite')
            btnPedir.disabled = true;
            turnoComputadora(puntosJugador);
        }else if(puntosJugador === 21){
            btnDetener.disabled = true;
            console.log('21, genial haz ganado')
            btnPedir.disabled = true;
            turnoComputadora(puntosJugador);
        }
    });

    btnDetener.addEventListener('click', () => {
        btnPedir.disabled = true;
        btnDetener.disabled = true;

        turnoComputadora(puntosJugador);
    });

    btnNuevo.addEventListener('click', () =>{
        console.clear();
        inicializarJuego();
        //deck = crearDeck();

        //puntosJugador = 0;
        //puntosComputadora = 0;
        puntosHTML[0].innerText = 0;
        puntosHTML[1].innerText = 0;

        //divCartasComputadora.innerHTML = '';
        //divCartasJugador.innerHTML = '';

        btnPedir.disabled = false;
        btnDetener.disabled = false;
    });

})();