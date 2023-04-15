const csvProcessService = require("../services/csvProcessService");

const processCsvApi = async (req, res) => {
	try {
		let {csv} = req.body;
		await csvProcessService(csv);
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

module.exports =processCsvApi;