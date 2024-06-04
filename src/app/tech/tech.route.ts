import express from "express";
import { createTech } from "./tech.controller";

const router = express.Router();

router.post('/create', createTech);

module.exports = router;