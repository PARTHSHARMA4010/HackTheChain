const express = require("express");
const router =  express.Router();
// const {login,register} = require("../controllers/auth-controllers");
const authcontollers = require("../controllers/auth-controllers");
// Uncomment the following block if necessary
// router.get("/",(req,res) =>{
//     res.status(200).send('Welcome to my page');
// })




router.route("/register").post(authcontollers.register);
router.route('/login').post(authcontollers.login);

module.exports = router;
