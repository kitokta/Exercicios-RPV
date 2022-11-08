class Conta {
  constructor(nome) {
    this.contas = [
      {
        id: 0,
        tipo: "corrente",
        saldo: 1000,
      },
      {
        id: 1,
        tipo: "poupanca",
        saldo: 1000,
        juros: 2,
      },
    ];

    this.nome = nome;
  }

  //coloquei por ID por que tecnicamente saberiamos qual id do tipo de conta na vida real... mas poderia pedir o tipo de conta e por um IF pra usar o ID especifico pra cada uma.

  deposito(quantidade, id) {
    this.contas[id].saldo += quantidade;
  }

  saque(quantidade, id) {
    this.contas[id].saldo = this.contas[id].saldo - quantidade;
  }

  transferencia(quantidade) {
    // this.contas[0].saldo += quantidade;
    // this.contas[1].saldo = this.contas[1].saldo - quantidade;
    // duas formas (talvez essa que to usando nao seja a ideal no quesito responsabilidade de funcao)
    this.deposito(quantidade, 0);
    this.saque(quantidade, 1);
  }

  //aplicacao do juros
  aplicarJuros() {
    this.contas[1].saldo += this.contas[1].saldo * this.contas[1].juros;
  }
}

class ContaEspecial extends Conta {
  constructor(nome) {
    super(nome, nome);
    this.contas[1].juros = this.contas[1].juros * 2;
  }
}

const contaEspecial = new ContaEspecial("Gab");
const conta = new Conta("Gab");

//Conta Especial
console.log(contaEspecial);

//Conta normal
//Para testar vai ter que ir testando comando por comando no console, por que ele sempre mostra o objeto atualizado.
console.log("Conta normal:");
console.log(conta);

conta.deposito(1000, 0);
conta.deposito(2000, 1);
console.log("Conta após deposito:");
console.log(conta);

console.log("Conta após transferência:");
conta.transferencia(500);
console.log(conta);

conta.saque(500, 0);
console.log("Conta após saque:");
console.log(conta);

//testando método da conta especial
contaEspecial.deposito(5000, 1);
console.log("Conta especial após deposito:");
console.log(contaEspecial);

contaEspecial.aplicarJuros();
console.log("Conta após aplicar juros:");
console.log(contaEspecial);
