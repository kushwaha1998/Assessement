const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dataSchema = new Schema({
	agent: {
		required: false,
		type: String
	},
	agent_id: {
		required: false,
		type: String
	}
})

module.exports = mongoose.model('Agent', dataSchema)