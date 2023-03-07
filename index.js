const express=require("express"); 
const app=express(); //init de l'app web
const port=3000; //port sur lequel le serv web est lancé
function main(){
    app.get("/",(req, res)=>{
        res.send("Hello world");
    })
    app.listen(port, function(){
        console.log(`serveur lancé sur port ${port}`);
    });
}