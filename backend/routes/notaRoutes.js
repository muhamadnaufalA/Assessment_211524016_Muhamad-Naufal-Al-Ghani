import express from "express";
import {createNota, getAllNota, updateNota} from "../controllers/notaController.js";

const router = express.Router();

router.get('/nota',getAllNota);
router.post('/nota',createNota);
router.patch('/nota/:id',updateNota);

export default router;