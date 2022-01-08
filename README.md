# Renovate issue reproduction project

Project to be renovated for reproducing renovate issue

## Issue

When this project is renovated by renovate-reproduction-runner project pipeline. It is able to extract dependencies, find a new tag on the private repo for the pipeline include, but then fails when it tries to lookup the changelogs(tags, changelog.md, releases) since it does not follow the host rules for hostypes: 'gitlab-tags', 'gitlab-releases' or when specifying gitlab.
