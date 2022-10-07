//Exercicio 4
 const arrayNum = []

 arrayNum.push(parseFloat(prompt("Digite o primeiro numero")));
 arrayNum.push(parseFloat(prompt("Digite o segundo numero")));
 arrayNum.push(parseFloat(prompt("Digite o terceiro numero")));

 const maiorNum = arrayNum.reduce((maiorNum, numAtual) => {
    if (numAtual >= maiorNum) {
        return numAtual;
    } else {
        return maiorNum;
    }
 }, arrayNum[0])

 const menorNum = arrayNum.reduce((menorNum, numAtual) => {
    if (numAtual <= menorNum) {
        return numAtual;
    } else {
        return menorNum;
    }
 }, arrayNum[0])

 alert(`O maior número é: ${maiorNum}\n O menor número é: ${menorNum}`);