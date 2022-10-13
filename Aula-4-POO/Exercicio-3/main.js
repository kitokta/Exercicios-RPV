//Exercicio 3
const vogais = ['a', 'e', 'i', 'o', 'u'];
let letra = ""
do {
    letra = prompt("Digite uma letra");
} while (letra.length != 1);

if (vogais.includes(letra.toLowerCase())) {
    alert(`(${letra}) é uma vogal`)
} else {
    alert(`(${letra}) é uma consoante`)
}
