import express from "express";
import { getAllKasir, getKasirbyId, createKasir, updateKasir, deleteKasir} from "../controllers/kasirController.js";

const router = express.Router();

router.get('/kasir', getAllKasir);
router.get('/kasir/:id', getKasirbyId);
router.post('/kasir',createKasir);
router.patch('/kasir/:id', updateKasir);
router.delete('/kasir/:id', deleteKasir);


export default router;