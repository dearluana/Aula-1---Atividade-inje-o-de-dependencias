"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const livroController_1 = require("../controllers/livroController");
const router = (0, express_1.Router)();
router.post('/livros', livroController_1.createLivro);
router.get('/livros', livroController_1.getLivro);
router.put('/livros/:id', livroController_1.updateLivro);
router.delete('/livros/:id', livroController_1.deleteLivro);
exports.default = router;
