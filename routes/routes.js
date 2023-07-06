const express = require("express");
const router = express.Router();
const controlls = require('../controllers/usercontroller');
const authLogin = require('../controllers/authLogin');
const authAdmin = require('../controllers/authAdmin');

router.get("/users",authLogin,authAdmin, controlls.getAll);

router.post("/register", express.json(),controlls.register);
router.post('/login', express.json(),controlls.login);

router.get("/dashboard",authLogin,controlls.dashboard);
  
module.exports = router;
