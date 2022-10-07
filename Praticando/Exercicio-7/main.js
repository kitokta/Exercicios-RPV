
//Exercicio 7
let salario = Number(prompt("Digite o salário do colaborador:"))

const colaborador = new Object();
colaborador.salarioAntigo = salario;

if (salario<=280) {
    salario += salario * 0.2;
    reajuste(salario, 0.2);
} else if (salario > 280 && salario <=700) {
    salario += salario * 0.15;
    reajuste(salario, 0.15);
} else if (salario > 700 && salario <=1500) {
    salario += salario * 0.1;
    reajuste(salario, 0.1);
} else {
    salario += salario * 0.05;
    reajuste(salario, 0.05);
}

alert(`Salario Antigo: R$${colaborador.salarioAntigo}\nSalario Novo = R$${colaborador.salarioNovo}\nPercentual de aumento: ${colaborador.aumentoPercentual}\nAumento Total: R$${colaborador.aumentoTotal}`);


function reajuste(salario, percentual) {
    colaborador.salarioNovo = salario.toFixed(2);
    colaborador.aumentoTotal = colaborador.salarioNovo - colaborador.salarioAntigo;
    colaborador.aumentoPercentual = `${percentual*100}%`;
}