const express = require('express');
const createAccountApi = require('../api/controllers/createAccountController');
const createPolicyApi = require('../api/controllers/createPolicyController');
const createUserApi = require('../api/controllers/createUserController');
const processCsvApi = require('../api/controllers/csvDataProcess');

const router = express.Router();
// CRUD operation for User, Account, and Policy

router.post(
	'/user',
	createUserApi
)

router.post(
	'/account',
	createAccountApi
)

router.post(
	'/policy',
	createPolicyApi
)

router.post(
	'/csvProcess',
	processCsvApi
)

module.exports = router;