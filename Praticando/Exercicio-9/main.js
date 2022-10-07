//Exercicio 9
const diasDaSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

let valorInvalido = false;
do {
const numero = Number(prompt("Digite um número:"));
if (numero < 1 || numero > 7 || !parseInt(numero)) {
    alert("Valor inválido, digite um valor válido");
    valorInvalido = true;
} else {
    valorInvalido = false;
    imprimirDia(numero);
}
} while (valorInvalido)

function imprimirDia (numero) {
    alert(`${numero}- ${diasDaSemana[numero-1]}`);
}
