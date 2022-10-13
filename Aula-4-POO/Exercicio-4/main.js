class Carro {
  constructor(marca, cor, gasolina) {
    this.marca = marca;
    this.cor = cor;
    this.gasolina = gasolina;
  }

  static sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  //dirigie e consome 1L de gasolina por segundo, mostrando no console
  async dirigir() {
    while (this.gasolina > 0) {
      console.log(this.gasolina);
      this.gasolina--;
      await Carro.sleep(1000);
      //se gasolina restando for <= 10L pergunta se quer abastecer
      if (this.gasolina === 10) {
        let abastecer = prompt(`Gasolina atual: ${this.gasolina}L\nVocê gostaria de abastecer? (S) ou (N)`);
        if (abastecer != "n" && abastecer != "N") {
          this.abastecer();
          break;
        }
      } else if (this.gasolina <= 5) {
        //avisa que está na reserva se <= 5L
        alert("SEU CARRO ESTÁ NA RESERVA");
        let abastecer = prompt("Você gostaria de abastecer? (S) ou (N)");
        if (abastecer != "n" && abastecer != "N") {
          this.abastecer();
          break;
        }
      }
    }
  }

  abastecer() {
    const quantidade = Number(prompt("Quanto você quer abastecer? (L)"));
    this.gasolina += quantidade;

    const dirigir = prompt("Você gostaria de continuar dirigindo? (S) ou (N)");
    if (dirigir != "n" && dirigir != "N") {
      this.dirigir();
    }
  }
}

const gasolinaInicial = Number(
  prompt("Quantos litros de gasolina o carro possui?")
);

const carro = new Carro("Honda", "Preto", gasolinaInicial);

carro.dirigir();
