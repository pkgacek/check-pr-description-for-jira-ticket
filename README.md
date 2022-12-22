# Check PR description for JIRA ticket

This action checks if the JIRA ticket with it's url is present in the PR description. It is using Regex that checks for valid markdown formatting with correct JIRA ticket.

Examples:

```
[JIRA-1](https://jira.com/JIRA-123) - Valid
[JIRA-1](https://jira.com) - Invalid (Missing JIRA ticket at the end of the URL)
```

## Example usage

```yaml
uses: actions/check-pr-description-for-jira-ticket@v1.0
```
