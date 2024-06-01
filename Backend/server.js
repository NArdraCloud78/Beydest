const express = require('express');
const contactRoute = require('./Routes/contactRoutes');
const brochureRoute = require('./Routes/brochureRoute');
const caseStudyRoute = require('./Routes/casestudyRoute');
require('./model/mongodbConn');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());
app.use('/api/var', contactRoute);
app.use('/api/var', brochureRoute);
app.use('/api/var', caseStudyRoute);

module.exports = app;
