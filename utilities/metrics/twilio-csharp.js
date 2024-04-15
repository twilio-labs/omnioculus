const convertToFileWithDate = require('../helpers/convertToFileWithDate');

async function convertMetrics() {
	try {
		await convertToFileWithDate(
			'./issue_metrics.md',
			'./reports/metrics',
			'twilio-csharp',
		);
		await convertToFileWithDate(
			'./issue_metrics.json',
			'./reports/metrics/json',
			'twilio-csharp',
		);
	} catch (err) {
		console.error(err);
	}
}

convertMetrics();
