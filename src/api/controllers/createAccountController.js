const createAccountService = require("../services/createAccountService");

const createAccountApi = async (req, res) => {
	try {
		let {account_name,
			account_type,
			primary_applicant_ID} = req.body;

		let data = await createAccountService({account_name,
			account_type,
			primary_applicant_ID});
		if (!data) throw Error(`Something Went Wrong`);
		res.status(200).json({accountId: data});
		
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

module.exports =createAccountApi;