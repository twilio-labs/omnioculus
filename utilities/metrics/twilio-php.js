const convertToFileWithDate = require("../helpers/convertToFileWithDate");

async function convertMetrics() {
	try {
		await convertToFileWithDate(
			"./issue_metrics.md",
			"./reports/metrics",
			"twilio-php",
		);
		await convertToFileWithDate(
			"./issue_metrics.json",
			"./reports/metrics/json",
			"twilio-php",
		);
	} catch (err) {
		console.error(err);
	}
}

convertMetrics();
