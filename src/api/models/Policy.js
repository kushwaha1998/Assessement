const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dataSchema = new Schema({
	userId: {
		type: Schema.Types.ObjectId,
		required: false,
		ref: "User"
	},
	carrierId: {
		type: Schema.Types.ObjectId,
		required: false,
		ref: "Carrier"
	},
	lobId: {
		type: Schema.Types.ObjectId,
		required: false,
		ref: "LOB"
	},
	agentId: {
		type: Schema.Types.ObjectId,
		required: false,
		ref: "Agent"
	},
	policy_mode: {
		required: false,
		type: String
	},
	policy_number: {
		required: false,
		type: String
	},
	policy_type: {
		required: false,
		type: String
	},
	policy_start_date: {
		required: false,
		type: String
	},
	policy_end_date: {
		required: false,
		type: String
	},
	hasActive_ClientPolicy: {
		required: false,
		type: String
	},
	premium_amount_written: {
		required: false,
		type: String
	},
	premium_amount: {
		required: false,
		type: String
	},
	csr: {
		required: false,
		type: String
	}

})

module.exports = mongoose.model('Policy', dataSchema)