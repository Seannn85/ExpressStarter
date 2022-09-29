const express = require('express');

const users = [
    {id:1,name:"Goktug Koyun", place:"Londra"},
    {id:2,name:"Gokhan Sen", place:"Ordu"}
];

const app = express();

const PORT = 5000;

app.get("/users",(req,res,next)=>{


    res.json(users);
});

app.listen(PORT,()=>{
    console.log("Server Started:" + PORT);
});