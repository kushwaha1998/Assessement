const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dataSchema = new Schema({
	firstname: {
        required: false,
        type: String
	},

	gender: {
		required: false,
		type: String
	},

	email: {
		required: false,
		type: String
	},

	userType: {
		required: false,
		type: String
	},

	phone: {
		required: false,
		type: String
	},
	

	state: {
		required: false,
		type: String
	},

	address: {
		required: false,
		type: String
	},

	city: {
		required: false,
		type: String
	},

	DOB: {
		required: false,
		type: String
	},

	ZIP: {
		required: false,
		type: String
	},
  userAcountId: {
		type: Schema.Types.ObjectId,
		required: false,
		ref: "USER_ACCOUNT"
	}
})

module.exports = mongoose.model('User', dataSchema)