# Alexandria's portfolio
A project to free a cool website from its bloated host

## Explanation
### Design
This project runs on the following:
- **\*Node.js**: runs javascript on your desktop instead of in the browser. Any recent version should be fine. Installed via the [Node.js' website](https://nodejs.org/en)
- **npm**: installs Node.js packages (read: extensions) and manages some project stuff. Included in [Node.js](https://nodejs.org/en)
- **\*Git**: saves changes in a programmer way. It's what GitHub runs on. It's cool, if not sometimes a disaster to work with. Installed via [Git's website](https://git-scm.com/downloads)
- **Eleventy**: a static site generator that doesn't take a PHD to understand. Installed through [`npm install`](#install-locally) later in this documentation
- **EJS**: a "templating language". Basically allows you to write a .ejs file instead of a .html file, which generates a .html but with extra ease of writing and such. More info can be found on the [ejs website](https://ejs.co/#docs).

*: Has to be installed manually

### Structure
- [docs/](docs/): eleventy's output of regular html, css and javascript that any browser can read. The files in here are ready to be put on any static webhost. Usually these are not commited to the repository, but this is done here for simplicity's sake. If you want to edit something of the website, you should edit in [src/](src/) and then run `npm run build` instead
- [originalassets/](originalassets/): original files found by the original creator of the website
- [recoveredassets/](originalassets/): files recovered from older versions of the website
- [src/](src/): the code for the website itself, before it gets compiled into [docs/](docs/)
    - [_data/](src/_data/): data available for eleventy. Used to store links
    - [assets/](src/assets/): files that will be copied directly to the output folder
- [.eleventy.js](.eleventy.js): Configuration for Eleventy. This determines the input/output folders, used plugins and the like
- [.gitignore](.gitiginore): want a file not added in git? Make git ignore it through .gitignore
- [package-lock.json](package-lock.json): internal npm file, used for exact dependency management. Commit any changes it has, but there is no need/reason to edit it manually
- [package.json](package.json): Node.js/npm project configuration. Overview of dependencies, scripts (e.g. `npm run dev`) and package info where applicable
- [README.md](README.md): this file!

### Why call the dist/build/output folder `docs`?
This allows the basic GitHub Pages service (a static website host) to host the website without any fancy CI stuff for now.

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

