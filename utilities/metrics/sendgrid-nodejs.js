const convertToFileWithDate = require('../helpers/convertToFileWithDate')

async function convertMetrics () {
  try {
    await convertToFileWithDate('./issue_metrics.md', './reports/metrics', 'sendgrid-nodejs')
  } catch (err) {
    console.error(err)
  }
}

convertMetrics()