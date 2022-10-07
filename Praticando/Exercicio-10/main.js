//Exercicio 10
let nota1;
let nota2;
do {
nota1 = Number(prompt("Digite a primeira nota:"))
nota2 = Number(prompt("Digite a segunda nota:"));
} while (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10)

const media = (nota1 + nota2)/2

if (media >= 9) {
    alert(`Média: ${media}\nConceito: A`)
} else if (media < 9 && media >= 7.5) {
    alert(`Média: ${media}\nConceito: B`)
} else if (media < 7.5 && media >= 6) {
    alert(`Média: ${media}\nConceito: C`)
} else if (media < 6 && media >= 4) {
    alert(`Média: ${media}\nConceito: D`)
} else if (media < 4 && media >= 0) {
    alert(`Média: ${media}\nConceito: D`)
}