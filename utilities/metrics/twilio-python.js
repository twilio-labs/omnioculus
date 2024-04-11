const convertToFileWithDate = require('../helpers/convertToFileWithDate')

async function convertMetrics () {
  try {
    await convertToFileWithDate('./issue_metrics.md', './reports/metrics', 'twilio-python')
    await convertToFileWithDate('./issue_metrics.json', './reports/metrics/json', 'twilio-python')
  } catch (err) {
    console.error(err)
  }
}

convertMetrics()