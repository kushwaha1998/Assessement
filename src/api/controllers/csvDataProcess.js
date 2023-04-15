const createProcessService = require("../services/csvProcessService");

const createAccountApi = async (req, res) => {
	try {
		let {csv} = req.body;
		await createProcessService(csv);
		res
    .status(200)
		.json(
			{
				data: {success: 1}
			}
		);
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