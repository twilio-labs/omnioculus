const convertToFileWithDate = require('./helpers/convertToFileWithDate')

async function convertContributors () {
  try {
    await convertToFileWithDate('./contributors.md', './reports')
  } catch (err) {
    console.error(err)
  }
}

convertContributors()