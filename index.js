require("dotenv").config();
const express = require('express');
   const app =express();
 
   const Port=Number(process.env.Port);
    app.listen(Port, ()=>{
        console.log(`application is running on port number ${Port}`);

    });
    app.get(`/`, (req,res)=>{
        res.json({msg: "hello world by nischal"});
        
        
    });
 