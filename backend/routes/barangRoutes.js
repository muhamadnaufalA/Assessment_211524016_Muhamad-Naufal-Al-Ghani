import express from "express";
import { getAllBarang, getBarangbyId, createBarang, updateBarang, deleteBarang} from "../controllers/barangController.js";

const router = express.Router();

router.get('/barang', getAllBarang);
router.get('/barang/:id', getBarangbyId);
router.post('/barang', createBarang);
router.patch('/barang/:id', updateBarang);
router.delete('/barang/:id',deleteBarang);

export default router;