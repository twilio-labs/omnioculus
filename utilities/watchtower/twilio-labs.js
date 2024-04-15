const convertToFileWithDate = require('../helpers/convertToFileWithDate');

async function convertContributors() {
	try {
		await convertToFileWithDate(
			'./stale_repos.md',
			'./reports/watchtower',
			'twilio-labs',
		);
		await convertToFileWithDate(
			'./stale_repos.json',
			'./reports/watchtower/json',
			'twilio-labs',
		);
	} catch (err) {
		console.error(err);
	}
}

convertContributors();
