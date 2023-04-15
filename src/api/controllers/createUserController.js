const createUserService = require("../services/createUserService");

const createUserApi = async (req, res) => {
	try {
		let {
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
		} = req.body;
		let data = await createUserService(
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
		);
		if (!data) throw Error(`Something Went Wrong`);
		res.status(200).json({userId: data});

	} catch (err) {
		console.error(err);
		res
    .status(500)
		.json(
			{
				data: {err: err.message}
			}
		);
	}
}

module.exports =createUserApi;