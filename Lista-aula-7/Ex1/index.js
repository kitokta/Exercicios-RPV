class Empregado {
  constructor(nome, sobrenome, salarioMensal) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.salarioMensal = salarioMensal;
  }

  //altera somente um atributo
  setAtributo(atributo, novoValor) {
    this[atributo] = novoValor;
  }

  //busca somente um atributo
  getAtributo(atributo) {
    return this[atributo];
  }

  //metodo estatico da classe pra aumento geral
  static setAumento(listaEmpregados) {
    for (let index in listaEmpregados) {
      listaEmpregados[index].salarioMensal +=
        listaEmpregados[index].salarioMensal * 0.1;
    }
    console.log(listaEmpregados);
  }

  //metodo para buscar dados de todos empregados
  static getEmpregados(listaEmpregados) {
      console.log(listaEmpregados);
  }

  static getSalarioAnual(listaEmpregados) {
    for (let index in listaEmpregados) {
      console.log(`Nome: ${listaEmpregados[index].nome}\nSalario Anual: R$${listaEmpregados[index].salarioMensal * 12}`)
    }
    
  }
}

let listaEmpregados = [];

listaEmpregados.push(new Empregado("Gb", "Zanini", 10000));
listaEmpregados.push(new Empregado("Julia", "Amaral", 15500));
listaEmpregados[0].setAtributo("nome", "Gab");

Empregado.getSalarioAnual(listaEmpregados);

Empregado.getEmpregados(listaEmpregados);

Empregado.setAumento(listaEmpregados);


// Empregado.getEmpregados(listaEmpregados);

