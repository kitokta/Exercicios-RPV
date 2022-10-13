//Exercicio 1
const num1 = parseFloat(prompt("Digite o primeiro número:"));
const num2 = parseFloat(prompt("Digite o o segundo número:"));

if (num1>num2) {
    alert(`O maior número é: ${num1}`)
} else if (num2>num1) {
    alert(`O maior número é: ${num2}`)
} else {
    alert("Os números são iguais");
}