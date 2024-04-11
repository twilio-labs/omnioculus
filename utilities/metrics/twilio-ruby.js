const convertToFileWithDate = require('../helpers/convertToFileWithDate')

async function convertMetrics () {
  try {
    await convertToFileWithDate('./issue_metrics.md', './reports/metrics', 'twilio-ruby')
    await convertToFileWithDate('./issue_metrics.json', './reports/metrics/json', 'twilio-ruby')
  } catch (err) {
    console.error(err)
  }
}

convertMetrics()