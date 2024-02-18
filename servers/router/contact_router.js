const express = require("express");
const Crouter =  express.Router();
const contactForm = require("../controllers/contact_controller.js");

Crouter.route("/Home").post(contactForm);


module.exports = Crouter;