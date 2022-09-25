var separador = "###############";

const regresaTrue = () => {
    console.log('Regresa TRUE')
    return true;
}

const regresaFalse = () => {
    console.log('Regresa FALSE')
    return false;
}

console.log(`${separador} Not o la negación`)
console.warn('Not o la negación')

console.log(true) //true
console.log(!true) //false
console.log(!false) //true

console.log(!regresaFalse()) //true

