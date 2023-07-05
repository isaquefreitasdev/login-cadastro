const express = require("express");
const router = express.Router();
const controlls = require('../controllers/usercontroller')

router.get("/users", controlls.getAll);

router.post("/register", express.json(),controlls.register);
  
module.exports = router;
