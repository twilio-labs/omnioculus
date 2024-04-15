const convertToFileWithDate = require("../helpers/convertToFileWithDate");

async function convertMetrics() {
	try {
		await convertToFileWithDate(
			"./issue_metrics.md",
			"./reports/metrics",
			"twilio-node",
		);
		await convertToFileWithDate(
			"./issue_metrics.json",
			"./reports/metrics/json",
			"twilio-node",
		);
	} catch (err) {
		console.error(err);
	}
}

convertMetrics();
