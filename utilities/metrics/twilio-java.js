const convertToFileWithDate = require('../helpers/convertToFileWithDate')

async function convertMetrics () {
  try {
    await convertToFileWithDate('./issue_metrics.md', './reports/metrics', 'twilio-java')
    await convertToFileWithDate('./issue_metrics.json', './reports/metrics/json', 'twilio-java')
  } catch (err) {
    console.error(err)
  }
}

convertMetrics()