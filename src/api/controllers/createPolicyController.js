const createPolicyService = require("../services/createPolicyService");

const createPolicyApi = async (req, res) => {
	try {
			let {
				userId,
				carrierId,
				lobId,
				agentId,
				policy_mode,
				policy_number,
				policy_type,
				policy_start_date,
				policy_end_date,
				hasActive_ClientPolicy,
				premium_amount_written,
				premium_amount,
				csr
			} = req.body;
			let data = await createPolicyService(
				userId,
				carrierId,
				lobId,
				agentId,
				policy_mode,
				policy_number,
				policy_type,
				policy_start_date,
				policy_end_date,
				hasActive_ClientPolicy,
				premium_amount_written,
				premium_amount,
				csr
			);
			if (!data) throw Error(`Something Went Wrong`);
			res.status(200).json({policyId: data});
		
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

module.exports =createPolicyApi;