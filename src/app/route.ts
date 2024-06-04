import express from "express";
const router = express.Router();

router.use('/qna', require('./qna/qna.route'));
router.use('/tech', require('./tech/tech.route'));

module.exports = router;