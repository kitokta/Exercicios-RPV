class Endereco {
  constructor(rua, bairro, cidade, estado) {
    this.rua = rua;
    this.bairro = bairro;
    this.cidade = cidade;
    this.estado = estado;
  }

  atualizar(propriedade, novaInformacao) {
    this[propriedade] = novaInformacao;
  }
}

const endereco = new Endereco('dos bobos', 'centro', 'Las vegas', 'NV')

console.log(endereco);

endereco.atualizar('rua', 'rev felipe');
endereco.atualizar('bairro', 'independencia');
endereco.atualizar('cidade', 'Cataguases')
endereco.atualizar('estado', 'MG')

console.log(endereco)