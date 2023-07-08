const jwt = require("jsonwebtoken");
const express = require("express");


module.exports = function(req,res,next){
    const header = req.header('authorization-token');
    if(!header){
        res.status(403).json({msg:"Logue para acessar"})
    }else{
        try {
            const tokenVerified = jwt.verify(header,process.env.SECRET_KEY)
            req.user = tokenVerified
            next();
        } catch (error) {
            res.status(403).json({msg:"Logue novamente"});
        }
    }
}