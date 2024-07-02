# FREEDOM
WIP title for freeing a cool website from its bloated host

## Explanation
### Design
This project runs on the following:
- **\*** Node.js: runs javascript on your desktop instead of in the browser. Any recent version should be fine. Installed via the [Node.js' website](https://nodejs.org/en)
- npm: installs Node.js packages (read: extensions) and manages some project stuff. Included in [Node.js](https://nodejs.org/en)
- **\*** Git: saves changes in a programmer way. It's what GitHub runs on. It's cool, if not sometimes a disaster to work with. Installed via [Git's website](https://git-scm.com/downloads)
- Eleventy: a static site generator that doesn't take a PHD to understand. Installed through [`npm install`](#install-locally) later in this documentation
*: Has to be installed manually

### Structure
- [dist/](dist/): static build output. The files in here are ready to be put on any static webhost! Usually not commited to the repository, but done here for simplifications sake. If you want to edit something content-wise of the website, you should  edit in [src/](src/) and then run `npm run build` instead
- [originalassets/](originalassets/): files from older versions of the website
- [src/](src/): the code for the website itself, before it gets compiled into [dist/](dist/)
- [.eleventy.js](.eleventy.js): Configuration for Eleventy. This determines the input/output folders, used plugins and the like
- [.gitignore](.gitiginore): want a file not added in git? Make git ignore it through .gitignore
- [package-lock.json](package-lock.json): internal npm file, used for exact dependency management. Commit any changes it has, but there is no need/reason to edit it manually
- [package.json](package.json): Node.js/npm project configuration. Overview of dependencies, scripts (e.g. `npm run dev`) and package info where applicable
- [README.md]: this file!

## How-to
### Install locally
```bash
# Step 1: clone the repository
# This will create 
git clone https://github.com/Neonpastel/freedom.git

# Step 2: enter directory
cd freedom

# Step 3: install pre-requisites
npm install

# Step 4: run
npm start  # run server at http://localhost:8080
npm run build  # build static website to dist/ folder
```
Alternatively for step 1, press the green `Code` button on GitHub and press `Download ZIP` to do exactly that

