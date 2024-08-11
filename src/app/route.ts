import express from "express";
const router = express.Router();

import qna from "./qna/qna.route";
import tech from "./tech/tech.route";
import qset from "./qset/qset.route";

router.use('/qna', qna);
router.use('/q-set', qset);
router.use('/tech', tech);

export default router;