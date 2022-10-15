class ShoppingCart {
  constructor() {
    this.itens = [];
    this.quantidadeTotal = 0;
    this.valorTotal = 0;
  }

  adicionar(item, quantidade, valor) {
    let { itens } = this;

    //verificar se item já existe no carrinho
    let existeItem = false;
    let index;
    for (let i = 0; i < itens.length; i++) {
      if (itens[i].nome.includes(item)) {
        existeItem = true;
        //index de onde está o item.
        index = i;
        break;
      }
    }

    //se nao existir o item cria um novo objeto, se nao adiciona ao existente:
    if (!existeItem) {
      itens.push({
        nome: item,
        quantidade: quantidade,
        valorUnitario: valor,
        valor: valor * quantidade,
      });
    } else {
        itens[index].quantidade += quantidade;
        itens[index].valor = valor * itens[index].quantidade;
    }

    this.quantidadeTotal = ShoppingCart.calcQuantidade(itens);

    this.valorTotal = ShoppingCart.calcValor(itens);
  }

  remover(item, quantidadeDeletar) {
    let { itens } = this;

    for (let index in itens) {
      if (itens[index].nome === item) {
        itens[index].valor =
          itens[index].valor - itens[index].valorUnitario * quantidadeDeletar;
        itens[index].quantidade = itens[index].quantidade - quantidadeDeletar;
        if (itens[index].quantidade <= 0) {
          itens.splice(index, 1);
        }
      }
    }

    this.quantidadeTotal = ShoppingCart.calcQuantidade(itens);

    this.valorTotal = ShoppingCart.calcValor(itens);
  }

  static calcValor(itens) {
    let soma = 0;
    for (let index in itens) {
      soma += itens[index].valor;
    }
    return soma;
  }

  static calcQuantidade(itens) {
    let soma = 0;
    for (let index in itens) {
      soma += itens[index].quantidade;
    }
    return soma;
  }

  imprimirCarrinho() {
    console.log(this);
  }
}

let carrinho = new ShoppingCart();

carrinho.adicionar("PS5", 2, 4000);
carrinho.adicionar("PS5", 2, 4000);
carrinho.adicionar("Canetas", 5, 25);
carrinho.adicionar("Caderno", 12, 42);
carrinho.adicionar("Celular", 2, 1000);

carrinho.imprimirCarrinho();

carrinho.remover("PS5", 1);
carrinho.remover("Caderno", 10);

carrinho.imprimirCarrinho();
