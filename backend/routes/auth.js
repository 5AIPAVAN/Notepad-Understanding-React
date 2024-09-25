const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
     obj={
        msg:"hai",
        error:'no error bro'
    }
    res.json(obj);
})

module.exports= router;