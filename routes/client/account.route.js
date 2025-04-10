const express = require('express');
const route = express.Router();
const accountController = require("../../controllers/client/account.controller");

route.get('/register', accountController.register);

module.exports = route