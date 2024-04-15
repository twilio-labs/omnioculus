const convertToFileWithDate = require('../helpers/convertToFileWithDate');

async function convertMetrics() {
	try {
		await convertToFileWithDate(
			'./issue_metrics.md',
			'./reports/metrics',
			'sendgrid-ruby',
		);
		await convertToFileWithDate(
			'./issue_metrics.json',
			'./reports/metrics/json',
			'sendgrid-ruby',
		);
	} catch (err) {
		console.error(err);
	}
}

convertMetrics();
