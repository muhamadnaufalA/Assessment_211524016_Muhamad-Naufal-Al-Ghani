import express from "express";
import {getAllTenan, getTenanbyId, createTenan,updateTenan,deleteTenan} from "../controllers/tenanController.js";

const router = express.Router();

router.get('/tenan', getAllTenan);
router.get('/tenan/:id', getTenanbyId);
router.post('/tenan', createTenan);
router.patch('/tenan/:id', updateTenan);
router.delete('/tenan/:id', deleteTenan);


export default router;