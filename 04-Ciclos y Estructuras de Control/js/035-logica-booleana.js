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

console.warn('And')
console.log(true && true)
console.log(true && !false)

console.log('==========')
console.log(regresaFalse() && regresaTrue()) //false
console.log(regresaTrue() && regresaFalse()) //false

console.log('===== && =====')
regresaFalse() && regresaTrue()

console.log('4 condiciones', true && true && true && false)

console.log('===== or =====')
console.log(true || false)
console.log(false || false)
console.log(regresaTrue() || regresaFalse())
console.log('4 condiciones', true || true || true || false)

console.warn('Asignaciones')
const suyUndefined = undefined;
const soyNull = null;
const soyFalso =false;

const a1 = false && 'Hola Mundo' && 150;

console.log({ a1 })