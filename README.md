# Slack List

![Cypress Tests](https://github.com/itzsaga/slack-list/workflows/Cypress%20Tests/badge.svg) [![Netlify Status](https://api.netlify.com/api/v1/badges/0131d0a9-2061-4dbd-b900-a5f16393ca81/deploy-status)](https://app.netlify.com/sites/telephone-operator-bonnie-31287/deploys) [![Known Vulnerabilities](https://snyk.io/test/github/itzsaga/slack-list/badge.svg)](https://snyk.io/test/github/itzsaga/slack-list)

An open source site listing public Slack networks from around the world.

## Usage

Visit the site at [Slack List](https://slack.directory) and browse.

## Installation

To run locally you will need [NodeJS](https://nodejs.org/) and [Yarn](https://yarnpkg.com).

```shell
git clone git@github.com:itzsaga/slack-list.git
cd slack-list
yarn
yarn develop
```

This will run a local server and you can browse the site.

## Contributing

To add networks to the list add the needed information to `./src/data/list.js`. The list page builts from this JSON object. Also make sure you add an appropriate test to `./cypress/integration/idex_spec.js`.

Bug reports and pull requests are welcome on GitHub at https://github.com/itzsaga/slack-list. If you would like to help with this project see our [Contributing](./CONTRIBUTING.md) doc for more info.

## License

The app is available as open source under the terms of the [MIT License](./LICENSE).
