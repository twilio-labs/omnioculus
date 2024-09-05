# Twilio GitHub Stats

This is a repository of GitHub OSPO Actions that pull stats that we can report on internally at Twilio.

## Actions

- [Monthly Contributors](./reports/contributors/): Produces information about the contributors, monthly, for our Twilio's public GitHub organizations.
- [Issue Metrics](./reports/metrics/): Gather metrics on Issues, PRs, and Discussions such as time to first response, count of issues opened, closed, and so on. Currently limited to twilio-node and sendgrid-nodejs as a trial.
- [Stale Repository Watchtower](./reports/watchtower/): A monitor that watches for stale repositories so we can act on them, if needed.
- [Retro Generator](./reports/retros/): A tool to generate a retro document from GitHub issues and PRs across Twilio's public GitHub organizations.