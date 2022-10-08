//import './styles.css';
//import { saludar } from './js/componentes.js';
import { obtenerChiste } from './js/http-privider';


obtenerChiste().then(console.log);

/*
const jokeUrl = 'https://api.chucknorris.io/jokes/random';

fetch(jokeUrl)
    .then(resp => resp.json())
    .then(({id, value}) => {
    console.log(id, value)
});
*/

/*
fetch(jokeUrl).then(resp => {
    console.log(resp)
});
*/