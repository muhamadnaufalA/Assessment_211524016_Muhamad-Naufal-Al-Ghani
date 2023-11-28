import express from "express";
import { getAllBarang, createBarang, updateBarang, deleteBarang} from "../controllers/barangController.js";

const router = express.Router();

router.get('/barang', getAllBarang);
router.post('/barang', createBarang);
router.patch('/barang/:id', updateBarang);
router.delete('/barang/:id',deleteBarang);

export default router;