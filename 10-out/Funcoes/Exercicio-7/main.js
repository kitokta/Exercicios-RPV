//Exercicio 7
function numeroPositivo(num) {
    return Math.abs(num);
}

const numNegativo = -15;
const numPositivo = numeroPositivo(numNegativo);

console.log(`O número negativo: ${numNegativo}\nO número positivo: ${numPositivo}`);