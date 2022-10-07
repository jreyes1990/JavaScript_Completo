import {promesaLenta,promesaMedia,promesaRapida} from './js/promesas';
import './styles.css';

Promise.race([promesaLenta,promesaMedia,promesaRapida])
        .then(console.log)
        .catch(console.warn);
