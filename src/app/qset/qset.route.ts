import express from "express";
import { createQNA } from "./qset.controller";

const router = express.Router();

router.post('/create', createQNA);

module.exports = router;