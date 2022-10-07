//Exercicio 5

const produto1 = Number(prompt("Digite o preço do primeiro produto:"));
const produto2 = Number(prompt("Digite o preço do segundo produto:"));
const produto3 = Number(prompt("Digite o preço do terceiro produto:"));

const precos = [];
precos.push(produto1, produto2, produto3);

const menorNum = precos.reduce((menorNum, numAtual) => {
    if (numAtual <= menorNum) {
        return numAtual;
    } else {
        return menorNum;
    }
 }, precos[0])

let indexPreco = precos.indexOf(menorNum);
indexPreco++;

 alert(`O produto ${indexPreco} de preço R$${menorNum} é o mais barato.`);
