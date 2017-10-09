# Contributing

Code contributions are welcome and highly encouraged! For instructions on and help with creating a great pull request, please read the below.

If you have questions about contributing, please create an issue.

## Lead Maintainers

The role of lead maintainers is to triage and categorize issues, answer questions about contributing to the repository, review and give feedback on PRs, and maintain the quality of the project's codebase and repository.

**Current Lead Maintainers**
- Seth Alexander [@itzsaga](https://github.com/itzsaga)
- Stephanie Castellanos [@stephcllanos](https://github.com/stephcllanos)
- Ben Morin [@BeAnMo](https://github.com/BeAnMo)

### Volunteer

Submitting a lot of PRs? Please volunteer to lead this repository! Lead maintainers are selected in the philosophy of [Open Open Source](http://openopensource.org/):

> Individuals making significant and valuable contributions are given commit-access to the project to contribute as they see fit. 

## Code of Conduct

The Code of Conduct explains the *bare minimum* behavior expectations we require of our contributors. [Please read it before participating.](./CODE_OF_CONDUCT.md)

## Issue Contributions

When opening new issues or commenting on existing issues on this repository please make sure discussions are related to concrete technical issues with the project.

## Code Contributions

We welcome new contributors. Individuals making significant and valuable contributions are given commit-access to the project to contribute as they see fit. This project is more like an open wiki than a standard guarded open source project.

## Rules

There are a few basic ground-rules for contributors (from [openopensource.org](http://openopensource.org/)):

1. **No `--force` pushes** or modifying the Git history in any way.
1. **Non-master branches** ought to be used for ongoing work.
1. **External API changes and significant modifications** ought to be subject to an **internal pull-request** to solicit feedback from other contributors.
1. Internal pull-requests to solicit feedback are *encouraged* for any other non-trivial contribution but left to the discretion of the contributor.
1. Contributors should attempt to adhere to the prevailing code style.

## Releases

Declaring formal releases remains the prerogative of the project maintainer.

## Changes to this arrangement

This is an experiment and feedback is welcome! This document may also be subject to pull-requests or changes by contributors where you believe you have something valuable to add or change.

## Steps to contributing

This document will guide you through the contribution process.

### Step 1: Fork

Fork the project and check out your copy locally.

> In the examples below, replace `<username>` with your username.

```text
$ git clone git@github.com:<username>/slack-list.git
$ cd slack-list
$ git remote add upstream git://github.com/itzsaga/slack-list.git
```

#### Which branch?

For developing new features and bug fixes, the `master` branch should be pulled and built upon.

In case of doubt, open an issue in the issues section or contact one of the maintainers listed above. Especially do so if you plan to work on something big. Nothing is more frustrating than seeing your hard work go to waste because your vision does not align with the project team. You can find us in #slack-list-project the [NashDev](https://nashdev.com) Slack network.


### Step 2: Branch

Create a branch and start hacking:

```text
$ git checkout -b my-branch -t origin/master
```

### Step 3: Commit

Make sure git knows your name and email address:

```text
$ git config --global user.name "J. Random User"
$ git config --global user.email "j.random.user@example.com"
```

Writing good commit logs is important. A commit log should describe what changed and why. Follow these guidelines when writing one:

 1. Separate subject from body with a blank line
 1. Limit the subject line to 50 characters
 1. Capitalize the subject line
 1. Do not end the subject line with a period
 1. Use the imperative mood in the subject line
 1. Wrap the body at 72 characters
 1. Use the body to explain _what_ and _why_ vs. _how_

For reasoning and more info on these seven rules check out [How to Write a Git Commit Message](https://chris.beams.io/posts/git-commit/).

### Step 4: Rebase

Use `git rebase` (not `git merge`) to sync your work from time to time.

```text
$ git fetch upstream
$ git rebase upstream/master
```

### Step 5: Test

Bug fixes and features **should come with tests**. Please note we currently do not have have tests. This could make a great contribution!

### Step 6: Push

```text
$ git push origin my-branch
```

Go to `https://github.com/<username>/slack-list` and select your branch.
Click the 'Pull Request' button and fill out the form.

Pull requests are usually reviewed within a few days. If there are comments to address, apply your changes in a separate commit and push that to your branch. Post a comment in the pull request afterwards; GitHub does not send out notifications when you add commits.

<a id="developers-certificate-of-origin"></a>
## Developer's Certificate of Origin 1.1

By making a contribution to this project, I certify that:

* (a) The contribution was created in whole or in part by me and I have the right to submit it under the open source license indicated in the file; or

* (b) The contribution is based upon previous work that, to the best of my knowledge, is covered under an appropriate open source license and I have the right under that license to submit that work with modifications, whether created in whole or in part by me, under the same open source license (unless I am permitted to submit under a different license), as indicated in the file; or

* (c) The contribution was provided directly to me by some other person who certified (a), (b) or (c) and I have not modified it.

* (d) I understand and agree that this project and the contribution are public and that a record of the contribution (including all personal information I submit with it, including my sign-off) is maintained indefinitely and may be redistributed consistent with this project or the open source license(s) involved.
