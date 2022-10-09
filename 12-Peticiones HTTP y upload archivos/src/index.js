//import './styles.css';
//import { saludar } from './js/componentes.js';
//import { obtenerChiste } from './js/http-privider';
//import { init } from "./js/usuarios-page";
//import { obtenerUsuarios } from "./js/http-privider";
import * as CRUD from './js/crud_usuarios-provider';

CRUD.getUsuario(2).then(console.log);

//obtenerUsuarios().then(console.log);

//init();

//obtenerChiste().then(console.log);

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