const agent = require('../models/Agent');
const carrier = require('../models/Carrier');
const lob = require('../models/LOB');
const policy = require('../models/Policy');
const userAcount = require('../models/USER_ACCOUNT');
const user = require('../models/User');
const csv = require('csvtojson')


const createProcessService = async (
	csvStr
) => {
	try {
		csv()
		.fromString(csvStr)
		.then((csvRow)=>{ 
			saveRowToMongo(csvRow);
		});	
	} catch (err) {
		console.error(err);
		return null;
	}
}

const saveRowToMongo = async (csvRow) => {
	let userAcountId = await userAcount({
		account_name: csvRow['account_name'],
		account_type: csvRow['account_type'],
		primary_applicant_ID: csvRow['primary_applicant_ID'],
	}).save()._id;
	
	let [userId,agentId, carrierId, lobId]= await Promise.all(
		[
			new user({
				firstname: csvRow['firstname'],
				gender: csvRow['gender'],
				email: csvRow['email'],
				userType: csvRow['userType'],
				phone: csvRow['phone'],
				state: csvRow['state'],
				address: csvRow['address'],
				city: csvRow['city'],
				DOB: csvRow['DOB'],
				ZIP: csvRow['ZIP'],
				userAcountId
			}).save()._id,
			new agent(
				{
					agent: csvRow[agent],
					agent_id: csvRow[agent_id]
				}
			).save()._id,
			new carrier(
				{
					COMPANY_NAME: csvRow[COMPANY_NAME]
				}
			).save()._id,
			new lob(
				{
					producer: csvRow[producer], 
					CATEGORY_NAME: csvRow[CATEGORY_NAME]
				}
			).save()._id,

		]);
	await new policy(
		{
			userId,
			carrierId,
			lobId,
			agentId,
			policy_mode:  csvRow['policy_mode'],
			policy_number:  csvRow['policy_number'],
			policy_type:  csvRow['policy_type'],
			policy_start_date:  csvRow['policy_start_date'],
			policy_end_date:  csvRow['policy_end_date'],
			hasActive_ClientPolicy:  csvRow['hasActive_ClientPolicy'],
			premium_amount_written:  csvRow['premium_amount_written'],
			premium_amount: csvRow['premium_amount'],
			csr: csvRow['csr']
		}
	).save();


}

module.exports = createProcessService