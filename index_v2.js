

// --------------- MODULES IMPORT ---------------


const express = require("express");


// --------------- SERVER SETUP ---------------


const app = express();
const port = 3000;  // Localhost Port





function main(){
    app.use(express.static("publicv2"));

    //add middleware to parse json
    app.use(express.json());

    app.get("/",function(req, res){
        console.log("I M IN");
        res.send("Hello World !");
    });

    app.get("/test",(req,res)=>{
        //eslint-disable-next-line no_undef
        res.sendFile(__dirname + "/publicv2/index.html");
    });

    app.get("api/users",(req, res)=>{
        res.json(users);
    });

    app.listen(port, () => {
        console.log(`App listening to port ${port}`);
    });
}
main();