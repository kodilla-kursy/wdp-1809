# About

This is an online store app.

# Instruction

In order to start the project:

1. Clone the remote repository to your development environment

```sh
$ git clone https://github.com/Varenthein/wdp-1811-03.git
```

2. Install depedencies

```sh
$ cd wdp-1811-03
$ npm install
```

# Most important tasks

1. `npm run prewatch` - run this scripts to get stable release of project.
- it copies all necessary files from your current working directory to **dist** directory, where you'll find ready-to-be-published version of site. 

2. `npm run watch` - run this scripts during development.
- it runs current, test version of site in your browser via Browsersync.
- in case of any changes, it compiles your .scss files to .css file.
- in case of any changes in .html or .js files, it updates linked files in **dist** directory.
- when you'll add any images or fonts to your current working directory, it copies it to **dist** directory.

# Preview

You can see a preview of the project here - [https://romantic-volhard-ce5aef.netlify.com/#](https://romantic-volhard-ce5aef.netlify.com/#)

