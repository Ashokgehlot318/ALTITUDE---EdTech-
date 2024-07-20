const express = require('express');
const router = express.Router();

const controller = require('../controllers/test.controller')

router.post("/test/create-user", controller.createTestUser);
router.get("/test/users", controller.getTestUser);

module.exports = router;