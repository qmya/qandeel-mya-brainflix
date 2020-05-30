const express = require('express');
const app = express();
const cors =require('cors');
const videos =require ('./route/videos.json');
require('dotenv').config();
const Route =require('./route/route');



// console.log(process.env);

const port = process.env .PORT || 3000;
app.use(cors());

app.use(express.json());

app.use('/videos', Route);

app.listen(port,() => console.log(`SERVER RUNNING ON ${port} ............`));

