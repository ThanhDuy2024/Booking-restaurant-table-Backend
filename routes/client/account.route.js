const express = require('express');
const route = express.Router();
const accountController = require("../../controllers/client/account.controller");
const validate = require('../../validates/client/auth.validate');

route.post('/register', validate.register, accountController.register);

module.exports = route