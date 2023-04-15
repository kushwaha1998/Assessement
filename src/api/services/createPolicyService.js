const policy = require('../models/Policy')
const createPolicyService = async (
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
) => {
	try {
		let saveObj = new policy({
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
		});
		let res = await saveObj.save();
		return res._id;
	} catch (err) {
		console.error(err);
		return null;
	}
}

module.exports = createPolicyService