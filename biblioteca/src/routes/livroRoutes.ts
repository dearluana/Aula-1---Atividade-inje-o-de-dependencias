import { Router } from 'express';
import { createLivro, getLivro, updateLivro, deleteLivro } from '../controllers/livroController';

const router = Router();

router.post('/livros', createLivro);
router.get('/livros', getLivro);
router.put('/livros/:id', updateLivro);
router.delete('/livros/:id', deleteLivro);

export default router;
