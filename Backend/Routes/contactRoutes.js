const express = require('express');
const { contactForm } = require('../controller/contactController');

const router = express.Router();

router.post('/contact', contactForm);
router.post('/brochure',    )

module.exports = router;
