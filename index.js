

// --------------- MODULES IMPORT ---------------


const express = require('express');


// --------------- SERVER SETUP ---------------


const app = express();
const port = 3000;  // Localhost Port

app.listen(port, () => {
    console.log(`App listening to port ${port}`);
});

app.use(express.static('public'));

let users =[];
let lastIndex=0;

app.get('/users',(req,res)=>{
    Logger.log(`Getting users at ${req.ip}`);
    res.send(users);
});

