

const express = require('express');
const contactRoute=require('./Routes/contactRoutes')
const brochureRoute=require('./Routes/brochureRoute')
const case_studyRoute=require('./Routes/casestudyRoute')
require('./model/mongodbConn');
const dotenv = require('dotenv');
dotenv.config(); 


const cors = require('cors');

const app = express();
app.use(express.json()); 
app.use(cors());
app.use('/api/var',  contactRoute)
app.use('/api/var',  brochureRoute)
app.use('/api/var', case_studyRoute )

app.listen(process.env.PORT, () => {
    console.log(`Server is running at http://localhost:${process.env.PORT}`);
});


