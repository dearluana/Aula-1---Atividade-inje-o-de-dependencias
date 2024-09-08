export class Livro {
    id?: number;
    titulo: string;
    autor?: string;
    isbn?: string;
    ano?: number;
    editora_id?: number;

    constructor(titulo: string, autor?: string, isbn?: string, ano?: number, editora_id?: number, id?: number) {
        this.titulo = titulo;
        this.autor = autor;
        this.isbn = isbn;
        this.ano = ano;
        this.editora_id = editora_id;
        if (id) this.id = id;
    }
}
