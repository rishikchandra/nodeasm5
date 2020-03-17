const express = require('express');
const router = express.Router();
const service = require('../services/service');

router.post('/insert',async (req,res)=>{
    id = req.body.id;
    name = req.body.name;
    rating = req.body.rating;
     try{
        if(rating==0 || rating>5){
        res.send("error");}
        const result=await service.insert(id, name, rating);
        res.send(result);
     }
     catch(err)
     {
         console.log("error");
    }

});

router.get("/get/:input", async (req,res)=>{
    try {
        input = req.params.input;
        result = await service.teams(input);
        if(result){
            res.send(result)
        }
    } catch (error) {
        console.log("error");
    }
})


module.exports = router;