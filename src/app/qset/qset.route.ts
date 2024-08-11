import express from "express";
import { saveQSet, deleteQSet, listQSets } from "./qset.controller";

const router = express.Router();

router.post('/save', saveQSet);
router.get('/', listQSets);
router.delete('/:id', deleteQSet);

export default router;