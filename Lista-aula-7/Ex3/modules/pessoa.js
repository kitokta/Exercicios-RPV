import Emprestimo from './modules/emprestimo';
import { Livro } from './modules/livro';

export default class Pessoa {
    constructor(nome, endereco, cpf) {
        this.nome = nome;
        this.endereco = endereco;
        this.cpf = cpf;
    }

    setEmprestimo(biblioteca, livro) {
        let emprestimo = new Emprestimo(livro);
        this.emprestimos.push({emprestimo});
        Livro.atualizarBiblioteca(biblioteca, livro);
    }
}