class ContaBanco {
    constructor(nome, saldo) {
        this.nome = nome;
        this.saldo = saldo;
    }

    deposito(quantidade) {
        this.saldo += quantidade;
    }

    saque(quantidade) {
        this.saldo = this.saldo - quantidade;
    }
}

let conta = new ContaBanco('Gab', 10000);

console.log(conta);

conta.deposito(2000);
console.log(conta);

conta.saque(10000);
console.log(conta)