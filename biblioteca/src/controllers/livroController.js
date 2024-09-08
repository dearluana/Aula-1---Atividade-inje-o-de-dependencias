"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteLivro = exports.updateLivro = exports.getLivro = exports.createLivro = void 0;
const db_1 = __importDefault(require("../db")); // Conexão com o banco de dados
// Método para criar um novo livro
const createLivro = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { titulo, autor, isbn, ano, editora_id } = req.body;
    try {
        const result = yield db_1.default.query('INSERT INTO Livro (titulo, autor, isbn, ano, editora_id) VALUES ($1, $2, $3, $4, $5) RETURNING *', [titulo, autor, isbn, ano, editora_id]);
        res.status(201).json(result.rows[0]);
    }
    catch (error) {
        const err = error; // Faz o casting para 'Error'
        res.status(500).json({ error: err.message });
    }
});
exports.createLivro = createLivro;
// Método para obter um livro pelo ID
const getLivro = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const result = yield db_1.default.query('SELECT * FROM Livro WHERE id = $1', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'Livro não encontrado' });
        }
        res.json(result.rows[0]);
    }
    catch (error) {
        const err = error;
        res.status(500).json({ error: err.message });
    }
});
exports.getLivro = getLivro;
// Método para atualizar um livro pelo ID
const updateLivro = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { titulo, autor, isbn, ano, editora_id } = req.body;
    try {
        const result = yield db_1.default.query('UPDATE Livro SET titulo = $1, autor = $2, isbn = $3, ano = $4, editora_id = $5 WHERE id = $6 RETURNING *', [titulo, autor, isbn, ano, editora_id, id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'Livro não encontrado' });
        }
        res.json(result.rows[0]);
    }
    catch (error) {
        const err = error;
        res.status(500).json({ error: err.message });
    }
});
exports.updateLivro = updateLivro;
// Método para deletar um livro pelo ID
const deleteLivro = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const result = yield db_1.default.query('DELETE FROM Livro WHERE id = $1 RETURNING *', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'Livro não encontrado' });
        }
        res.json({ message: 'Livro deletado com sucesso' });
    }
    catch (error) {
        const err = error;
        res.status(500).json({ error: err.message });
    }
});
exports.deleteLivro = deleteLivro;
