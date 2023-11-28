import express from "express";
import { getAllKasir, createKasir, updateKasir, deleteKasir} from "../controllers/kasirController.js";

const router = express.Router();

router.get('/kasir', getAllKasir);
router.post('/kasir',createKasir);
router.patch('/kasir/:id', updateKasir);
router.delete('/kasir/:id', deleteKasir);


export default router;