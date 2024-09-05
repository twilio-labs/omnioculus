# Twilio GitHub Stats

This is a repository of GitHub OSPO Actions that pull stats that we can report on internally at Twilio.

## Reports

- [Monthly Contributors](./reports/contributors/): Produces information about the contributors, monthly, for our Twilio's public GitHub organizations.
- [Issue Metrics](./reports/metrics/): Gather metrics on Issues, PRs, and Discussions such as time to first response, count of issues opened, closed, and so on. Currently limited to twilio-node and sendgrid-nodejs as a trial.
- [Stale Repository Watchtower](./reports/watchtower/): A monitor that watches for stale repositories so we can act on them, if needed.
- [Retro Generator](./reports/retros/): A tool to generate a retro document from GitHub issues and PRs across Twilio's public GitHub organizations.

## Maintenance

The majority of the "work" of this repository exists in `./.github/workflows/` and runs on many crons. Additionally, there's some supporitng scripting in `./utilities` that allows us to shift to be file based and leverage git to manage historical context, rather than using issues.

The crons have been intentionally spaced out because we pretty consistently run into GitHub's secondary rate limtis, especially when submitting a PR with the `gr2m/create-or-update-pull-request` action running _after_ the OSPO actions built by GitHub.

For the retros, we specifically leverage [`cutenode/retrogen`](https://github.com/cutenode/retrogen) to poll the GitHub API and then write a markdown file. This tool isn't perfect, so if there are issues with it, consider checking back in that repository for fixes/issues.

### production npm scripts

This repository heavily relies on npm scripts as a way to create short-hand instructions that we can use in the GitHub Actions. Here's an overview of the namespaces of the production npm scripts:

- `convert` scripts use utilities in `./utilities` to convert data from the OSPO Actions from GitHub from a temporary markdown file to a permanent one.
- `retro` scripts generate retros using `cutenode/retrogen` with the scripts in `./utilities/retros`.

### maintainer npm scripts

In addition to the npm scripts that we use for "production", there's also a handful of scripts that we use for maintenance and development. Here's a quick rundown:

- `npm run biome:format`: use biome to format the code.
- `npm run biome:lint`: use biome to lint the code.
- `biome:lint:apply`: use biome to apply the linting fixes. I believe this is being changed in newer versions of biome to use `write` rather than `apply`, and may need to be adjusted soon.
- `npm run updates:check`: check for updates to dependencies using `npx` and `npm-check-updates`.
- `npm run updates:apply`: apply updates to dependencies using `npx` and `npm-check-updates`, passing the `-u` flag to `npm-check-updates`.