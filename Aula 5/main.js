//1- letras maiusculas
const somenteMaiusculas  = /^[A-Z]+$/; 
console.log(somenteMaiusculas.test('GABB')); 

//outra forma de fazer o 1, mas nao vai excluir numero ou caracter especial:
// const somenteMaiusculas  = /[^a-z]/; 
// console.log(somenteMaiusculas.test('GAB')); 

//2 - string terminada em ID
const stringId  = /id$/; 
console.log(stringId.test('123aid'));

//3 - "Marca: nomeDaMarca"
const marcaRegex = /^Marca: nomeDaMarca$|Nike$|Adidas$|Puma$|Asics$/;
console.log(marcaRegex.test('Marca: Nike'))

//4- IP
const ip = /^\d{3}.\d{1,3}.\d{1,3}.\d{1,3}$/;
console.log(ip.test('127.167.88.18'))

//5 - usuarios Aceita letras de a-z, _ e - , números de 0-9, mínimo de 3 caracteres e máximo de 16.

const usuario = /^[a-zA-Z0-9-_]{3,16}$/
console.log(usuario.test('gab999_125zanini'))


