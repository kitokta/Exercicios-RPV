import Livro from './livro';
import { biblioteca } from './modules/livro';

export default class Emprestimo {
    constructor(livro) {
        this.livro = biblioteca[livro];
        this.livro.status = 'emprestado';
    }


}