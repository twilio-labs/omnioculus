const convertToFileWithDate = require('../helpers/convertToFileWithDate')

async function convertMetrics () {
  try {
    await convertToFileWithDate('./issue_metrics.md', './reports/metrics', 'twilio-go')
    await convertToFileWithDate('./issue_metrics.json', './reports/metrics/json', 'twilio-go')
  } catch (err) {
    console.error(err)
  }
}

convertMetrics()