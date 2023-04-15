const account = require('../models/USER_ACCOUNT')
const createAccountService = async (
	account_name,
	account_type,
	primary_applicant_ID
) => {
	try {
		let saveObj = new account({
			account_name,
			account_type,
			primary_applicant_ID
		});
		let res = await saveObj.save();
		return res._id;
	} catch (err) {
		console.error(err);
		return null;
	}
}

module.exports = createAccountService