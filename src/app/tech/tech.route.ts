import express from "express";
import { saveTech, listTechs, removeTech } from "./tech.controller";

const router = express.Router();

router.post('/save', saveTech);
router.get('/', listTechs);
router.delete('/:id', removeTech);

export default router;