//Exercicio 8
class FolhaPagamento {
    static calcSalarioBruto(valorHora, horas) {
        const salarioBruto = valorHora * horas;
        return salarioBruto.toFixed(2);
    }

    static porcentagemIR(salarioBruto) {
        if (salarioBruto <= 900) {
            const porcentagem = 0;
            return porcentagem;
        } else if (salarioBruto > 900 && salarioBruto <= 1500) {
            const porcentagem = 5;
            return porcentagem;
        } else if (salarioBruto > 1500 && salarioBruto <= 2500) {
            const porcentagem = 10;
            return porcentagem;
        } else {
            const porcentagem = 20;
            return porcentagem;
        }
}

    static descontoIR(salarioBruto, porcentagem) {
        const descontoIR = salarioBruto * (porcentagem/100)
        return descontoIR;
    }

    static calcFgts(salarioBruto) {
        const fgts = salarioBruto * 0.11;
        return fgts;
    }

    static calcInss(salarioBruto) {
        const inss = salarioBruto * 0.1;
        return inss;
    }

    static totalDesconto(descontoIR, descontoInss) {
        const totalDesconto = descontoIR + descontoInss;
        return totalDesconto;
    }

    static salarioLiquido(salarioBruto, totalDesconto) {
        const salarioLiquido = salarioBruto - totalDesconto;
        return salarioLiquido;
    }
}

const valorHora = Number(prompt("Digite o valor da sua hora trabalhada:"));
const horas = Number(prompt("Digite a quantidade de horas trabalhadas:"));

const salarioBruto = FolhaPagamento.calcSalarioBruto(valorHora, horas);
const porcentagemIR = FolhaPagamento.porcentagemIR(salarioBruto);
const descontoIR = FolhaPagamento.descontoIR(salarioBruto, porcentagemIR);
const fgts = FolhaPagamento.calcFgts(salarioBruto);
const descontoInss = FolhaPagamento.calcInss(salarioBruto);
const totalDesconto = FolhaPagamento.totalDesconto(descontoIR, descontoInss);
const salarioLiquido = FolhaPagamento.salarioLiquido(salarioBruto, totalDesconto);

alert(`Salário bruto (${valorHora} * ${horas}) : R$ ${salarioBruto}\n(-) IR (${porcentagemIR}%) : R$ ${descontoIR}\n(-) INSS (10%) : R$ ${descontoInss}\nFGTS (11%) : R$ ${fgts}\nTotal de descontos : R$ ${totalDesconto}\n\nSalário Líquido: R$ ${salarioLiquido}`);

