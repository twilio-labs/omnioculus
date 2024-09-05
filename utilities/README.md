# Omnioculus Utilities

This directory contains utilities that are used by Omnioculus. Here's a quick rundown of each utility:

- `/contributors`: each of the files in this directory converts the output of the [`github/contributors`](https://github.com/github/contributors) action into a markdown format that we can submit a Pull Request for with the [`create-or-update-pull-request-action`](https://github.com/gr2m/create-or-update-pull-request-action) action.
- `/helpers`: this directory contains a helper tool that converts the output from the OSPO GitHub Actions into a file so we can PR it, instead of creating an issue with it (as GitHub's team defaults to).
- `/metrics`: each of the files in this directory converts the output of [`github/issue-metrics`](https://github.com/github/issue-metrics) action for one of the repositories we're tracking into a markdown format that we can submit a Pull Request for with the [`create-or-update-pull-request-action`](https://github.com/gr2m/create-or-update-pull-request-action) action.
- `/retros`: each of the files in this directory creates a retro from the [`cutenode/retrogen`](https://github.com/github/contributors) library, outputting a markdown report.
- `/watchtower`: scripts to convert watchtower reports from the [`github/stale-repo`](https://github.com/github/stale-repos) action for one of the repositories we're tracking into a markdown format that we can submit a Pull Request for with the [`create-or-update-pull-request-action`](https://github.com/gr2m/create-or-update-pull-request-action) action.
