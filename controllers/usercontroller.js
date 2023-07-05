const express = require('express');
const app = express();
const User = require('../models/userModel')
const bcrypt = require("bcryptjs");


const controlls = {
    register:async function (req, res) {
    try {
      const userExist = await User.findOne({ email: req.body.email });
      if (userExist) {
        return res.status(400).send("Usuário existente");
      } else {
        const userRegister = new User({
          nome: req.body.nome,
          sobrenome: req.body.sobrenome,
          email: req.body.email,
          senha: bcrypt.hashSync(req.body.senha),
        });
        const userSave = await userRegister.save();
        res.status(200).send("Usuário salvo");
      }
    } catch (e) {
      res.status(500).send(e.message);
    }
  },
  getAll:async function (req, res) {
    try {
      let users = await User.find();
      res.send(users);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
  login:async function(req, res) {
    try {
        const user = await User.findOne({email:req.body.email});

    if(!user){
        res.status(400).send("Email ou senha inválido")
    }
    const password = await bcrypt.compare(req.body.senha,user.senha)
    if(!password){
        res.status(400).send("Email ou senha inválido")
    }
    res.send("Usuário Logado")
    } catch (error) {
        res.status(500).send(error.message)
    }
    
  }

}

module.exports = controlls