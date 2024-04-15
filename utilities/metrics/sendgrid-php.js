const convertToFileWithDate = require('../helpers/convertToFileWithDate');

async function convertMetrics() {
	try {
		await convertToFileWithDate(
			'./issue_metrics.md',
			'./reports/metrics',
			'sendgrid-php',
		);
		await convertToFileWithDate(
			'./issue_metrics.json',
			'./reports/metrics/json',
			'sendgrid-php',
		);
	} catch (err) {
		console.error(err);
	}
}

convertMetrics();
