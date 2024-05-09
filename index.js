require("dotenv").config();
const express = require('express');
   const app =express();
 
   const Port=Number(process.env.Port);
   const indexRouter =require(`./routes`)

   app.use(express.json());
   app.use('/',indexRouter)

    app.listen(Port, ()=>{

        console.log(`application is running on port number ${Port}`);

    })
 