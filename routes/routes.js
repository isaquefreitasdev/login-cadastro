const express = require("express");
const router = express.Router();
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");

router.get("/users", async function (req, res) {
  try {
    let users = await User.find();
    res.send(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.post("/register", express.json(), async function (req, res) {
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
  });
  
module.exports = router;
