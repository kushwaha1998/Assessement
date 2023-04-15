const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dataSchema = new Schema({
	COMPANY_NAME: {
		required: false,
		type: String
	},
})

module.exports = mongoose.model('Carrier', dataSchema)