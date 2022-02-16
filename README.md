# CPE CTFD

CPE CTFD or Capture the flag (d ??) is our senior project from KMUTT

## Table of Conent

## Guideline to Use This Repo
**This conetent is base-on P'Arm project. Thank you for knowledge sharing** <br>
Read this guideline for idea:
https://nvie.com/posts/a-successful-git-branching-model/

1. Clone the git. Set the local git user for commit info.
```bash
git config --global user.name "FULL_NAME"
git config --global user.email "EMAIL"
git clone https://${GIT_URL}
```

2. Branching strategy:
   - **main** - archived project. project which in production state.
   - **develop** - project in development status. should be runable. contains all of finished features. may different compared to release branch.
   - **feature/{ feature-name in lowercase, dash separate }** - should contain meaningful feature name. should be independent as much as possible.
   - **refactor/{ context in lowercase, dash separate }** - same as feature branch. But no new features introduced in this branch.
   - **bugfix/{ bug-name or id in lowercase, dash separate }** - bugfix prioritized by planing.
   - **hotfix/{ bug-name or id lowercase, dash separate }** - on production bugfix. emergency bugfix.

3. Merging allowance:
   1. **production** should be merged by **PR**. allow only **release** branch to merged. or All test must passed. Should be identical to latest production.
   2. **develop** should be merged by **PR**. allow **any** branch to merged. Some test may failed, but importance component MUST working.
   3. **release** should checkout from develop. allow **develop, feature, bugfix, hotfix** to merged.
  
4. Checkout new branch in context ex:
```bash
git checkout -b feature/new-feature
```

5. Merge develop to feature / bugfix / refactor before pull request. 
   Any conflict should be resolve before pull request.
   Test should passed before pull request.

6. Merge using none fast forward is best for keeping history. Ex: to merge new feature into develop.
```bash
// commit change before change branch
git checkout develop
git merge --no-ff feature/new-feature 
```

7. Should use tags to deploy in production.

8. Every commit should contain usful message, except merge commit / PR commit.

9. For production will use tag to save every version from main branch
