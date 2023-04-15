const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dataSchema = new Schema({
	producer: {
		required: false,
		type: String
	},
	CATEGORY_NAME: {
		required: false,
		type: String
	},
})

module.exports = mongoose.model('LOB', dataSchema)