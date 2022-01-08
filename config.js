module.exports = {
    hostRules: [
        {
            "matchHost": "https://gitlab.com/api/v4/projects/renovate-reproduction-test%2Fprivate-template-repo-example",
            "authType": "Bearer",
            "token": process.env["READONLY_GITLAB_LOOKUP_TOKEN"]
        }
    ]
};
