const convertToFileWithDate = require('../helpers/convertToFileWithDate')

async function convertMetrics () {
  try {
    await convertToFileWithDate('./issue_metrics.md', './reports/metrics', 'sendgrid-java')
    await convertToFileWithDate('./issue_metrics.json', './reports/metrics/json', 'sendgrid-java')
  } catch (err) {
    console.error(err)
  }
}

convertMetrics()