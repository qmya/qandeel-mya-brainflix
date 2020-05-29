const express = require('express');
const app = express();


require('dotenv').config();

// console.log(process.env);

const port = process.env .PORT || 3000;


app.listen(port,() => console.log(`SERVER RUNNING ON ${port}`));



