const express = require("express");
const router = express.Router();

const {handleSignUp, handleLogin, handleDelete, handleUpdate} = require('../controller/user')

router.post("/signup", handleSignUp);
router.post("/login", handleLogin);
router.post("/delelte", handleDelete);
router.post("/update", handleUpdate);

module.exports = router;