require("dotenv").config();
const express = require("express");
const app = express();
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const validate = require("./validation");

const controlls = {
  register: async function (req, res) {
    const { error } = validate.registerValidate(req.body);
    if (error) {
      return res.status(400).send(error.message);
    }
    try {
      const userExist = await User.findOne({ email: req.body.email });
      if (userExist) {
        return res.status(400).send("Usuário existente");
      }
      const userRegister = new User({
        nome: req.body.nome,
        sobrenome: req.body.sobrenome,
        email: req.body.email,
        senha: bcrypt.hashSync(req.body.senha),
      });
      const userSave = await userRegister.save();
      return res.status(200).send("Usuário salvo");
    } catch (e) {
      return res.status(500).send(e.message);
    }
  },
  
  getAll: async function (req, res) {
    try {
      let users = await User.find();
      res.send(users);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
  login: async function (req, res) {
    const { error } = validate.loginValidate(req.body);
    if (error) {
      return res.status(400).send(error.message);
    }
    try {
      const user = await User.findOne({ email: req.body.email });

      if (!user) {
        return res.status(400).send("Email ou senha inválido");
      }

      const password = await bcrypt.compare(req.body.senha, user.senha);
      if (!password) {
        return res.status(400).send("Email ou senha inválido");
      }

      const token = jwt.sign({ _id: user._id }, process.env.SECRET_KEY);
      return res
        .header("authorization-token", token)
        .status(200)
        .send("Usuário Logado");
    } catch (error) {
      return res.status(500).send(error.message);
    }
  },

  dashboard: function (req, res) {
    try {
      res.status(200).send("dashboard");
    } catch (error) {
      res.status(403).send(error.message);
    }
  },
};

module.exports = controlls;
