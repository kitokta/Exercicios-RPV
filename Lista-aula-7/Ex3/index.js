class Livro {
  constructor(nome, autor, isbn) {
    this.nome = nome;
    this.autor = autor;
    this.isbn = isbn;
    this.status = "disponivel";
  }

  static atualizarBiblioteca(biblioteca, livro, novoEstado) {
    biblioteca[livro].status = novoEstado;
  }
}

let biblioteca = [];
biblioteca.push(new Livro("Mistborn", "Brandon Sanderson", "92810219"));
biblioteca.push(new Livro("Ser e tempo", "Martin Heidegger", "091209210"));
biblioteca.push(new Livro("Crepúsculo dos ídolos", "Nietzsche", "9219231123"));
biblioteca.push(
  new Livro("O mal estar da civilização", "Sigmund Freud", "1236867549")
);
biblioteca.push(
  new Livro("O homem e seus símbolos", "Carl G. Jung", "664452111")
);
biblioteca.push(new Livro("O livro vermelho", "Carl G. Jung", "1113678823"));

class Emprestimo {
  constructor(livro, data, indexBiblioteca) {
    this.livro = livro;
    this.livro.status = "emprestado";
    this.data = data;
    this.id = indexBiblioteca;
  }
}

class Pessoa {
  constructor(nome, endereco, cpf) {
    this.nome = nome;
    this.endereco = endereco;
    this.cpf = cpf;
    this.emprestimos = [];
  }

  verificarEmprestimo() {
    console.log(this.emprestimos);
  }

  emprestimo(biblioteca, livro) {
    let emprestimo = new Emprestimo(biblioteca[livro], new Date(), livro);
    this.emprestimos.push(emprestimo);
    Livro.atualizarBiblioteca(biblioteca, livro, "emprestado");
  }

  //busca o index (id) dos livros emprestados, guarda no array indexToRemove e usa pra alterar como disponivel na biblioteca, depois reseta a lista de emprestimosgit
  devolucao(biblioteca, id = false) {
    if ((id = false)) {
      let indexToRemove = [];
      for (let i = 0; i < this.emprestimos.length; i++) {
        indexToRemove.push(this.emprestimos[i].id);
      }

      for (let i = 0; i < indexToRemove.length; i++) {
        Livro.atualizarBiblioteca(biblioteca, indexToRemove[i], "disponivel");
      }
      this.emprestimos = [];
    }
  }
}

const cliente1 = new Pessoa("Gab", "Cataguases", "07265478912");
console.log(Object.keys(cliente1))

// //Imprimir biblioteca disponivel
// console.log(biblioteca);

// //index simulando ID do livro no array biblioteca
// cliente1.emprestimo(biblioteca, 0);
// cliente1.emprestimo(biblioteca, 2);

// //verificando os emprestimos feitos pelo cliente1
// cliente1.verificarEmprestimo();
// //Imprimir biblioteca disponivel (os emprestados estarao indisponiveis)
// console.log(biblioteca);

// //devolvendo os emprestimos feitos
// cliente1.devolucao(biblioteca);

// //Imprimir biblioteca disponivel
// console.log(biblioteca);
