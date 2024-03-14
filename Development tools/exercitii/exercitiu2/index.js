const express = require("express");

const app = express();

const fs = require("fs").promises;

app.get("/",async (req,res)=> {
    const data = await fs.readFile("./index.html","utf8");
    
    res.send(data);
});
app.get("/pagina2",async (reg,res)=>{
    const data = await fs.readFile("./pagina2.html","utf8");
    res.send(data); 
})


app.listen (3000,()=>
{
    console.log("server is runnning");
});