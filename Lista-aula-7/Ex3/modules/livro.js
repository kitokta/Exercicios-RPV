export default class Livro {
    constructor(nome, autor, isbn, status) {
        this.nome = nome;
        this.autor = autor;
        this.isbn = isbn;
        this.status = status;
    }

    static atualizarBiblioteca(biblioteca, livro) {
        biblioteca[livro].status = 'emprestado';
    }

}

let biblioteca = [];
biblioteca.push(new Livro('Mistborn', 'Brandon Sanderson', '92810219', 'disponivel'));
biblioteca.push(new Livro('Ser e tempo', 'Martin Heidegger', '091209210', 'disponivel'));
biblioteca.push(new Livro('Crepúsculo dos ídolos', 'Nietzsche', '9219231123', 'disponivel'));
biblioteca.push(new Livro('O mal estar da civilização', 'Sigmund Freud', '1236867549', 'disponivel'));
biblioteca.push(new Livro('O homem e seus símbolos', 'Carl G. Jung', '664452111', 'disponivel'));
biblioteca.push(new Livro('O livro vermelho', 'Carl G. Jung', '1113678823', 'disponivel'));

export {biblioteca} ;