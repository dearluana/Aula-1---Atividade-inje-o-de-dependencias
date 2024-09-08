"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Livro = void 0;
class Livro {
    constructor(titulo, autor, isbn, ano, editora_id, id) {
        this.titulo = titulo;
        this.autor = autor;
        this.isbn = isbn;
        this.ano = ano;
        this.editora_id = editora_id;
        if (id)
            this.id = id;
    }
}
exports.Livro = Livro;
