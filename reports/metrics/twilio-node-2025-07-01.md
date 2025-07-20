# Issue Metrics

| Metric | Average | Median | 90th percentile |
| --- | --- | --- | ---: |
| Time to first response | 3 days, 1:50:48 | 3 days, 1:50:48 | 3 days, 1:50:48 |
| Time to close | 0:00:22 | 0:00:22 | 0:00:22 |
| Time to answer | None | None | None |

| Metric | Count |
| --- | ---: |
| Number of items that remain open | 1 |
| Number of items closed | 1 |
| Total number of items created | 2 |

| Title | URL | Author | Time to first response | Time to close | Time to answer |
| --- | --- | --- | --- | --- | --- |
| const accountSid = 'AC3bacddd418a109e27c838abb7a2a0454'; const authToken = '[AuthToken]'; const client = require('twilio')(alinmabank, authToken); client.messages     .create({         body: 'Good morning to everyone fd',         messagingServiceSid: 'MGded1451df76163bc2ccf0d96231d5950',         to: '+966557510308'     })     .then(message => console.log(message.sid)); | https://github.com/twilio/twilio-node/issues/1102 | [Bnmvcxt2](https://github.com/Bnmvcxt2) | None | 0:00:22 | None |
| [Feature Request]: Run on Cloudflare Workers | https://github.com/twilio/twilio-node/issues/1096 | [abegehr](https://github.com/abegehr) | 3 days, 1:50:48 | None | None |

_This report was generated with the [Issue Metrics Action](https://github.com/github/issue-metrics)_
Search query used to find these items: `repo:twilio/twilio-node is:issue created:2025-06-01..2025-06-30`
