import { Request, Response } from 'express';
import { Livro } from '../models/Livro';  // Verifique se o caminho está correto
import client from '../db';  // Conexão com o banco de dados

// Método para criar um novo livro
export const createLivro = async (req: Request, res: Response) => {
    const { titulo, autor, isbn, ano, editora_id } = req.body;
    try {
        const result = await client.query(
            'INSERT INTO Livro (titulo, autor, isbn, ano, editora_id) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [titulo, autor, isbn, ano, editora_id]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        const err = error as Error;  // Faz o casting para 'Error'
        res.status(500).json({ error: err.message });
    }
};

// Método para obter um livro pelo ID
export const getLivro = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const result = await client.query('SELECT * FROM Livro WHERE id = $1', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'Livro não encontrado' });
        }
        res.json(result.rows[0]);
    } catch (error) {
        const err = error as Error;
        res.status(500).json({ error: err.message });
    }
};

// Método para atualizar um livro pelo ID
export const updateLivro = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { titulo, autor, isbn, ano, editora_id } = req.body;
    try {
        const result = await client.query(
            'UPDATE Livro SET titulo = $1, autor = $2, isbn = $3, ano = $4, editora_id = $5 WHERE id = $6 RETURNING *',
            [titulo, autor, isbn, ano, editora_id, id]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'Livro não encontrado' });
        }
        res.json(result.rows[0]);
    } catch (error) {
        const err = error as Error;
        res.status(500).json({ error: err.message });
    }
};

// Método para deletar um livro pelo ID
export const deleteLivro = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const result = await client.query('DELETE FROM Livro WHERE id = $1 RETURNING *', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'Livro não encontrado' });
        }
        res.json({ message: 'Livro deletado com sucesso' });
    } catch (error) {
        const err = error as Error;
        res.status(500).json({ error: err.message });
    }
};
