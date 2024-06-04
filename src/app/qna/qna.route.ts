import express from "express";
import { createQNA } from "./qna.controller";

const router = express.Router();

router.post('/create', createQNA);

module.exports = router;