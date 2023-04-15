const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dataSchema = new Schema({
	account_name: {
		required: false,
		type: String
	},
	account_type: {
		required: false,
		type: String
	},
	primary_applicant_ID: {
		required: false,
		type: String
	}
})

module.exports = mongoose.model('USER_ACCOUNT', dataSchema)