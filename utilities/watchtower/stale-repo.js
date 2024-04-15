const convertToFileWithDate = require('../helpers/convertToFileWithDate')

async function convertContributors () {
  try {
    await convertToFileWithDate('./stale_repos.md', './reports/watchtower', 'stale')
    await convertToFileWithDate('./stale_repos.json', './reports/watchtower/json', 'stale')
  } catch (err) {
    console.error(err)
  }
}

convertContributors()