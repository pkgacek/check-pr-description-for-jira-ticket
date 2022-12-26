const core = require("@actions/core");
const github = require("@actions/github");

// This Regex checks for valid markdown formatting with correct JIRA ticket.
// Examples:
// [JIRA-1](https://jira.com/JIRA-123) - Valid
// [JIRA-1](https://jira.com) - Invalid (Missing JIRA ticket at the end of the URL)
const JIRA_TICKET_REGEX =
  /[[A-Z]{2,}-\d+]\((https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})\/[A-Z]{2,}-\d+\)/gim;

function run() {
  const pullRequest =
    "-   [WRS-1](https://support.chili-publish.com/projects/WRS/issues/WRS-1)";

  if (pullRequest) {
    const body = pullRequest;
    const match = body.match(JIRA_TICKET_REGEX);

    if (!match) {
      core.setFailed(
        "The pull request description does not contain a valid JIRA ticket."
      );
    }
  }
}

run();
