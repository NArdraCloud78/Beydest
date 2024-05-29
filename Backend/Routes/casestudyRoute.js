const express = require('express');
const {sendBrochure} = require('../controller/broucher');
const { sendCaseStudy } = require('../controller/casestudy');


const router = express.Router();

router.post('/casestudy', sendCaseStudy )

module.exports = router;
