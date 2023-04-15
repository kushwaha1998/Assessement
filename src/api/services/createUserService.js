const user = require('../models/User')
const createUserService = async (
	firstname,
	gender,
	email,
	userType,
	phone,
	state,
	address,
	city,
	DOB,
	ZIP,
	userAcountId,
) => {
	try {
		let saveObj = new user({
			firstname,
			gender,
			email,
			userType,
			phone,
			state,
			address,
			city,
			DOB,
			ZIP,
			userAcountId
		});
		let res = await saveObj.save();
		return res._id;
	} catch (err) {
		console.error(err);
		return null;
	}
}

module.exports = createUserService