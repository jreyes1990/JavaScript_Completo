//import {promesaLenta,promesaMedia,promesaRapida} from './js/promesas';
import {buscarHeroe,buscarHeroeAsync} from './js/promesas';
import './styles.css';

buscarHeroe('capi2')
        .then(heroe => console.log(heroe))
        .catch(console.warn);

buscarHeroeAsync('iron2')
        .then(heroe => console.log(heroe))
        .catch(console.warn);


/*
Promise.race([promesaLenta,promesaMedia,promesaRapida])
        .then(console.log)
        .catch(console.warn);
*/