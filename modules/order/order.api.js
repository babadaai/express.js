const { Router } = require("express");
const express =require(`express.js`);
const { post } = require("../../routes");
const router = express.Router();
router.post("/",(req,res,next)=>{
    try {
        res.json({msg:'order is created '})

    }
    catch(e){
        next(e);
    }
});
router.get("/",(req,res,next)=>{
    try{ 
    res.json({msg:"every thing is is listed "})
    }

   catch(e){
    next(e);
   }
})
// read 
router.get('/',(res,req,next)=>{
    try {
        res.json({msg:""})
    }
    catch(e){
        next(e);
    }
    
})
router.delete('/id',(req,res,next)=>{
    try{
        const {id}=req.params;
        res.json({msg:`the order ${id} is deleted`})
    }
    catch(e){
        next(e);
    }


})
router.patch('/id/status')

/*
create 
list 
read order 
delete order 
change the status of the order 
*/
module.export=router;
